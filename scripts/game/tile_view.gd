class_name TileView
extends PanelContainer

var tile_id := 0
var value := 0
var tier := 0
var number_label:Label
var tier_label:Label

func setup(id:int, new_value:int, new_tier:int) -> void:
	tile_id = id
	value = new_value
	tier = new_tier
	if is_node_ready():
		refresh()

func _ready() -> void:
	mouse_filter = Control.MOUSE_FILTER_IGNORE
	var stack := VBoxContainer.new()
	stack.alignment = BoxContainer.ALIGNMENT_CENTER
	add_child(stack)
	tier_label = Label.new()
	tier_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	tier_label.add_theme_font_size_override("font_size", 11)
	stack.add_child(tier_label)
	number_label = Label.new()
	number_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	number_label.add_theme_font_size_override("font_size", 30)
	number_label.add_theme_color_override("font_color", Color.WHITE)
	number_label.add_theme_constant_override("outline_size", 4)
	number_label.add_theme_color_override("font_outline_color", Color(0,0,0,0.25))
	stack.add_child(number_label)
	refresh()

func refresh() -> void:
	if number_label == null:
		return
	number_label.text = str(value)
	tier_label.text = "" if tier == 0 else ("✦✦" if tier == 1 else "✦✦✦")
	tier_label.add_theme_color_override("font_color", Color("fff0a8"))
	add_theme_stylebox_override("panel", make_style(value, tier))

static func make_style(number:int, level:int) -> StyleBoxFlat:
	var colors := {1:"6d5dfc",6:"3974d8",7:"7b4fd4",8:"d14fa8",9:"e55f78",13:"2a9d8f",69:"e27635",78:"23a6d5",91:"d3a72f"}
	var color := Color(colors.get(number,"4d5a86")).lightened(level * 0.12)
	var style := StyleBoxFlat.new()
	style.bg_color = color
	style.set_corner_radius_all(12)
	style.set_border_width_all(1 + level)
	style.border_color = Color(1,0.92,0.55,0.8) if level > 0 else Color(1,1,1,0.18)
	style.shadow_color = Color(color,0.45)
	style.shadow_size = 6 + level * 3
	return style