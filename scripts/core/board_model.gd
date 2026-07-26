class_name BoardModel
extends RefCounted

const SIZE := 4
const MAX_TIER := 2
const SPAWN_VALUES := [6, 7, 8]
const VANISH := {1:true, 6:true, 7:true, 8:true, 9:true}
const UPGRADE := {91:true, 78:true, 69:true}
const WIN_PATTERN := [91, 78, 69]
const RULES := {
	"horizontal": {"8,7":78, "78,13":91, "13,78":91, "9,6":69, "6,9":69, "1,91":9, "91,1":9},
	"vertical": {"7,6":13, "6,7":1, "7,8":1, "78,13":91, "13,78":91, "91,1":9, "1,91":9},
}

var board: Array = []
var tiles := {}
var next_id := 1
var unlocked_tier := 0
var last_spawn := -1
var spawn_streak := 0

func _init() -> void: clear()

func clear() -> void:
	board = []
	for _i in SIZE: board.append([0, 0, 0, 0])
	tiles.clear(); next_id = 1; last_spawn = -1; spawn_streak = 0

func create_tile(row:int, col:int, value:int, tier:int = 0) -> int:
	var id := next_id; next_id += 1
	tiles[id] = {"id":id, "row":row, "col":col, "value":value, "tier":tier}
	board[row][col] = id
	return id

func tile_at(row:int, col:int) -> Dictionary:
	return tiles.get(board[row][col], {})

func _axis(direction:String) -> String:
	return "horizontal" if direction in ["left", "right"] else "vertical"

func resolve_collision(a:Dictionary, b:Dictionary, direction:String) -> Dictionary:
	if a.is_empty() or b.is_empty() or a.tier != b.tier: return {"type":"block"}
	var result = RULES[_axis(direction)].get("%s,%s" % [a.value, b.value])
	if result != null: return {"type":"merge", "value":result, "tier":a.tier, "is_upgrade":false}
	if a.value == b.value and UPGRADE.has(a.value) and a.tier < MAX_TIER and a.tier < unlocked_tier:
		return {"type":"merge", "value":a.value, "tier":a.tier + 1, "is_upgrade":true}
	if VANISH.has(a.value) and VANISH.has(b.value): return {"type":"vanish"}
	return {"type":"block"}

func _process_line(ids:Array, direction:String) -> Array:
	var reverse := direction in ["right", "down"]
	var ordered := ids.duplicate()
	if reverse: ordered.reverse()
	var filtered := ordered.filter(func(id): return id != 0)
	var output:Array = []; var i := 0
	while i < filtered.size():
		if i == filtered.size() - 1:
			output.append({"type":"keep", "id":filtered[i]}); i += 1; continue
		var a:int = filtered[i]; var b:int = filtered[i + 1]
		var collision := resolve_collision(tiles[a], tiles[b], direction)
		if collision.type == "merge":
			output.append({"type":"merge", "ids":[a,b], "value":collision.value, "tier":collision.tier, "is_upgrade":collision.is_upgrade}); i += 2
		elif collision.type == "vanish":
			output.append({"type":"vanish", "ids":[a,b]}); i += 2
		else:
			output.append({"type":"keep", "id":a}); i += 1
	while output.size() < SIZE: output.append({"type":"empty"})
	if reverse: output.reverse()
	return output

func simulate_move(direction:String) -> Dictionary:
	var next_board := []
	for _i in SIZE:
		next_board.append([0,0,0,0])
	var targets := {}; var events:Array = []; var changed := false
	for line_i in SIZE:
		var line:Array = []
		if _axis(direction) == "horizontal": line = board[line_i].duplicate()
		else:
			for row in SIZE:
				line.append(board[row][line_i])
		var output := _process_line(line, direction)
		for slot_i in SIZE:
			var row := line_i if _axis(direction) == "horizontal" else slot_i
			var col := slot_i if _axis(direction) == "horizontal" else line_i
			var slot:Dictionary = output[slot_i]
			if slot.type == "keep":
				var id:int = slot.id; next_board[row][col] = id; targets[id] = Vector2i(col,row)
				changed = changed or tiles[id].row != row or tiles[id].col != col
			elif slot.type in ["merge", "vanish"]:
				for id in slot.ids: targets[id] = Vector2i(col,row)
				var event := slot.duplicate(true); event["to"] = Vector2i(col,row); event["values"] = [tiles[slot.ids[0]].value,tiles[slot.ids[1]].value]
				events.append(event); changed = true
	return {"changed":changed, "next_board":next_board, "targets":targets, "events":events}

func commit_move(result:Dictionary) -> Array:
	board = result.next_board
	for id in result.targets:
		if tiles.has(id):
			var pos:Vector2i = result.targets[id]; tiles[id].row = pos.y; tiles[id].col = pos.x
	var created:Array = []
	for event in result.events:
		for id in event.ids: tiles.erase(id)
		if event.type == "merge":
			var pos:Vector2i = event.to; created.append(create_tile(pos.y,pos.x,event.value,event.tier))
	return created

func add_random_tile() -> int:
	var empty:Array[Vector2i] = []
	for row in SIZE:
		for col in SIZE:
			if board[row][col] == 0: empty.append(Vector2i(col,row))
	if empty.is_empty(): return 0
	var choice:int = SPAWN_VALUES.pick_random()
	if choice == last_spawn and spawn_streak >= 5:
		choice = SPAWN_VALUES.filter(func(v): return v != last_spawn).pick_random()
	if choice == last_spawn: spawn_streak += 1
	else: last_spawn = choice; spawn_streak = 1
	var pos:Vector2i = empty.pick_random()
	return create_tile(pos.y,pos.x,choice)

func has_pattern(tier:int) -> bool:
	for row in SIZE:
		for start in 2:
			var ok := true
			for offset in 3:
				var tile := tile_at(row,start + offset)
				if tile.is_empty() or tile.value != WIN_PATTERN[offset] or tile.tier != tier: ok = false; break
			if ok: return true
	return false

func can_move() -> bool:
	for row in SIZE:
		if board[row].has(0): return true
	for direction in ["left","right","up","down"]:
		if simulate_move(direction).changed: return true
	return false

func export_data() -> Dictionary:
	var cells:Array = []
	for row in SIZE:
		var line:Array = []
		for col in SIZE:
			var tile := tile_at(row,col); line.append(null if tile.is_empty() else {"value":tile.value,"tier":tile.tier})
		cells.append(line)
	return {"cells":cells,"unlocked_tier":unlocked_tier,"last_spawn":last_spawn,"spawn_streak":spawn_streak}

func import_data(data:Dictionary) -> bool:
	if not data.get("cells",[]) is Array or data.cells.size() != SIZE: return false
	clear(); unlocked_tier = clampi(int(data.get("unlocked_tier",0)),0,MAX_TIER)
	last_spawn = int(data.get("last_spawn",-1)); spawn_streak = int(data.get("spawn_streak",0))
	for row in SIZE:
		if not data.cells[row] is Array or data.cells[row].size() != SIZE: return false
		for col in SIZE:
			var cell = data.cells[row][col]
			if cell is Dictionary: create_tile(row,col,int(cell.get("value",0)),clampi(int(cell.get("tier",0)),0,MAX_TIER))
	return true
