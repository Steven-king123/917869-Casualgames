# 917869（Godot 4 原生版 未完善，建议游玩html版）

一款基于 **Godot 4.x + GDScript** 重构的 4×4 数字合成游戏。项目采用原生 `Control` UI，不依赖 WebView，目标平台为 Windows 和 Android。仓库中的 HTML 文件仅保留为原版行为参考。

## 当前功能

- 分方向、表驱动的合成/消失规则
- Tier 0～2 三阶段流程，最终目标为 `ASCENDED`
- 键盘方向键、WASD、鼠标拖动及 Android 触摸滑动
- 移动、合并、消失和生成 Tween 动画
- 暂停、计时、分数、最高分与自动恢复
- 本地成就、最近 10 局历史及前 5 名本地排行
- 性能模式（缩短动画时间）
- `user://save.json` 活动局存档与 `user://profile.json` 玩家档案
- 540×960 竖屏基准、响应式棋盘和 GL Compatibility 渲染器

## 环境要求与运行

- Godot **4.3 或更高的 4.x 版本**（标准版即可，不需要 .NET）
- Android 导出还需要匹配版本的 Export Templates、JDK 和 Android SDK

在 Godot Project Manager 中导入本目录的 `project.godot`，等待资源扫描后按 `F5`。如果 `godot` 已加入 PATH：

```powershell
godot --path . --editor
godot --path .
```

## 控制方式

- Windows：方向键或 `WASD`
- 暂停/继续：空格或 `Esc`
- 鼠标/Android：在棋盘区域向目标方向滑动（阈值 42 px）

## 游戏规则

每次有效移动后，在随机空位生成 `6 / 7 / 8`。同一个值连续生成 5 次后，下一次强制改用其他值。

### 横向

- `8 → 7 = 78`
- `78 ↔ 13 = 91`
- `9 ↔ 6 = 69`
- `1 ↔ 91 = 9`

### 纵向

- `7 → 6 = 13`
- `6 → 7 = 1`
- `7 → 8 = 1`
- `78 ↔ 13 = 91`
- `91 ↔ 1 = 9`

没有命中合成规则、但双方都属于 `{1, 6, 7, 8, 9}` 时，两块一起消失。`91 / 78 / 69` 在阶段解锁后可由两个同值、同 Tier 方块升到下一 Tier。

每阶段需要让任意一行连续出现 `[91, 78, 69]`：先完成 Tier 0，再完成 Tier 1，最后完成 Tier 2。

## 项目结构

```text
project.godot                     项目与 InputMap 配置
export_presets.cfg                Windows / Android 导出预设
scenes/main.tscn                  入口场景
scripts/main.gd                   游戏流程、UI、输入及档案
scripts/core/board_model.gd       纯棋盘模型与规则计算
scripts/game/board_view.gd        棋盘绘制与 Tween 动画
scripts/game/tile_view.gd         数字块显示
scripts/systems/save_manager.gd   JSON 存档
scripts/tests/board_model_tests.gd 核心规则命令行测试
data/                             成就与公告元数据
```

## 测试

```powershell
godot --headless --path . --script scripts/tests/board_model_tests.gd
```

## 导出 Windows

安装匹配版本的 Export Templates 后，在“项目 → 导出”选择 `Windows Desktop`，或执行：

```powershell
godot --headless --path . --export-release "Windows Desktop" build/windows/917869.exe
```

## 导出 Android

1. 安装 Export Templates，并在“编辑器设置 → Export → Android”配置 JDK 与 Android SDK。
2. 调试包可使用调试签名；发布包请创建自己的 keystore，切勿提交密钥。
3. 按需修改唯一包名 `org.godotengine.game917869`、版本号及图标。
4. 导出预设默认生成 `build/android/917869.apk`。

项目使用 `gl_compatibility`，默认只启用 `arm64-v8a`；如需兼容旧 32 位设备，请在预设中启用 `armeabi-v7a`。

## 存档说明

存档位于 Godot 的 `user://`。活动局结束后删除 `save.json`，玩家档案、成就与历史保留在 `profile.json`。

## 验证说明

代码按 Godot 4.x 语法编写。若开发机器未安装 Godot CLI，只能完成文本和静态结构检查；首次导入后请确认编辑器无解析错误，并在 Windows 与 Android 真机验证输入、缩放、暂停恢复和存档。

## 许可证

本项目用于个人学习与娱乐，可按需二次修改与发布。
