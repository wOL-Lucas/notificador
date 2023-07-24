console.log("index.js inited")

chrome.tabs.onCreated.addListener((tabId) => {
    chrome.scripting.executeScript({
        target:{ tabId: tabId.tabId },
        files:["content.js"]
    }).then(
        ()=>{
            console.log('foreground to be inited')
        })

});