/*
 * 河馬隨身聽 — Service Worker
 *
 * 只快取 app shell（HTML / CSS / 圖示），讓使用者從桌面圖示開啟時
 * 即使沒有網路也看得到介面。音訊一律走網路且從不快取：
 * 那些檔案有智慧財產權，不應該被本專案以任何形式重製或留存。
 */

const CACHE = "hippo-player-v1";

const SHELL = [
  "./",
  "./index.html",
  "./disclaimer.html",
  "./manifest.json",
  "./favicon.svg",
  "./favicon-32x32.png",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      // 個別 add，任何一個資產 404 都不會讓整個安裝失敗
      .then((cache) => Promise.all(
        SHELL.map((url) => cache.add(url).catch((err) => {
          console.warn("[sw] 略過無法快取的資產:", url, err);
        }))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // 只處理同源的 GET；跨網域的音訊與封面完全不攔截、不快取
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // Range 請求（音訊拖曳）交給瀏覽器原生處理
  if (req.headers.has("range")) return;

  // 導覽請求採 network-first：有網路時永遠拿到最新版，離線才退回快取
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match("./index.html")))
    );
    return;
  }

  // 其餘同源靜態資產採 cache-first
  event.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok && res.type === "basic") {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }))
  );
});
