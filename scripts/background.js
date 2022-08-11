chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.storage.local.get('time', function (result) {

        let timeArr = result['time'] ? result['time'] : [];
        let isInInterval = false;

        const timeNow = new Date('2020-01-01 ' + getTime());


        for (let i = 0; i < timeArr.length; i += 2) {
            let timeF = new Date('2020-01-01 ' + timeArr[i]);
            let timeT = new Date('2020-01-01 ' + timeArr[i + 1]);
            if (timeNow >= timeF && timeNow <= timeT) {
                isInInterval = true;
                break;
            }
        }
        if ( 1 ) {
            chrome.storage.local.get('keywords', function (result) {
                let arr = result['keywords'] ? result['keywords'] : [];
                let surl = changeInfo['url'];

                for (let i = 0; i < arr.length; ++i) {
                    if (surl.includes(arr[i])) {
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
        }
    });
});

function getTime() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes();
}

let tempArr = ['youtube.com/shorts', 'youtube.com/feed/explore']