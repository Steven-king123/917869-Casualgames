extends Control

const BoardViewScript = preload("res://scripts/game/board_view.gd")
const BoardModelScript = preload("res://scripts/core/board_model.gd")
const SaveManagerScript = preload("res://scripts/systems/save_manager.gd")
const SAVE_VERSION := 1

var model := BoardModelScript.new()
var board_view
var stage_label:Label
var moves_label:Label
var time_label:Label
var status_label:Label
var pause_button:Button
var overlay:ColorRect
var overlay_title:Label
var overlay_body:Label
var overlay_primary:Button
var overlay_secondary:Button
var elapsed := 0.0
var moves := 0
var score := 0
var stage := 0
var running := true
var animating := false
var game_over := false
var touch_start := Vector2.ZERO
var touching := false
var profile := {"best_score":0,"wins":0,"games":0,"achievements":{},"history":[],"performance_mode":false}

func _ready() -> void:
	randomize()
	_build_interface()
	_load_profile()
	_apply_performance_mode()
	var saved:Dictionary = SaveManagerScript.read(SaveManagerScript.SAVE_PATH)
	if saved.is_empty() or not _restore_game(saved):
		new_game()
	else:
		board_view.sync(model)
		_update_hud()
		if not running:
			call_deferred("_show_restored_pause")
	get_viewport().size_changed.connect(_fit_board)
	call_deferred("_fit_board")

func _process(delta:float) -> void:
	if running and not animating:
		elapsed += delta
		_update_time()

func _build_interface() -> void:
	var background := ColorRect.new()
	background.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	background.color = Color("0f1021")
	background.mouse_filter = Control.MOUSE_FILTER_IGNORE
	add_child(background)
	var glow := ColorRect.new()
	glow.set_anchors_preset(Control.PRESET_FULL_RECT)
	glow.color = Color(0.15,0.10,0.35,0.25)
	glow.mouse_filter = Control.MOUSE_FILTER_IGNORE
	add_child(glow)

	var margin := MarginContainer.new()
	margin.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	margin.add_theme_constant_override("margin_left",22)
	margin.add_theme_constant_override("margin_right",22)
	margin.add_theme_constant_override("margin_top",22)
	margin.add_theme_constant_override("margin_bottom",18)
	add_child(margin)
	var root_box := VBoxContainer.new()
	root_box.add_theme_constant_override("separation",14)
	margin.add_child(root_box)

	var header := HBoxContainer.new()
	root_box.add_child(header)
	var title_box := VBoxContainer.new()
	title_box.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	header.add_child(title_box)
	var title := Label.new()
	title.text = "917869"
	title.add_theme_font_size_override("font_size",34)
	title.add_theme_color_override("font_color",Color("f3efff"))
	title_box.add_child(title)
	stage_label = Label.new()
	stage_label.add_theme_font_size_override("font_size",14)
	stage_label.add_theme_color_override("font_color",Color("b9a9ff"))
	title_box.add_child(stage_label)
	pause_button = _button("暂停",_toggle_pause)
	pause_button.custom_minimum_size = Vector2(82,48)
	header.add_child(pause_button)

	var stats := HBoxContainer.new()
	stats.add_theme_constant_override("separation",8)
	root_box.add_child(stats)
	moves_label = _stat_card(stats,"步数")
	time_label = _stat_card(stats,"时间")
	var best := _stat_card(stats,"最高")
	best.name = "BestLabel"

	var center := CenterContainer.new()
	center.size_flags_vertical = Control.SIZE_EXPAND_FILL
	root_box.add_child(center)
	board_view = BoardViewScript.new()
	center.add_child(board_view)

	status_label = Label.new()
	status_label.text = "滑动棋盘，合成 91 · 78 · 69"
	status_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	status_label.add_theme_font_size_override("font_size",15)
	status_label.add_theme_color_override("font_color",Color("c9c5e8"))
	root_box.add_child(status_label)

	var toolbar := HBoxContainer.new()
	toolbar.alignment = BoxContainer.ALIGNMENT_CENTER
	toolbar.add_theme_constant_override("separation",8)
	root_box.add_child(toolbar)
	toolbar.add_child(_button("新游戏",_confirm_new_game))
	toolbar.add_child(_button("规则",_show_rules))
	toolbar.add_child(_button("成就",_show_achievements))
	toolbar.add_child(_button("更多",_show_more))
	_build_overlay()

