# dsh-client-ui-aqua-unofficial

English | [中文](README.zh.md)

> **UNOFFICIAL** — This is a **community third-party fork**. It is **not** an official DeepSeek product, is **not affiliated with or endorsed by DeepSeek**, and claims no connection to the `@deepseek-ai` package scope. Use at your own risk.
>
> Upstream: [WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) (MIT, (c) 2026 John Wu). This fork adds **DSH rc.7 compatibility** and rebrands the package as unofficial.

Aqua is a highly customizable glassmorphism theme for the DeepSeek Harness web UI. The header, sidebar, composer, stats line, and trajectory view all become panes of frosted glass. You can set an image or video as wallpaper, and switching it off restores the stock UI exactly — with no source changes to DSH itself.

![](assets/1.png)

![](assets/2.png)

![](assets/3.png)

![](assets/4.png)

## Features

- **Two modes**: **Mica** restyles the layout into floating glass cards (blur and frost adjustable), while **Compatibility Mode** keeps the stock layout byte-for-byte and only swaps the material to generic glass — other plugins' UI gets the same treatment automatically
- **Free backdrop**: a living fluid board (hue adjustable) or your own wallpaper (fills the page, aspect preserved, with its own blur and frost); light wallpapers look best in light mode, dark wallpapers in dark mode
- **Background brightness**: follows the resolved scheme — dark mode darkens (0–50), light mode brightens (50–100), 50 is unchanged
- **Particle whale**: the deepseek.com/harness centerpiece fish (a 2D port of the site's particle engine), centered in the chat area right of the sidebar — white particles on dark, gray on light, toggleable in settings
- **Glossy "Harness" badge**: in dark mode the sidebar wordmark wears the official nameplate pill (135° gradient ring + soft glow); light mode keeps the stock plate
- **Edge fades**: 5px gradient blur bands pinned to the top and bottom of the page, above the chat content — scrolling content melts into the edges; faint white veil on light, faint black on dark
- One switch: off restores the stock UI exactly, and every effect is removed with the plugin

## What this fork changes

- **DSH 0.2 compatibility**: use `dsh-client-store`, feature-owned `settings.plugins.tab` panels, and a local check icon after the old runtime, settings namespace API, and icon export were removed.
- **Version support**: this source targets DSH `0.2.0-rc.2`. Keep the published `1.4.1` release for DSH `0.1.0-rc.7`; its older API is intentionally unsupported by this source.
- **Standalone build**: after installing development dependencies, `npm run bundle:standalone` rebuilds the host/client bundles without the monorepo-specific tsdown preset.

- **DSH rc.7 compatibility (v1.4.0)**: the Plugins-section card slot became a keyed slot; the master-switch card now registers with `key: 'aqua'` and the node half serves the `aqua` settings namespace so the card still appears in Settings → Plugins.
- **Unofficial rebrand**: package renamed to `dsh-client-ui-aqua-unofficial` (no `@deepseek-ai` scope) and the repository name carries the `-unofficial` suffix.
- The theme and wallpapers retain the upstream behavior.

## Installation

### Option 1: npm one-liner (recommended)

```sh
dsh plugin --profile web add dsh-client-ui-aqua-unofficial
```

Installs the latest version from npm and registers it as a profile plugin layer (`dsh.bundle` patch) — works on every platform. Reload the web UI and it is on.

> **Auto-registration**: v1.4.1+ ships the `dsh.bundle` patch inside the package, so `dsh plugin add` registers the plugin layer automatically. v1.4.0 needs the `ui-aqua` row added to `cordis.patch.yml` by hand.

> **DSH rc.7**: v1.4.0+ targets `@deepseek-ai/dsh-*` rc.7 (the Plugins-section card slot became a keyed slot). Earlier versions still run on rc.5/rc.6.

### Option 2: GitHub installer (fallback)

No npm account and no git needed (falls back to a plain zip download).

**Windows (one command):**

```powershell
powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest 'https://github.com/afrel1024/dsh-client-ui-aqua-unofficial/raw/main/install.ps1' -OutFile install.ps1; .\install.ps1"
```

Installs the **latest release** by default. The script links the plugin into the profile's `node_modules` and registers `ui-aqua` in `cordis.patch.yml` (idempotent — safe to run again).

Pin a version or track the dev branch:

```powershell
.\install.ps1 -Version 'v1.4.0'   # a specific release
.\install.ps1 -Version 'main'     # the development branch
```

**macOS / Linux (manual, three steps):**

```sh
git clone --depth 1 https://github.com/afrel1024/dsh-client-ui-aqua-unofficial.git
ln -s "$PWD/dsh-client-ui-aqua-unofficial" "$DSH_HOME/profiles/node_modules/dsh-client-ui-aqua-unofficial"
```

then append to `$DSH_HOME/profiles/web/cordis.patch.yml`:

```yaml
- insert:
    - id: ui-aqua
      name: 'dsh-client-ui-aqua-unofficial'
```

## Usage

Reload the web UI. Aqua is **on by default**; the master switch lives in **Settings → Plugins → Glass theme** (same shape as the other plugin cards), and every other control sits directly under **Settings → General → Appearance** (no title of its own): mode, blur/frost (Mica mode), fluid color, background brightness, backdrop (fluid/wallpaper) with its wallpaper controls, and the particle-whale toggle. With the master switch off, the whole control block under Appearance is hidden.

## License

MIT, inherited from the upstream project ((c) 2026 John Wu). See [LICENSE](LICENSE).
