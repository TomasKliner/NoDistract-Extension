chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    old();
    permanent();
    global();



    function global() {
        chrome.storage.local.get('global', function (result) {

            let now = getTime();

            if ((Date.parse('01/01/2011 ' + result['global']['timeFrom']) < Date.parse('01/01/2011 ' + now)) && (Date.parse('01/01/2011 ' + result['global']['timeTo']) > Date.parse('01/01/2011 ' + now))) {

                let arr = result['global']['keys'] ? result['global']['keys'] : [];
                let surl = changeInfo['url'];


                for (let i = 0; i < arr.length; ++i) {
                    if (surl.includes(arr[i])) {
                        chrome.tabs.update(tabId, { url: "https://www.google.com" });
                    }
                }


                let arr2 = result['global']['urls'] ? result['global']['urls'] : [];

                for (let i = 0; i < arr2.length; ++i) {
                    if (surl == arr2[i]) {

                        chrome.tabs.update(tabId, { url: "https://www.google.com" });
                    }
                }

            }
        }
        );
    }



    function permanent() {
        chrome.storage.local.get('permanent', function (result) {
            let arr = result['permanent']['keys'] ? result['permanent']['keys'] : [];
            let surl = changeInfo['url'];

            for (let i = 0; i < arr.length; ++i) {
                if (surl.includes(arr[i])) {
                    chrome.tabs.update(tabId, { url: "https://www.google.com" });
                }
            }

            let arr2 = result['permanent']['urls'] ? result['permanent']['urls'] : [];

            for (let i = 0; i < arr2.length; ++i) {
                if (surl == arr2[i]) {
                    console.log(surl);
                    chrome.tabs.update(tabId, { url: "https://www.google.com" });
                }
            }
        });
    }





    function old() {
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
            if (1) {
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
    }
    function getTime() {
        const date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }
});
//let tempArr = ['youtube.com/shorts', 'youtube.com/feed/explore'];


///////////////////////////////////////////////////////////////////////// Zoutube name
//documentation : https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => { //solve tabs update
    if (request.loaded) {
        //console.log(request.name);
        if (request.name.includes('free')) { //feed/sub exclude from this, or include only /watch urls
            console.log("Channel name and record does MATCH!");
            chrome.tabs
                .query({ currentWindow: true, active: true })
                .then(x => chrome.tabs.update(x[0].id, { url: "https://www.google.com" }));
        }
        else console.log("Channel name and record does DOESNT match !!");


        //console.log(sender); //sender info(url of current page that executed content script)

    }



});

let openTabs = [];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => 

    if (openTabs[tabId] === undefined) {
        openTabs[tabId] = { url: tab.url, openedOn: new Date() };
    }

});
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    console.log("closed tab url: " + openTabs[tabId].url + " " + openTabs[tabId].openedOn);
    let timeElapsed = new Date() - openTabs[tabId].openedOn;
    timeElapsed /= 1000;

    console.log(timeElapsed + " s");

});

//favIconUrl