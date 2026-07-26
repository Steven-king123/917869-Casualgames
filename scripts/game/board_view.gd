class_name BoardView
extends Control

const TileScript = preload("res://scripts/game/tile_view.gd")
const GAP := 10.0
const PADDING := 14.0
var tile_views := {}
var performance_mode := false

func _duration(normal:float) -> float:
	return normal * 0.45 if performance_mode else normal

func _ready() -> void:
	custom_minimum_size = Vector2(460,460)
	mouse_filter = Control.MOUSE_FILTER_STOP
	resized.connect(queue_redraw)

func _draw() -> void:
	draw_style_box(_box(Color(0.02,0.03,0.10,0.58),18),Rect2(Vector2.ZERO,size))
	for row in 4:
		for col in 4:
			draw_style_box(_box(Color(1,1,1,0.075),11),cell_rect(row,col))

func _box(color:Color, radius:int) -> StyleBoxFlat:
	var style := StyleBoxFlat.new()
	style.bg_color = color
	style.set_corner_radius_all(radius)
	return style

func cell_rect(row:int,col:int) -> Rect2:
	var side := (minf(size.x,size.y) - PADDING * 2.0 - GAP * 3.0) / 4.0
	return Rect2(PADDING + col * (side + GAP),PADDING + row * (side + GAP),side,side)

func sync(model) -> void:
	for id in tile_views.keys():
		if not model.tiles.has(id):
			tile_views[id].queue_free()
			tile_views.erase(id)
	for id in model.tiles:
		var tile:Dictionary = model.tiles[id]
		var view = tile_views.get(id)
		if view == null:
			view = TileScript.new()
			view.setup(id,tile.value,tile.tier)
			add_child(view)
			tile_views[id] = view
		var rect := cell_rect(tile.row,tile.col)
		view.position = rect.position
		view.size = rect.size
	queue_redraw()

func animate_targets(targets:Dictionary) -> void:
	if targets.is_empty(): return
	var tween := create_tween().set_parallel(true).set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	for id in targets:
		if tile_views.has(id):
			var pos:Vector2i = targets[id]
			tween.tween_property(tile_views[id],"position",cell_rect(pos.y,pos.x).position,_duration(0.18))
	await tween.finished

func animate_resolution(events:Array) -> void:
	if events.is_empty(): return
	var tween := create_tween().set_parallel(true)
	for event in events:
		for id in event.ids:
			if tile_views.has(id):
				var view:Control = tile_views[id]
				view.pivot_offset = view.size / 2.0
				tween.tween_property(view,"scale",Vector2(0.1,0.1),_duration(0.12))
				tween.tween_property(view,"modulate:a",0.0,_duration(0.12))
	await tween.finished

func animate_spawn(ids:Array) -> void:
	if ids.is_empty(): return
	var tween := create_tween().set_parallel(true)
	for id in ids:
		if tile_views.has(id):
			var view:Control = tile_views[id]
			view.pivot_offset = view.size / 2.0
			view.scale = Vector2(0.15,0.15)
			view.modulate.a = 0.2
			tween.tween_property(view,"scale",Vector2.ONE,_duration(0.18)).set_trans(Tween.TRANS_BACK).set_ease(Tween.EASE_OUT)
			tween.tween_property(view,"modulate:a",1.0,_duration(0.12))
	await tween.finished
