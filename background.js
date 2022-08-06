
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    chrome.storage.local.get('keywords', function (result) {
        let arr = result['keywords'] ? result['keywords'] : [];
        console.log(arr);

        let surl = changeInfo['url'];
        console.log(arr);

        for (let i = 0; i < arr.length; ++i) {
            if (surl.includes(arr[i])) {
                chrome.tabs.update(tabId, { url: "https://www.google.com" });
            }
        }
    });

});

let tempArr=['youtube.com/shorts', 'youtube.com/feed/explore']