func _stat_card(parent:Container, caption:String) -> Label:
	var panel := PanelContainer.new()
	panel.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	panel.add_theme_stylebox_override("panel",_panel_style(Color(1,1,1,0.07),10))
	parent.add_child(panel)
	var box := VBoxContainer.new()
	box.alignment = BoxContainer.ALIGNMENT_CENTER
	panel.add_child(box)
	var cap := Label.new()
	cap.text = caption
	cap.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	cap.add_theme_font_size_override("font_size",12)
	cap.add_theme_color_override("font_color",Color("9993b8"))
	box.add_child(cap)
	var value := Label.new()
	value.text = "0"
	value.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	value.add_theme_font_size_override("font_size",20)
	box.add_child(value)
	return value

func _button(text:String, callback:Callable) -> Button:
	var button := Button.new()
	button.text = text
	button.custom_minimum_size = Vector2(92,42)
	button.add_theme_font_size_override("font_size",14)
	button.add_theme_stylebox_override("normal",_panel_style(Color("29254a"),10))
	button.add_theme_stylebox_override("hover",_panel_style(Color("3b3470"),10))
	button.add_theme_stylebox_override("pressed",_panel_style(Color("1d1a36"),10))
	button.pressed.connect(callback)
	return button

func _panel_style(color:Color, radius:int) -> StyleBoxFlat:
	var style := StyleBoxFlat.new()
	style.bg_color = color
	style.set_corner_radius_all(radius)
	style.content_margin_left = 12
	style.content_margin_right = 12
	style.content_margin_top = 8
	style.content_margin_bottom = 8
	return style

func _build_overlay() -> void:
	overlay = ColorRect.new()
	overlay.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	overlay.color = Color(0.02,0.02,0.08,0.88)
	overlay.visible = false
	overlay.mouse_filter = Control.MOUSE_FILTER_STOP
	add_child(overlay)
	var center := CenterContainer.new()
	center.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	overlay.add_child(center)
	var panel := PanelContainer.new()
	panel.custom_minimum_size = Vector2(420,300)
	panel.add_theme_stylebox_override("panel",_panel_style(Color("19172d"),18))
	center.add_child(panel)
	var box := VBoxContainer.new()
	box.add_theme_constant_override("separation",16)
	panel.add_child(box)
	overlay_title = Label.new()
	overlay_title.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	overlay_title.add_theme_font_size_override("font_size",28)
	box.add_child(overlay_title)
	overlay_body = Label.new()
	overlay_body.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	overlay_body.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	overlay_body.size_flags_vertical = Control.SIZE_EXPAND_FILL
	overlay_body.add_theme_font_size_override("font_size",16)
	box.add_child(overlay_body)
	var row := HBoxContainer.new()
	row.alignment = BoxContainer.ALIGNMENT_CENTER
	box.add_child(row)
	overlay_secondary = _button("关闭",_close_overlay)
	row.add_child(overlay_secondary)
	overlay_primary = _button("继续",_close_overlay)
	row.add_child(overlay_primary)

func _fit_board() -> void:
	if board_view == null: return
	var available := minf(size.x - 44.0,size.y * 0.53)
	var side := clampf(available,300.0,500.0)
	board_view.custom_minimum_size = Vector2(side,side)
	board_view.sync(model)

func new_game() -> void:
	if overlay != null:
		overlay.visible = false
	model.clear()
	model.unlocked_tier = 0
	stage = 0; moves = 0; score = 0; elapsed = 0.0
	running = true; animating = false; game_over = false
	model.add_random_tile(); model.add_random_tile()
	profile.games = int(profile.get("games",0)) + 1
	board_view.sync(model)
	_update_hud()
	_save_all()
	status_label.text = "滑动棋盘，合成 91 · 78 · 69"

func perform_move(direction:String) -> void:
	if not running or animating or overlay.visible: return
	var result := model.simulate_move(direction)
	if not result.changed: return
	animating = true
	await board_view.animate_targets(result.targets)
	await board_view.animate_resolution(result.events)
	var created := model.commit_move(result)
	for event in result.events:
		if event.type == "merge": score += 20 + int(event.value) * (int(event.tier) + 1)
		else: score += 5
	moves += 1
	board_view.sync(model)
	await board_view.animate_spawn(created)
	var spawned := model.add_random_tile()
	board_view.sync(model)
	if spawned != 0: await board_view.animate_spawn([spawned])
	animating = false
	_check_progress()
	_update_hud()
	if not game_over:
		_save_all()

