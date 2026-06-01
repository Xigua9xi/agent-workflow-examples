# agent-workflow-examples

[English](README.md) | 简体中文

`agent-workflow-examples` 使用 mock provider 演示一个简单的 `plan -> execute -> verify` 工作流。

项目刻意保持很小，用来展示如何把 agent 工作流拆成明确阶段，同时不依赖 API key、真实模型服务或网络访问。

## 项目包含什么

- 一个和真实 completion provider 形状相似的 mock provider。
- `runWorkflow(goal, provider)` 函数。
- CLI demo。
- 覆盖验证成功和验证失败的测试。

## 项目不做什么

- 不调用真实模型 API。
- 不编辑文件。
- 不实现完整 agent framework。
- 不掩盖验证失败。

## 快速开始

```powershell
npm.cmd install
npm.cmd test
npm.cmd run lint
npm.cmd run demo
```

## CLI 用法

```powershell
npm.cmd run build
node dist/cli.js "summarize release notes"
```

## 目录说明

```text
src/
```

工作流 runner、provider interface、mock provider 和 CLI 入口。

```text
test/
```

验证成功和验证失败场景的测试。

```text
examples/
```

描述 mock workflow 的 Markdown 示例。

```text
scripts/
```

本地 lint 检查。

## 工作流模型

工作流分为三步：

1. `plan`：确定如何处理目标。
2. `execute`：根据计划生成输出。
3. `verify`：判断输出是否通过验证。

结果中包含目标、每一步输出，以及 `verified` 布尔值。

## 如何扩展

适合后续贡献的方向：

- 增加 `--json` 输出。
- 增加文件编辑 dry-run 示例。
- 增加可选真实 provider adapter，但保持 mock 为默认。
- 增加基于证据的验证示例。

更多 issue 草稿见 `.github/ISSUE_DRAFTS.md`。

## 发布前注意

- 运行 `npm.cmd test`。
- 运行 `npm.cmd run lint`。
- 不提交 `node_modules/` 或 `dist/`。
- 默认 demo 路径不要依赖 API key。
