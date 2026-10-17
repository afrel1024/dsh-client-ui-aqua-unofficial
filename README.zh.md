# dsh-client-ui-aqua-unofficial

[English](README.md) | 中文

> **非官方声明** — 这是**社区第三方分支**，**不是 DeepSeek 官方产品**，与 DeepSeek 及其官方组织**没有任何隶属或背书关系**，也不占用 `@deepseek-ai` npm 命名空间。请自行评估风险后使用。
>
> 上游项目：[WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin)（MIT，(c) 2026 John Wu）。本分支在其基础上增加了 **DSH rc.7 兼容**，并以「非官方」标识重新发布。

Aqua 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片，还可以添加图片和视频作为背景。关掉开关就回到原生界面，不改 DSH 任何一行源码。

![](assets/1.png)

![](assets/2.png)

![](assets/3.png)

![](assets/4.png)

## 特性

- **双模式**：**云母效果**把布局改成悬浮玻璃卡片（模糊度、磨砂度可调）；**兼容模式**保持原版排版一字不动，只把材质换成通用玻璃，其他插件的界面也会自动玻璃化
- **背景自由**：流体板（颜色可调）或自定义壁纸（铺满页面、比例不变，可单独调模糊度/磨砂度）；浅色壁纸配浅色模式、深色壁纸配深色模式观感更佳
- **背景亮度**：自动跟随深浅模式——深色模式 0–50 压暗、浅色模式 50–100 提亮，50 原样
- **粒子鲸鱼**：deepseek.com/harness 同款粒子鱼（官网粒子引擎移植），显示在聊天区域正中央（不含侧边栏），深色模式白粒子、浅色模式灰粒子，设置里可开关
- **Harness 光泽铭牌**：深色模式下侧边栏铭牌换成官网同款「Harness」药丸（135° 渐变描边 + 柔光），浅色模式保持原版铭牌
- **边缘渐变模糊**：页面顶部/底部各 5px 渐变模糊带，悬浮在聊天内容上层，内容滚到边缘渐入模糊；浅色微泛白、深色微泛黑
- 一键开关：关闭即完全还原原生界面，所有效果随插件卸载一并消失

## 本分支的改动

- **DSH 0.2 兼容**：状态仓库迁移到 `dsh-client-store`，插件设置迁移到 `settings.plugins.tab`，移除已删除的宿主设置命名空间接口，并内置勾选图标。
- **版本范围**：当前源码适配 DSH `0.2.0-rc.2`。使用 DSH `0.1.0-rc.7` 时，请保留已发布的 `1.4.1` 版本。
- **独立打包**：安装开发依赖后执行 `npm run bundle:standalone`，无需依赖主仓库特定路径的 tsdown 预设。

- **DSH rc.7 兼容（v1.4.0）**：插件设置页的卡片槽改成了 keyed 槽；主开关卡片改用 `key: 'aqua'` 注册，并由节点侧提供 `aqua` 设置命名空间，使卡片在「设置 → 插件」里照常显示。
- **非官方重命名**：包名改为 `dsh-client-ui-aqua-unofficial`（不再占用 `@deepseek-ai` 官方 scope），仓库名带 `-unofficial` 后缀。
- 其余（主题、设置、壁纸等）与上游 v1.3.0 一致。

## 安装

### 方式一：npm 一键安装（推荐）

```sh
dsh plugin --profile web add dsh-client-ui-aqua-unofficial
```

从 npm 安装最新版，自动注册为 profile 插件层（`dsh.bundle` 补丁），所有平台通用。刷新 Web 界面即可。

> **自动注册**：v1.4.1+ 自带 `dsh.bundle` 补丁，`dsh plugin add` 会自动注册插件层；v1.4.0 需要手动在 `cordis.patch.yml` 里登记 `ui-aqua` 行。

> **DSH rc.7**：v1.4.0+ 面向 `@deepseek-ai/dsh-*` rc.7（插件设置页的卡片槽已改为 keyed 槽）。更早的版本仍可运行在 rc.5/rc.6 上。

### 方式二：GitHub 安装器（备用）

不需要 npm、不需要 git（自动退回 zip 下载）。

**Windows（一条命令）：**

```powershell
powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest 'https://github.com/afrel1024/dsh-client-ui-aqua-unofficial/raw/main/install.ps1' -OutFile install.ps1; .\install.ps1"
```

默认安装**最新发布版**。脚本会把插件链接进 profile 的 `node_modules`，并在 `cordis.patch.yml` 里登记 `ui-aqua`（幂等，重复跑不会重复登记）。

指定版本或跟随开发分支：

```powershell
.\install.ps1 -Version 'v1.4.0'   # 指定某个发布版
.\install.ps1 -Version 'main'     # 开发分支
```

**macOS / Linux（手动，三步）：**

```sh
git clone --depth 1 https://github.com/afrel1024/dsh-client-ui-aqua-unofficial.git
ln -s "$PWD/dsh-client-ui-aqua-unofficial" "$DSH_HOME/profiles/node_modules/dsh-client-ui-aqua-unofficial"
```

然后往 `$DSH_HOME/profiles/web/cordis.patch.yml` 追加：

```yaml
- insert:
    - id: ui-aqua
      name: 'dsh-client-ui-aqua-unofficial'
```

## 使用

刷新 Web 界面。Aqua **默认开启**；总开关在 **设置 → 插件 → 玻璃主题**（形状与其他插件卡片一致），其余全部调节在 **设置 → 通用设置 → 外观** 的正下方（无独立标题）：模式、模糊度/磨砂度（云母模式）、流体颜色、背景亮度、背景（流体/壁纸）、壁纸设置，以及粒子鲸鱼开关。总开关关闭时，外观下方的整块调节自动隐藏。

## 开源协议

MIT，继承自上游项目（(c) 2026 John Wu）。详见 [LICENSE](LICENSE)。
