
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    localStorage.getItem['keywordsFrom']
    let surl = changeInfo['url'];
    if(surl.includes('valkyrae')){
        chrome.tabs.update(tabId, {url: "https://www.google.com"});
    }
 }); 






