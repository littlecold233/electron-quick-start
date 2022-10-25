/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const webview = document.querySelector('#webview');
webview.addEventListener('dom-ready', () => {
    console.log('dom-ready')
})
webview.addEventListener('did-navigate', () => {
    console.log('did-navigate')
})

webview.addEventListener('new-window', () => {
    console.log('new-window')
})
