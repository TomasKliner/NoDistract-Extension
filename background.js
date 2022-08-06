
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    chrome.storage.local.get('keywords', function (result) {
        let arr = result['keywords'] ? result['keywords'] : [];
        let surl = changeInfo['url'];

        for (let i = 0; i < arr.length; ++i) {
            if (surl.includes(arr[i])) {
                console.log(surl);
                chrome.tabs.update(tabId, { url: "https://www.google.com" });
            }
        }
    });


    chrome.storage.local.get('urls', function (result) {
        let arr = result['urls'] ? result['urls'] : [];
        let surl = changeInfo['url'];

        for (let i = 0; i < arr.length; ++i) {
            if (surl == arr[i]) {
                console.log(surl);
                chrome.tabs.update(tabId, { url: "https://www.google.com" });
            }
        }
    });


});

let tempArr=['youtube.com/shorts', 'youtube.com/feed/explore']