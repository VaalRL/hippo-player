# 🦛 河馬隨身聽 (Hippo Player)

> 專為實體英語教科書課後複習打造的極簡隨身聽 · 雙格純數字鍵盤直連 · Go Magic! 全系列 1~4 冊 · GitHub Pages 零配置即開即播

### 🌐 線上即用網址 (Live Demo)
👉 **[https://vaalrl.github.io/hippo-player/](https://vaalrl.github.io/hippo-player/)**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online%20(即開即用)-brightgreen?style=for-the-badge&logo=github)](https://vaalrl.github.io/hippo-player/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-blue?style=for-the-badge)](https://vaalrl.github.io/hippo-player/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0%20(Pure%20Vanilla)-success)](#)
[![Mobile Optimized](https://img.shields.io/badge/Mobile-iOS%20%2F%20Android-orange)](#)
[![PWA Ready](https://img.shields.io/badge/PWA-Service%20Worker-purple)](#)

> **English summary** — Hippo Player is an unofficial, zero-dependency single-file web app for reviewing *Go Magic!* 1–4 elementary English textbook audio after class. Open your printed textbook, type the CD and track numbers shown on the page (e.g. CD `1`, Track `05`) on a big numeric keypad, and the matching track streams instantly. Features loop / continuous play, 0.75x–1.5x speed, lock-screen & headphone controls (Media Session), shareable deep links, keyboard shortcuts, dark mode, and an installable PWA shell. No audio is hosted in this repository — see the [disclaimer](DISCLAIMER.md).

---

## 📖 專案簡介 (Introduction)

**河馬隨身聽（Hippo Player）** 是一個單檔純前端（Single-file Vanilla Web App）的輕量級英語教材音訊隨身聽，專為解決國小學童與家長在課後複習實體英語教材時，原廠網頁版按鈕過小、操作層級過深、手機瀏覽器排版不便的痛點。

使用者只要翻開正版實體課本，依照內頁印製的 CD 與曲目編號（例如課本標示「**CD1 Track 05**」或「**1-05**」），在手機上直接點按純數字鍵盤：**左格輸入 1、右格輸入 5**，按下 Enter 或播放鍵即可瞬間直連播放對應音軌！

支援單曲精聽循環、自動連續播放、無損變速跟讀、手機鎖屏線控、以及深淺色模式切換，讓課後聽力與發音練習變得流暢又直覺。

---

## ✨ 核心特色 (Key Features)

### 1. 📱 手機觸控極致優化與雙格純數字鍵盤直連
- **直覺切分雙格輸入**：將教材印刷標記切分為 `[ CD (片號 1~2) ] — [ Track (曲目 01~88) ]` 兩個獨立輸入格，免除輸入符號與文字的繁瑣。
- **強制呼叫全螢幕大數字鍵盤**：雙欄位均配置 `inputmode="numeric"` 與 `pattern="[0-9]*"`，在 iPhone (iOS Safari) 與 Android (Chrome) 上點擊即自動彈出清晰的大按鍵數字鍵盤。
- **點擊自動全選與換格**：輸入 1 碼 CD 後游標自動跳至曲目格，輸入完畢按下鍵盤上的 Enter 立即發動播放。

### 2. 🎵 專業洗鍊的播放控制中心
- **純圖示控制按鈕（無文字干擾）**：
  - `↺5` **快退 5 秒**（即時重聽剛才那句英語發音）
  - `⏮` **上一首**（跨光碟自動銜接上一片最後一首）
  - `( ▶ / ⏸ )` **中央主播放鍵**（動態呼吸光暈與狀態變色）
  - `⏭` **下一首**（跨光碟自動進入 CD2 第 1 首，本冊播畢再自動接續下一冊）
  - `5↻` **快進 5 秒**（快速略過已知提示音）
- **Spotify 風格平滑進度條**：
  - 高精度觸控與滑鼠拖曳跳轉。
  - 即時顯示當前時間、總長度與網路緩衝進度條。
- **學習模式開關**：
  - `☑ 🔁 單曲循環`：打勾即可鎖定單首精聽跟讀，課文朗讀反覆聽。
  - `☑ ⏭ 連續播放`：打勾即可一首播完自動播放下一首（睡前磨耳朵首選）。
- **英語聽力無損倍速切換**：提供 `0.75x（慢速咬字）`、`1.0x（原速）`、`1.25x（進階挑戰）`、`1.5x（極速跟讀）`。

### 3. 📚 完整支援 Go Magic! (GM) 1~4 冊全系列教材
| 冊別代號 | 年級學期 | 涵蓋光碟 | 曲目總數 | 適用對象 |
| :---: | :---: | :---: | :---: | :---: |
| **Go Magic! 1 (GM1)** | 國小三年級上學期 | CD 1 (88首) + CD 2 (46首) | **134 首** | 字母拼讀與初階課堂對話 |
| **Go Magic! 2 (GM2)** | 國小三年級下學期 | CD 1 (76首) + CD 2 (48首) | **124 首** | 生活字彙與基本句型練習 |
| **Go Magic! 3 (GM3)** | 國小四年級上學期 | CD 1 (80首) + CD 2 (46首) | **126 首** | 情境會話與短文朗讀 |
| **Go Magic! 4 (GM4)** | 國小四年級下學期 | CD 1 (78首) + CD 2 (46首) | **124 首** | 跨學科閱讀與閱讀理解 |
| **全系列合計** | **中中年級 4 學期** | **8 片 CD** | **508 首音軌** | **全面涵蓋** |

### 4. 🗂️ 全片曲目速選九宮格抽屜
- 清楚排列該片光碟的所有曲目序號（如 Track 01 ~ Track 88），一眼俯瞰全片進度。
- 當前播放曲目以高對比醒目亮橘標記，切換曲目時自動捲動定位。
- 點擊任一曲目方塊即刻跳轉播放。

### 5. 🎨 經典活潑橙藍視覺風格與深淺雙模式
- **經典視覺色彩**：
  - 招牌活力亮橘：`#f19700`
  - 晴空課本活力天藍：`#38bdf8` / `#0284c7`
  - 深色午夜藍黑（保護學童夜間視力）：`#0f172a`
  - 淺色清爽晨曦雪白：`#f8fafc`
- **Anti-FOUC 防畫面閃爍技術**：載入時於 `<head>` 零延遲解析色彩偏好，徹底告別頁面跳動。
- **持久化快取**：主題設定自動保存在瀏覽器 `localStorage` 中。

### 6. 🎧 Media Session API 行動鎖屏與耳機線控
- **行動裝置鎖定畫面顯示**：手機鎖屏或通知列即時顯示河馬隨身聽專屬圖示、課本系列（如 `Go Magic! 1 · CD 1`）與當前曲目（如 `Track 05`）。
- **AirPods / 藍牙耳機線控**：支援耳機實體按鍵直接進行「播放/暫停」、「上一首」、「下一首」與「快退 5 秒」精聽操作。

### 7. 🔗 網址即時同步與一鍵複製分享 (Deep Linking)
- 播放時瀏覽器網址自動同步當前進度（如 `?book=GM1&cd=1&track=5`）。
- 提供「📋 複製分享連結」按鈕，家長或老師可一鍵複製專屬直連網址傳至 LINE 或 Google Classroom，對方點開即可精準載入該冊該課該曲！
- 另有「🔗 檢視音訊來源」可顯示目前曲目的原始串流位址（僅供技術檢視，本專案不提供任何下載或另存功能）。

### 8. ⌨️ 電腦與平板鍵盤快捷鍵 (Desktop Shortcuts)
專為在筆電、桌機或外接鍵盤 iPad 上自學聽讀設計，無需頻繁移動滑鼠即可流暢操控（文字輸入時自動停用防誤觸）：
| 快捷鍵 | 功能說明 | 備註 |
| :--- | :--- | :--- |
| `空白鍵 (Space)` | 播放 / 暫停 (Play / Pause) | 即時切換播放狀態 |
| `←` / `→` | 快退 5 秒 / 快進 5 秒 | 會話句子精聽必備 |
| `↑` / `↓` | 提高 / 降低音量 (±5%) | 螢幕同步顯示音量百分比 |
| `[` / `]` 或 `P` / `N` | 上一首 / 下一首 | 跨片、跨冊自動銜接 |
| `L` | 單曲循環開關 (Loop) | 一鍵鎖定反覆練習 |
| `M` | 靜音 / 恢復音量 (Mute) | 快速靜音切換 |
| `R` | 從頭重播本首 (Restart) | 即時回到 0:00 |
| `Esc` | 離開輸入框焦點 | 恢復全域鍵盤操控 |

> 快捷鍵配置與姊妹專案 [麒麟鹿player](https://github.com/VaalRL/Ki-lin-lok-uan-ka) 一致，兩個 app 可共用同一套肌肉記憶。
> 進度條也可用 `Tab` 聚焦後以方向鍵、`Home`、`End` 操作。

### 9. ⚡ 零相依單檔架構與離線介面 (Zero-Dependency Vanilla Architecture)
- 100% 原生 HTML5 + CSS3 + Vanilla JavaScript。
- **無任何外部相依套件**（No React, No Vue, No jQuery, No Bootstrap, No external CDN CSS/JS）。
- 單一 HTML 檔約 66KB（含全部 CSS/JS 與 GM1~GM4 曲庫），首次載入零外部 JS/CSS 請求。
- 內建 Service Worker 快取介面本體，從手機桌面圖示開啟時即使離線也看得到介面。
- **音訊本身一律即時串流、從不快取**，離線狀態下可以開啟介面但無法播放。

### 10. ♿ 無障礙與窄螢幕支援
- 進度條具 `role="slider"` 與完整 ARIA 屬性，冊別、光碟與控制按鈕皆有無障礙標籤與狀態標示。
- 支援 `prefers-reduced-motion`；380px 以下的小螢幕另有斷點，雙格輸入不會撐破版面。

---

## 🚀 快速上手與部署指引 (Deployment Guide)

本專案完全為靜態網頁架構，已準備就緒，可直接部署至 GitHub Pages：

### 專屬線上網址
👉 **[https://vaalrl.github.io/hippo-player/](https://vaalrl.github.io/hippo-player/)**

### 本機開發與預覽
```bash
git clone https://github.com/VaalRL/hippo-player.git
cd hippo-player
npx http-server -p 8080     # 或任何靜態伺服器
```
> Service Worker 需要 `http://` 或 `https://` 才會註冊，直接以 `file://` 開啟 `index.html` 仍可正常播放，只是沒有離線快取。

### GitHub Pages
本專案已部署於 **[https://vaalrl.github.io/hippo-player/](https://vaalrl.github.io/hippo-player/)**，推送至 `main` 分支後會自動更新。

### 在手機上新增為 App (PWA)
- **iPhone (iOS Safari)**：開啟網址 ➔ 點擊底部「分享」按鈕 ➔ 選擇 **「加入主畫面」**。
- **Android (Chrome)**：開啟網址 ➔ 點擊右上角「⋮」選單 ➔ 選擇 **「加到主螢幕」** 或 **「安裝應用程式」**。
- 手機桌面即會生成一個全螢幕獨立運行、無瀏覽器網址列干擾的專屬隨身聽！

---

## 🗂️ 專案結構 (Project Structure)

| 檔案 | 說明 |
| :--- | :--- |
| `index.html` | 應用程式本體（HTML / CSS / JS 全部內嵌），內含唯一生效的曲庫常數 `HESS_CATALOG` |
| `sw.js` | Service Worker：只快取 app shell，音訊與跨網域資源一律不攔截 |
| `manifest.json`、`icon-*.png`、`favicon*`、`apple-touch-icon.png` | PWA 安裝資訊與圖示 |
| `disclaimer.html` / `DISCLAIMER.md` | 免責聲明（網頁版 / Markdown 版） |
| `hippo-player.html` | 舊網址相容用的轉址頁，保留查詢參數導向 `index.html` |
| `data/hess_catalog.json` | 曲庫參考資料，執行期不載入；修改曲目數時以 `index.html` 為準並同步更新 |
| `.nojekyll` | 讓 GitHub Pages 直接提供靜態檔，不經 Jekyll 處理 |

---

## ⚖️ 法律免責聲明與合理使用原則宣告 (Legal Disclaimer)

本專案之開發與開源僅作為**個人家庭課後自主學習輔助與無障礙介面優化之技術研究用途**。請詳閱完整的 [DISCLAIMER.md](DISCLAIMER.md)：

1. **非營利教育輔助性質**：本專案為 100% 免費、開源且非商業專案，無廣告、無會員制、無任何營利機制。
2. **非官方獨立研發**：本專案為個人獨立研發之第三方輔助工具，與相關實體英語教材之原出版機構或任何出版法人均無任何官方合作、代言、商業隸屬或授權關係。
3. **無音訊伺服器託管**：本專案 Repository **完全不包含、不儲存、亦未託管** 任何 MP3 音檔。所有音訊皆由使用者個人瀏覽器在客戶端發起直接連線。
4. **實體教材必備性**：本工具播放之音軌均為課堂練習指令與聽力配合題，**若無正版實體課本圖文對照，無法達成實質學習效果**。本專案強烈呼籲並倡導使用者購買合法正版之紙本教材。
5. **著作權歸屬**：所有教材內容、錄音與商標之智慧財產權，均屬原出版機構或其法定權利人所有。

---

## 🔒 隱私 (Privacy)

本專案無任何分析工具、廣告或第三方追蹤程式碼，不蒐集也不傳送任何使用者資料，瀏覽器本機只保存深淺色主題設定。
唯一的對外連線是瀏覽器直接向遠端伺服器請求音訊與封面圖片；該伺服器會如同您直接開啟該網址一般取得 IP 位址，
頁面已設定 `referrer` 政策避免轉送來源網址。詳見 [DISCLAIMER.md](DISCLAIMER.md)。

---

## 📄 開源授權 (License)

本專案程式碼基於 [MIT License](LICENSE) 條款開源發布。
