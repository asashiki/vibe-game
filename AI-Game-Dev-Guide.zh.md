# Vibe 游戏开发手册（2026 快照）

## 重点：Claude Fable 5 + 混合 AI 工作流，覆盖 2D/3D/Web/VR/文字游戏与资产

**编写对象**：懂一点编程，但想用 AI 快速做游戏的开发者（特别推荐使用 Fable 5）。  
**资料来源**：作者的 X 书签 CSV + 2026 年 7 月在 Web/X/GitHub 上的检索整理。  
**作者背景**：用 Fable 5 做过两个 2D Web 游戏——一个弹幕射击游戏（弹幕射击）和一个音游。发现只靠纯文本大模型的 coding 能力远远不够，需要结合美术资源管线（2D 图像生成、3D 模型）、音效、引擎、MCP 等完整工作流。  
**书签文件**：`C:\Users\Hey\Downloads\3d-game\XBookmarks_@asashiki__19_2026-07-08_00-46-06.csv`（包含大量 Fable 5 + Three.js + VRChat + 程序生成 + 混合案例，已在下文中提取并整理）。

本文档是 2026 年公开案例、工具和实践模式的**静态快照**。Claude Fable 5（Anthropic，约 2026 年 6 月发布，Mythos 级别）在长上下文、agentic 编程、一次性或迭代完成完整可玩游戏（浏览器/Three.js/Godot/Unity）、程序生成、逆向老游戏，以及通过 MCP 扩展能力（文件操作、Blender、Godot、资产工具如 @fal）等方面表现出色。

**社区共识**：Fable 5 + 图像生成模型（如 ChatGPT 5.5 Image-2） + MCP（Blender/Godot/fal） + 音频工具，可以让一个人在几小时到几天内从想法做到带不错美术和音效的可玩原型，而不再需要几个月。大量「vibe coding」或混合案例正在涌现。

---

## 目录