func _check_progress() -> void:
	if moves >= 50: _unlock("persistent")
	if score >= 5000: _unlock("score_5000")
	if model.has_pattern(stage):
		if stage < 2:
			stage += 1
			model.unlocked_tier = stage
			_unlock("stage_%d" % stage)
			running = false
			status_label.text = "阶段完成！已解锁 Tier %d 合成" % stage
			_show_overlay("阶段突破","目标序列已稳定。相同的 91 / 78 / 69 现在可以升阶。", "继续", _resume, false)
		else:
			running = false
			game_over = true
			profile.wins = int(profile.get("wins",0)) + 1
			_unlock("ascended")
			_record_result(true)
			_show_overlay("ASCENDED","你完成了全部三层目标！\n步数：%d　时间：%s　分数：%d" % [moves,_format_time(elapsed),score],"新游戏",new_game)
	elif not model.can_move():
		running = false
		game_over = true
		_record_result(false)
		_show_overlay("游戏结束","棋盘已没有可执行的移动。\n本局分数：%d" % score,"再试一次",new_game)

func _toggle_pause() -> void:
	if animating or game_over: return
	if running:
		running = false
		_update_hud()
		_show_overlay("已暂停","计时与输入已暂停。","继续",_resume)
	else:
		_resume()

func _resume() -> void:
	if game_over: return
	_close_overlay()
	running = true
	_update_hud()
	_save_all()

func _show_restored_pause() -> void:
	_show_overlay("继续上次游戏","已恢复自动存档，计时与输入仍处于暂停状态。","继续",_resume)

func _show_overlay(title:String,body:String,primary_text:String,primary_action:Callable,secondary := true) -> void:
	overlay_title.text = title
	overlay_body.text = body
	overlay_primary.text = primary_text
	for connection in overlay_primary.pressed.get_connections():
		overlay_primary.pressed.disconnect(connection["callable"])
	overlay_primary.pressed.connect(primary_action)
	overlay_secondary.visible = secondary
	overlay.visible = true

func _close_overlay() -> void:
	overlay.visible = false

func _confirm_new_game() -> void:
	_show_overlay("开始新游戏？","当前棋盘会被清除，但成就与历史记录会保留。","确认",new_game)

func _show_rules() -> void:
	_show_overlay("规则","横向：8→7=78，13↔78=91，6↔9=69，91↔1=9\n纵向：7→6=13，6→7=1，7→8=1\n未定义且双方属于 1/6/7/8/9 时一起消失。\n每阶段让任一行出现 91、78、69。","知道了",_close_overlay,false)

func _show_achievements() -> void:
	var unlocked:Dictionary = profile.get("achievements",{})
	var text := "阶段学徒　%s\n进阶稳定　%s\n最终升华　%s\n坚持不懈　%s\n高分选手　%s" % [_mark(unlocked.has("stage_1")),_mark(unlocked.has("stage_2")),_mark(unlocked.has("ascended")),_mark(unlocked.has("persistent")),_mark(unlocked.has("score_5000"))]
	_show_overlay("成就",text,"关闭",_close_overlay,false)

func _show_more() -> void:
	var history:Array = profile.get("history",[])
	var ranking := _history_summary(history)
	var mode := "开启" if profile.get("performance_mode",false) else "关闭"
	_show_overlay("档案与设置","最高分：%d　胜利：%d　开局：%d\n\n本地历史（按分数）：\n%s\n\n性能模式：%s\n存档位于 Godot user://。" % [profile.get("best_score",0),profile.get("wins",0),profile.get("games",0),ranking,mode],"切换性能模式",_toggle_performance)

func _history_summary(history:Array) -> String:
	if history.is_empty():
		return "暂无已结束的对局"
	var ranked := history.duplicate(true)
	ranked.sort_custom(func(a, b): return int(a.get("score",0)) > int(b.get("score",0)))
	var lines:Array[String] = []
	for index in mini(5,ranked.size()):
		var entry:Dictionary = ranked[index]
		lines.append("%d. %s　%d 分 / %d 步" % [index + 1,"胜利" if entry.get("won",false) else "失败",entry.get("score",0),entry.get("moves",0)])
	return "\n".join(lines)

