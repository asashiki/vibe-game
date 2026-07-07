# 参考资料池

这里收集和 Vibe 游戏开发相关的补充资料。

**主手册（双语维护）**：
- English: [AI-Game-Dev-Guide.md](./AI-Game-Dev-Guide.md)
- 中文: [AI-Game-Dev-Guide.zh.md](./AI-Game-Dev-Guide.zh.md)

**主手册**：
- English: [AI-Game-Dev-Guide.md](./AI-Game-Dev-Guide.md)
- 中文: [AI-Game-Dev-Guide.zh.md](./AI-Game-Dev-Guide.zh.md)

（双语维护，聚焦 Claude Fable 5 + AI 辅助游戏开发的完整实践指南）

## 分类

### 3D / 建模 / 场景生成
- doubao-seed3d (Seed3D 1.0/2.0, ByteDance/Volcano): Image → 高保真 simulation-ready 3D (PBR, watertight, parts decomposition)。游戏/XR/仿真首选。用户工作流：Image-2 生成 2D → Seed3D 转 3D。
  - 链接：Volcano Engine / 302.AI 等集成；对比 Meshy (快 mesh)、Tripo3D。
  - 关键词：seed3d, doubao-seed3d, image-to-3d, PBR
  - 为什么有用：直接可用物理/游戏引擎资产，减少手动建模。

- Meshy.ai：快速 mesh + 基础纹理，原型利器。
- Blender MCP + Fable 5：从 cube 直接建模完整角色/场景（见 Godot 龙空战游戏 12 小时案例）。

### Unity / Godot / Three.js / WebXR
- Three.js 主导 Fable 5 实验（无构建单文件常见）：LEGO procedural 地形飞行世界、实时 procedural 地下城、交互 3D Earth (GLSL + 真实天文/ISS 数据)、procedural 道路/城市、玩具制造器、RL creature 等。
  - 示例 GitHub: https://github.com/hexianWeb/lego-stylized-nature
  - Live toys: https://mrdoob.github.io/toys/
  - 3D Earth demo 等见 X 书签。
- Godot + MCP/插件：Fable 5 驱动完整游戏（Blender 建模 + Godot 逻辑）。推荐 Godot AI MCP。
- Unity：VRChat 世界 + VR 游戏快速制作（1 周从零），脚本、着色器移植。
- WebXR：浏览器 VR 原型。

### Agent / NPC / 角色行为
- RL creature (Fable 5 + Three.js + MediaPipe + MuJoCo/JAX 训练)：手势/姿态驱动 3D 生物，后续加毛发+神经激活语音。
- Agent 文明模拟：多 agent 协作读论文、构建等距小镇（Fable + Image-2）。
- 过程化角色/动画 (SDF blend 等)。

### VibeGame / 游戏开发工作流
- Claude Fable 5 核心：长上下文、agentic 规划、一键/迭代出完整可玩原型（2D/3D/引擎）。
- 混合流程：Image-2 全美术 + Fable 全代码（8 小时完整游戏案例）。
- MCP 集成（Godot/Blender/fal/Ludo audio）让 Fable 直接操作项目/资产。
- 参考主指南 workflows + awesome list。

### VR / AR / 空间交互
- Fable 5 VRChat 世界：外部指示 → 回家完成（无外部资产测试版）。
- Unity 1 周 VR 游戏 + VRChat 世界。
- WebXR + Three.js 空间原型、Quest 导出路径。

### 相关论文 / 文章 / 视频 / Demo
- Anthropic: https://www.anthropic.com/news/claude-fable-5-mythos-5 （Factorio 自主、Pokemon 视觉通关、长记忆）。
- awesome-claude-fable-5: https://github.com/Anil-matcha/awesome-claude-fable-5 （94+ 案例，游戏专节）。
- Midwinter DOS 逆向：Fable 5 一夜解码 1989 游戏，602 函数 + bit-for-bit 地形复刻。https://github.com/DrEvil-TitaniumHelix/midwinter-decode
- 视频示例：Godot MCP 完整游戏、Mario one-shot、Ray tracing 浏览器游戏等（YouTube 搜索 "Claude Fable 5 Godot" / "Fable 5 game"）。
- X 书签 CSV：大量 Fable + Three.js + VRChat + hybrid 真实案例（见主指南引用）。

## 记录格式建议

```md
- 标题：
  - 链接：
  - 关键词：
  - 为什么有用：
```