1. [什么是 Claude Fable 5，它为什么对游戏开发重要](#什么是-claude-fable-5它为什么对游戏开发重要)
2. [2D 游戏（Web Canvas、像素、弹幕、音游、平台跳跃、无引擎）](#2d-游戏web-canvas像素弹幕音游平台跳跃无引擎)
3. [3D Web / Three.js 体验（程序世界、玩具、地球、地牢、生物、城市）](#3d-web--threejs-体验程序世界玩具地球地牢生物城市)
4. [图像生成 + 代码混合全流程游戏（ChatGPT Image-2 + Fable）](#图像生成--代码混合全流程游戏chatgpt-image-2--fable)
5. [摄像头融合 / MediaPipe 3D 交互（姿态/手势追踪生物）](#摄像头融合--mediapipe-3d-交互姿态手势追踪生物)
6. [VR / Quest / VRChat 3D 世界与游戏](#vr--quest--vrchat-3d-世界与游戏)
7. [引擎 + MCP 全流程游戏（Godot、Unity、Blender 管线）](#引擎--mcp-全流程游戏godotunityblender管线)
8. [文字游戏 / ADV / Galgame 类叙事游戏](#文字游戏--adv--galgame-类叙事游戏)
9. [程序生成器、玩具制造器、Agent 模拟、「编译器」与重制](#程序生成器玩具制造器agent模拟编译器与重制)
10. [AI 资产管线（美术、3D、声音）](#ai-资产管线美术3d声音)
11. [资源获取（资产、音效、模型、免费/付费）](#资源获取资产音效模型免费付费)
12. [GitHub 仓库、Awesome 列表、技巧与社区](#github-仓库awesome-列表技巧与社区)
13. [新手入门工作流（从你的 2D 项目开始）](#新手入门工作流从你的-2d-项目开始)
14. [局限性、访问权限、成本与注意事项](#局限性访问权限成本与注意事项)
15. [参考资料与可追溯来源](#参考资料与可追溯来源)

---

## 什么是 Claude Fable 5，它为什么对游戏开发重要

Claude Fable 5（Anthropic）是目前在**游戏设计、系统、机制、长时任务和创意编程**方面最强的模型之一。它能处理数百万 token 的上下文和记忆，能规划复杂项目，能自我批判迭代，并能产出可直接在浏览器运行的体验（通常是单文件 HTML/JS + Three.js 或纯 Canvas），也可以通过 MCP 驱动完整引擎。

反复被社区验证的强项：
- 一次或几次迭代就能做出完整游戏/演示（马里奥风格、赛车、RTS、MMORPG 原型、地球模拟、各种程序生成内容）。
- 特别擅长 Three.js（WebGL/WebGPU、自定义 GLSL、物理、程序地形/城市/地牢/生物）。
- 支持 MCP 服务器（Godot AI 插件/MCP、Blender MCP、@fal MCP 用于图形/资产、文件/内存操作）。
- 能逆向老 DOS 游戏（几小时内完成完整函数映射 + 地形逐比特复刻，而之前需要数周）。
- 与图像生成模型结合效果极佳（美术 → 可运行游戏）。
- 「Vibe coding」：给出高层方向 + 验证循环，比一步步微操更有效。

下文大量案例来自你的书签（Fable 5 + Three.js + VRChat + 混合案例占主导）以及公开的 Web/X 检索结果。

更多精选案例可参考 awesome 列表（90+ 条，包含大量游戏相关）。

---

## 2D 游戏（Web Canvas、像素、弹幕、音游、平台跳跃、无引擎）

纯 2D 仍然是 Fable 5 最容易上手的领域。你之前做的项目就属于这一类。

**来自书签和检索的案例**：
- 弹幕射击和音游（你用 Fable 5 做的实验）：典型使用纯 HTML/JS Canvas 或简单库。Fable 能很好地处理碰撞、弹幕模式、节奏同步、计分、粒子和菜单。
- 不使用传统引擎的俯视像素游戏（使用 “Gorest Sprite2D” / codex 工具）。第 3 天重点进行美术迭代（换装、角色）。证明「无引擎」纯代码路线对像素风格是可行的。推文：https://twitter.com/HerozaZhan73432/status/2074420785700360656
- 一次提示做出马里奥风格平台游戏（浏览器 HTML/JS）。Fable 内部创建了多 agent 规划关卡、物理、敌人、道具、计分和结局。
- 手指追踪的恐龙跑酷游戏（通过视觉输入控制）。
- 各种「vibe」2D 实验：液态玻璃 UI + 粒子、带多种模式和地图的简单赛车。

**常用技术**：
- Canvas 2D 或 SVG 实现复古感。
- 使用 requestAnimationFrame 游戏循环 + 简单实体系统。
- 音游：音频同步 + 节拍检测或预先编排的时序表。
- Fable 特别擅长平衡难度和「juice」（粒子、屏幕震动、音效调用）。

**从你的游戏延伸**：加入 AI 生成的 2D 精灵/UI（见资产部分）、更好的音频（不要只用振荡器）、道具系统、关卡编辑器（程序生成或 Fable 生成数据）、触屏/移动端支持，或后续导出到 Godot。

---

## 3D Web / Three.js 体验（程序世界、玩具、地球、地牢、生物、城市）

这是你书签和 Fable 热度中占比最高的类别。Three.js（经常不使用框架、无需构建步骤）+ Fable = 极快的浏览器 3D 原型。

**来自你 CSV 的关键案例**：
- LEGO + 程序地形飞行世界（Three.js Journey，WebGPU）。在线：http://lego-stylized-nature.vercel.app ，GitHub：https://github.com/hexianWeb/lego-stylized-nature 。推文 ID 2073966506141270227。
- 模拟现代城市（带中世纪根源）的程序道路网络生成器（详细视频）。推文：https://twitter.com/evanqjones/status/2073902721413861549
- Three.js 实时程序地牢生成器。推文：https://twitter.com/majidmanzarpour/status/2073742439211225234
- 一次性生成的交互式 3D 地球：自定义 GLSL、真实太阳历的太阳直射点、城市灯光、海洋反光、Nominatim 搜索、双击飞行、实时 ISS 遥测。无框架。推文：https://twitter.com/Cryptor_dot/status/2074400751036617038
- 玩具制造器（mrdoob）：拼接木块、让部件旋转、观看它活过来。使用 box3d.js。在线：https://mrdoob.github.io/toys/ 。推文：https://twitter.com/mrdoob/status/2073666517783458071
- 「你可以用 threejs 点亮东西 / 弄坏东西」等物理实验。
- 第三人称角色在程序生成城市中自由行走（简短提示）。
- Agent 文明模拟：微型等距小镇，多个 agent 协作（Fable + GPT Image 2 根据事件日志生成视觉）。

**其他案例**：
- 浏览器 3D RTS（帝国时代风格，多阵营，几句提示，几小时完成）。
- Minecraft 风格克隆（终端 Rust 版或浏览器版）。

**为什么强大**：Fable 理解 3D 数学、着色器、场景图、性能优化（实例化、LOD），并且能同时迭代视觉和交互。

---

## 图像生成 + 代码混合全流程游戏（ChatGPT Image-2 + Fable）

这是「世界已经改变」的一类。

**书签中的代表案例**：
- 「我把 ChatGPT 5.5 Image-2 + Claude Fable 5 结合起来……只用 8 小时就做出了一个完整游戏」。Image-2 生成所有视觉（角色、环境、UI、粒子），Fable 把图像转化为真实代码：机制、物理、AI、动画、菜单。做出来的是完整、打磨过、可玩的游戏。没有团队、没有加班、没有资产包。推文：https://twitter.com/0ailab/status/2064988990458167708（含视频 + #Fable5 #Image2）。
- 类似模式：用图像生成工具产出统一风格的资产，再（或描述）给 Fable 集成。

**典型工作流**：用图像工具生成风格指南 + 批量资产 → 在 Fable 提示中描述/使用这些资产（“把这些作为 X 游戏的贴图/精灵使用”）→ Fable 负责加载、动画和玩法。针对手感反复迭代。

你的 2D 游戏可以很轻松地用这种方式升级成专业外观。

---

## 摄像头融合 / MediaPipe 3D 交互（姿态/手势追踪生物）

**来自书签的案例**：
- 「我的 RL 生物逃出电脑了。」使用 Fable 5 + Three.js + WebGL/WebGPU + MediaPipe 构建。生物在 Runpod A100 上用 JAX + MuJoCo（Google DeepMind）训练。后来 Fable 又给它加了毛发，并基于神经网络激活可视化生成了新声音。推文：https://twitter.com/aaronlemke/status/2073892540051276207 及后续 2072478892464521597。
- 实时输入（手势/姿态）驱动或影响 3D 生物/角色。

**应用场景**：手势控制游戏、体感交互体验、类 AR 的网页演示、反应式 AI 生物。MediaPipe（Google）可在浏览器中运行，输出关键点。

**延伸**：结合程序动画（其他生物实验中出现的 SDF blend-shell 风格），可以做出无缝、可被 AI 无限生成的角色。

---

## VR / Quest / VRChat 3D 世界与游戏

**来自书签（日本创作者较为活跃）**：
- 「Fable 5でVRChatのワールドできてしまったw」——用 Fable 5 做出了 VRChat 世界（在外面下指令，回家就完成了）。没有使用外部资产，范围较小（用于验证），此前几乎没有 Unity 或 VRChat 世界制作知识。附视频，作者非常兴奋。推文：https://twitter.com/3DVR3/status/2072689600393625671
- 7 年前开始对 VR 感兴趣 → 1 周内用 Unity（此前零经验）+ Fable? 做出了 VR 游戏 + VRChat 世界。「这是个完全没道理的时代。」推文：https://twitter.com/3DVR3/status/2073755473418109228
- 更广义的：通过 Three.js/WebXR 或 Godot 导出制作 Quest 兼容原型。

**说明**：Fable 能处理场景搭建、交互和基础移动。对于完整 Quest 项目，建议搭配 Unity/Godot + 对应 MCP，或导出使用。VRChat 有自己的 SDK 和世界上传流程，Fable 可以生成兼容的资产和场景。

非常适合做空间交互原型。

---

## 引擎 + MCP 全流程游戏（Godot、Unity、Blender 管线）

当 Fable 能通过 MCP 直接操作工具时，表现尤其突出。

**案例**：
- 「Claude Fable 5 Makes FULL GAME Using Godot MCP and Blender MCP」——从 Blender 默认立方体开始，在约 12 小时内做出一款 Godot 龙空战游戏（此前完全没用过 Blender 和 Godot）。包含资产、机制、水/火/爆炸、声音，以及网页版和 Godot 版基本一致。工作流：Fable 驱动 Blender 建模，通过 Godot MCP 操作项目。
- 「Claude Fable 5 Is Back! And I Built an AMAZING Godot Game」（Nora Vale 等项目）。
- Unity：即使是编程新手也能用 AI 辅助写脚本；着色器转换；完整场景制作。
- 还有大量完整 Godot 项目、飞机模型、足球游戏、新哥特城市等通过 Fable 5 完成的视频和报告。

**MCP 的价值**：让 Fable 可以直接读写项目文件、运行构建、操作场景，而不仅仅是「复制这段代码」。

同时，Three.js 仍然是「纯网页」零引擎快速迭代的甜点。

---

## 文字游戏 / ADV / Galgame 类叙事游戏

在 2026 年 7 月的 Fable 热度样本中占比不高，但非常可行：
- Fable 可以生成完整的 Twine 故事、Ren'Py 脚本 + 角色定义、简单的 HTML/JS 视觉小说。
- 配合图像生成工具产出背景、立绘、角色肖像（用 Image-2 等保持风格统一）。
- 程序叙事、对话树、选择系统、背包等。
- Galgame 风格：Fable 负责分支逻辑、CG 触发、音乐提示。
- 在更广义的 AI 开发中，已有大量一次性提示完成的交互小说或选择驱动体验。

**提示**：从你的节奏感和弹幕思维出发——时机 + 反馈循环可以很好地转化为叙事节奏和 UI juice。

可以在社区搜索 “Fable visual novel” 或 “Fable RenPy” 获取更多案例（社区正在快速增长）。

---

## 程序生成器、玩具制造器、Agent 模拟、「编译器」与重制

- 玩具制造器（物理拼接 + 动画）。
- 微型文明模拟（多 agent 协作阅读论文、构建小镇视觉）。
- 道路/城市/地牢/地形程序生成（大量 Three.js 案例）。
- 逆向工程：Fable 5 一夜之间解码了 1989 年的 DOS 游戏（Midwinter）可执行文件——映射 602 个函数，地形生成器逐比特复刻。之前手动做了 6 个月 + 老模型完全失败。GitHub：https://github.com/DrEvil-TitaniumHelix/midwinter-decode。附带可玩技术演示。
- 「游戏编译器」：Fable 扮演高层编译器——自然语言 + 参考资料 → 完整可运行系统。也用于着色器移植、引擎扩展。

---

## AI 资产管线（美术、3D、声音）

**超越纯代码**（你最重要的认知转变）：

### 2D 美术
- ChatGPT 5.5 Image-2（及同类工具）：批量生成角色、环境、UI、粒子，保持一致风格。在 8 小时完整游戏案例中被大量使用。
- 迭代方式：先生成基础风格 → 变体 → 让 Fable 集成（描述路径或提供 base64，如果支持）。
- 其他常用工具：用于精灵图、瓦片集、图标的常见图像模型。

### 3D 建模
- **doubao-seed3d（Seed3D 1.0/2.0，由 ByteDance/Volcano 提供）**：图像 → 高保真、适合仿真的 3D。watertight manifold 几何、PBR 材质、纹理，可分解为功能部件（例如椅子的座面、靠背、底座）。非常适合游戏、XR、机器人仿真。你描述过的工作流：Image-2 生成 2D → Seed3D 生成 3D。API 已在 Volcano Engine 上线。
- **Meshy**：快速生成 mesh + 基础纹理（适合快速原型）。
- 其他对比模型：Tripo3D、Hunyuan3D、Hyper3D。
- **MCP + Blender/Unity**：Fable 可以直接在 Blender 中操作建模（从提示或立方体开始），然后导出到引擎。在 Godot 龙空战游戏中演示了完整管线（12 小时）。
- 推荐导出格式：glTF/GLB（网页和引擎通用）。

### 声音与音频（避免红白机式蜂鸣）
纯代码（Web Audio API 振荡器）表现力有限。推荐使用生成式工具：
- **Ludo.ai Audio Generator**：自定义音效、循环音乐、环境音、角色语音（人类/非人类）、旁白。可以生成**API + MCP 服务器**，可直接与 Claude/Fable 集成，在 coding 会话中程序化生成音频。非常匹配。
- ElevenLabs：高质量语音、音效、音乐元素。
- Adobe Firefly / Kling AI 音效生成器。
- Soundverse、Meta AudioCraft（MusicGen/AudioGen）用于文本生成音乐/音效（研究原型中已使用）。
- 工作流示例：提示 “为 2D 射击游戏生成带低频冲击感的爆炸 whoosh”、“为音游生成更丰富但保留 chiptune 感觉的电子循环”，然后在代码中与事件同步。

Fable 可以生成播放代码，并调用这些工具（或通过 MCP）。

---

## 资源获取（资产、音效、模型、免费/付费）

- **免费/开源**：
  - Kenney.nl（图标、瓦片、3D、音频包——Fable 在 MMORPG 示例中明确使用/找到了这些资源）。
  - Quaternius、KayKit（在 Fable 做的 MMORPG 中被自动找到并使用）。
  - OpenGameArt.org、itch.io 免费区、CC0 资产。
- **AI 直接生成**：上文提到的各种生成工具（Image-2、Seed3D、Ludo、Meshy、ElevenLabs）。
- **市场**：Unity Asset Store、Godot Asset Library、TurboSquid（参考用）、Sketchfab。
- **针对 VRChat/Quest**：官方模板 + 社区上传。
- **音效**：Freesound（精选），或用 AI 工具生成自定义且版权友好的内容。
- 来自案例的实用技巧：告诉 Fable “只使用 Kenney/Quaternius 的免费开源资产并正确实现”，它可以自己去研究并接入。

---

## GitHub 仓库、Awesome 列表、技巧与社区

- **Awesome Claude Fable 5**：https://github.com/Anil-matcha/awesome-claude-fable-5 —— 90+ 精选案例，包含游戏专区（finger runner、racing、terminal MC、MC clone 等）、提示、局限性、集成方式。强烈推荐阅读。
- LEGO 自然风：https://github.com/hexianWeb/lego-stylized-nature
- World of ClaudeCraft（约 2 天 vibe coding 出的 MMORPG，Fable 自动找到了开源资产）：https://github.com/levy-street/world-of-claudecraft （可在线游玩 worldofclaudecraft.com）
- Midwinter 解码（DOS 逆向工程）：https://github.com/DrEvil-TitaniumHelix/midwinter-decode
- mrdoob 的玩具 / Three.js 实验。
- GitHub 搜索建议：“three.js fable”、“godot mcp”、“claude fable game”。
- X/Twitter：关注 @mrdoob、@aaronlemke、@3DVR3 等创作者，搜索 “Fable 5” + game 相关过滤。你的书签就是宝藏。
- Reddit：r/aigamedev、r/ClaudeAI、r/gamedev 中关于 Fable 的讨论帖。
- MCP：关注 Godot AI 插件/MCP、Blender MCP 服务器、fal.ai 集成。

---

## 新手入门工作流（从你的 2D 项目开始）

1. **在浏览器中快速原型（最低摩擦）**：用较高层次 + 约束提示 Fable 5（在 Claude Code 或支持的界面中）：“用单文件 HTML/JS + canvas 做一个打磨过的弹幕射击游戏。使用程序生成的弹幕模式，做好 juice，支持键盘和鼠标。后续我们会加上 AI 美术。” 先迭代机制。
2. **美术**：用 ChatGPT Image-2（或同类工具）生成基础风格。“为弹幕游戏生成统一 2D 像素/动漫风格：玩家飞船、敌人、子弹、背景、UI。” 把描述或文件喂给 Fable。
3. **声音**：使用 Ludo.ai（或同类）生成循环和音效。或者提示 Fable 使用更丰富的合成 + 简单采样，而不是纯蜂鸣。
4. **进入 3D**：“用 Three.js 做一个简单的程序地形飞行体验。” 然后加上控制、碰撞、目标。参考书签里的案例。
5. **3D 资产**：Image-2 → doubao-seed3d → 导入 glTF。或者用 Fable + Blender MCP 从基础几何开始。
6. **摄像头/MediaPipe**：加入手势追踪作为控制方式（参考 RL creature 案例）。
7. **VR/世界**：提示生成 WebXR 场景或 VRChat 兼容结构。先做小规模测试。
8. **完整引擎**：当原型手感不错时，使用 Godot/Unity + MCP 进行打磨、导出，支持移动端/Quest。
9. **混合全流程游戏**：用 Image-2 负责所有视觉 + Fable 负责代码（已有 8 小时完成的先例）。
10. **验证循环**：始终让 Fable 进行「脑内 playtest」、添加调试、自我批评，或者在浏览器里跑起来后把问题描述回来。
11. **范围控制**：从小做起（从你之前的游戏开始），一次只加一个系统（程序关卡、更好的 AI 敌人、计分、菜单、粒子、音频）。

**超越纯文本 LLM**：真正的魔法在于这个**闭环**：LLM 写代码 + 专业的图像/3D/音频模型 + MCP 工具 + 你自己对「什么叫好」的判断。

你的下一步建议：用 Image-2 美术 + Ludo 音频 + 粒子来重做/升级其中一个 2D 游戏。然后尝试一个 Three.js 程序化版本或 VRChat 实验。

---

## 局限性、访问权限、成本与注意事项

- Fable 5 访问方式：主要通过 Claude 界面 / Claude Code，也可通过 MuAPI 调用（有折扣）。上线后曾有临时限制；使用量通常与较高阶方案（Max 等）绑定。长会话成本可能很高（部分报告中大型项目花费数百美元）。
- 不是魔法：需要好的提示（目标、验证、风格约束）、迭代，以及你自己的质量判断。生成的代码可能比较乱，重构依然有价值。
- 性能：浏览器 Three.js 适合原型；复杂场景需要优化（Fable 可以帮忙，但一定要自己测试）。
- 法律/IP：逆向商业游戏时要小心；很多公开案例使用的是公有领域素材或获得授权。
- 3D 生成局限：Seed3D/Meshy 能产出很好的起始资产，但用于正式项目时可能仍需清理（拓扑、绑定）。
- 本手册是 2026 年的快照 —— 工具迭代非常快。

---

## 参考资料与可追溯来源

- 作者的 X 书签 CSV（主要来源，上文中直接引用了 8-10+ 个案例，附 Tweet ID/链接）。
- Web 检索：Anthropic 官方公告、YouTube 演示（Godot MCP 完整游戏、一次提示马里奥等）、Reddit 讨论（r/aigamedev、r/ClaudeAI）、awesome 列表。
- 具体链接：
  - https://github.com/Anil-matcha/awesome-claude-fable-5（精选案例 9-12 等游戏相关）
  - https://www.anthropic.com/news/claude-fable-5-mythos-5
  - Seed3D：ByteDance/Volcano 官方文档与对比（image-to-sim-ready 3D）
  - Ludo.ai（音频 MCP）
  - 文中直接引用的推文链接/ID
- vibe-game/ 文件夹背景：原 VR/3D Agent 想法收集（可在此基础上继续扩展）

**给你的下一步行动建议**：挑选一个你感兴趣的分类（比如用 Image-2 升级 2D 游戏，或尝试 Three.js 程序化），在支持 Fable 5 的 Claude 中粘贴受案例启发的针对性提示，开始迭代。把你的成果补充回 vibe-game/ideas.md 或 references.md。

这本手册覆盖了当前人们用 AI 做游戏的「千奇百怪的方式」。从小开始，快速做出原型，在 AI 的辅助下边做边学。

（2026 年 7 月通过 X、Web、GitHub 及你的书签检索整理）