# Vibe Game Development Handbook

A practical, living handbook for building games through "vibe coding" — using AI (especially powerful models like Claude Fable 5) together with modern tools to go from idea to playable prototype extremely fast.

This repository has evolved from a 3D/VR idea collection into a focused manual for AI-assisted game development.

## Languages

- English: [AI-Game-Dev-Guide.md](./AI-Game-Dev-Guide.md)
- 中文: [AI-Game-Dev-Guide.zh.md](./AI-Game-Dev-Guide.zh.md)

## What is "Vibe Game Development"?

Vibe coding means describing what you want at a high level and letting strong AI models (combined with image generation, 3D tools, MCP servers, etc.) handle the heavy lifting, iteration, and even asset integration.

This handbook focuses on real-world patterns that work in 2026:

- Using Claude Fable 5 (and similar) for rapid full-game prototyping
- Hybrid workflows (AI image gen + AI coding)
- 2D, 3D (Three.js), Godot, Unity, VRChat, and no-engine approaches
- Asset pipelines (2D, 3D, audio)
- Practical resources and community examples

## Contents

The main handbook covers:

- Fable 5 capabilities for game dev
- 2D games (danmaku, rhythm, pixel, platformers)
- 3D web experiences with Three.js
- Hybrid Image-2 + coding workflows
- Camera/MediaPipe interactions
- VR / VRChat development
- Engine + MCP full pipelines (Godot, Unity, Blender)
- Text/ADV/galgame style games
- Procedural generation & remasters
- AI art, 3D modeling (Seed3D, Meshy, etc.), and audio pipelines
- Resources and community projects

## Reusable Skills

Reusable AI workflow skills live under [`skills/`](./skills/).

### Game Concept Refiner

`game-concept-refiner` guides a conversation from a rough game idea to a concise prompt for a planning model. It asks about one design layer at a time, protects the author's own taste, separates fixed anchors from open decisions, and avoids over-specifying the downstream planner.

Install with the standard skills CLI:

```bash
npx skills add https://github.com/asashiki/vibe-game --skill game-concept-refiner
```

## Community Contributions

This is primarily a handbook, but we still welcome contributions:

- New ideas and experiments → [ideas.md](./ideas.md)
- Useful links and references → [references.md](./references.md)
- Improvements or translations to the handbook (please keep English and Chinese versions in sync)

## Getting Started

1. Read the handbook in your preferred language.
2. Pick a small project (e.g. enhance one of your previous Fable 5 games with better art or audio).
3. Use the workflows and tool recommendations in the guide.
4. Share what you learn!

## Tags

`#vibe-coding` `#ai-game-dev` `#fable5` `#game-dev` `#threejs` `#godot` `#unity` `#procedural` `#rapid-prototyping`

---

Maintained bilingually. Both English and Chinese versions should be kept up to date.
