console.log('[Notificador +Coop]: "service worker inited"')

chrome.tabs.onCreated.addListener((tabId) => {
    chrome.scripting.executeScript({
        target:{ tabId: tabId.tabId },
        files:["content.js"]
    }).then(
        ()=>{
            console.log('foreground inited')
        })

});