func _toggle_performance() -> void:
	profile.performance_mode = not profile.get("performance_mode",false)
	_apply_performance_mode()
	_save_profile()
	_close_overlay()
	status_label.text = "性能模式已%s" % ("开启" if profile.performance_mode else "关闭")

func _apply_performance_mode() -> void:
	if board_view != null:
		board_view.set("performance_mode",bool(profile.get("performance_mode",false)))

func _mark(done:bool) -> String: return "✓" if done else "·"

func _unlock(id:String) -> void:
	var achievements:Dictionary = profile.get("achievements",{})
	if achievements.has(id): return
	achievements[id] = Time.get_unix_time_from_system()
	profile.achievements = achievements

func _record_result(won:bool) -> void:
	profile.best_score = maxi(int(profile.get("best_score",0)),score)
	var history:Array = profile.get("history",[])
	history.push_front({"won":won,"score":score,"moves":moves,"time":int(elapsed),"date":Time.get_datetime_string_from_system()})
	if history.size() > 10: history.resize(10)
	profile.history = history
	SaveManagerScript.delete_save()
	_save_profile()

func _save_all() -> void:
	profile.best_score = maxi(int(profile.get("best_score",0)),score)
	if not game_over:
		SaveManagerScript.write(SaveManagerScript.SAVE_PATH,{"version":SAVE_VERSION,"board":model.export_data(),"stage":stage,"moves":moves,"score":score,"elapsed":elapsed,"running":running})
	_save_profile()

func _save_profile() -> void: SaveManagerScript.write(SaveManagerScript.PROFILE_PATH,profile)

func _load_profile() -> void:
	var loaded:Dictionary = SaveManagerScript.read(SaveManagerScript.PROFILE_PATH)
	if not loaded.is_empty(): profile.merge(loaded,true)

func _restore_game(data:Dictionary) -> bool:
	if int(data.get("version",0)) != SAVE_VERSION or not data.get("board",{}) is Dictionary: return false
	if not model.import_data(data.board): return false
	stage = clampi(int(data.get("stage",0)),0,2)
	moves = maxi(0,int(data.get("moves",0)))
	score = maxi(0,int(data.get("score",0)))
	elapsed = maxf(0.0,float(data.get("elapsed",0.0)))
	running = bool(data.get("running",true))
	game_over = false
	return true

func _update_hud() -> void:
	stage_label.text = "阶段 %d / 3　目标 Tier %d" % [stage + 1,stage]
	moves_label.text = str(moves)
	pause_button.text = "暂停" if running else "继续"
	var best:Label = find_child("BestLabel",true,false)
	if best != null: best.text = str(maxi(score,int(profile.get("best_score",0))))
	_update_time()

func _update_time() -> void:
	if time_label != null: time_label.text = _format_time(elapsed)

func _format_time(seconds:float) -> String:
	return "%02d:%02d" % [int(seconds) / 60,int(seconds) % 60]

func _input(event:InputEvent) -> void:
	if event.is_action_pressed("pause_game"):
		_toggle_pause(); get_viewport().set_input_as_handled(); return
	for action in ["move_left","move_right","move_up","move_down"]:
		if event.is_action_pressed(action):
			perform_move(action.trim_prefix("move_")); get_viewport().set_input_as_handled(); return
	if event is InputEventScreenTouch:
		if event.pressed:
			touch_start = event.position; touching = true
		elif touching:
			_handle_swipe(event.position - touch_start); touching = false
	elif event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT:
		if event.pressed:
			touch_start = event.position; touching = true
		elif touching:
			_handle_swipe(event.position - touch_start); touching = false

func _handle_swipe(delta:Vector2) -> void:
	if delta.length() < 42.0: return
	if absf(delta.x) > absf(delta.y): perform_move("right" if delta.x > 0 else "left")
	else: perform_move("down" if delta.y > 0 else "up")

func _notification(what:int) -> void:
	if what == NOTIFICATION_WM_CLOSE_REQUEST or what == NOTIFICATION_APPLICATION_PAUSED:
		if model != null and not model.tiles.is_empty() and not game_over: _save_all()
		if what == NOTIFICATION_WM_CLOSE_REQUEST: get_tree().quit()