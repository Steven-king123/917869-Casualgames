extends SceneTree

const BoardModelScript = preload("res://scripts/core/board_model.gd")

func _init() -> void:
	var model := BoardModelScript.new()

	# 横向规则合成：8 + 7 -> 78。
	model.create_tile(0,0,8)
	model.create_tile(0,1,7)
	var result := model.simulate_move("left")
	assert(result.events.size() == 1 and result.events[0].value == 78)
	model.commit_move(result)
	assert(model.tile_at(0,0).value == 78)

	# 基础数字没有定义组合时双方消失。
	model.clear()
	model.create_tile(0,0,6)
	model.create_tile(0,1,7)
	assert(model.simulate_move("left").events[0].type == "vanish")

	# 纵向规则合成：7 + 6 -> 13。
	model.clear()
	model.create_tile(0,0,7)
	model.create_tile(1,0,6)
	assert(model.simulate_move("up").events[0].value == 13)

	# 解锁 Tier 1 后，相同的特殊数字可以升阶。
	model.clear()
	model.unlocked_tier = 1
	model.create_tile(0,0,91)
	model.create_tile(0,1,91)
	result = model.simulate_move("left")
	assert(result.events[0].value == 91 and result.events[0].tier == 1)
	model.commit_move(result)
	assert(model.tile_at(0,0).tier == 1)

	# 胜利序列和存档往返。
	model.clear()
	model.create_tile(2,0,91)
	model.create_tile(2,1,78)
	model.create_tile(2,2,69)
	assert(model.has_pattern(0))
	var saved := model.export_data()
	var restored := BoardModelScript.new()
	assert(restored.import_data(saved))
	assert(restored.has_pattern(0))
	assert(restored.tile_at(2,1).value == 78)

	print("BoardModel: all tests passed")
	quit()