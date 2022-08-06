
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    chrome.storage.local.get(['keywords'], function (result) {
        let keywords = [];
        keywords = result;
        console.log(keywords);

        let surl = changeInfo['url'];
        console.log(keywords);

        for (let i = 0; i < keywords.length; ++i) {
            if (surl.includes(keywords[i])) {
                chrome.tabs.update(tabId, { url: "https://www.google.com" });
            }
        }
    });

});

