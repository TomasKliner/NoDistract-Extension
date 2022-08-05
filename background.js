/*chrome.runtime.onMessage.addListener((message, callback) => {
    if (message.data === "loadedPage") {
        alert('page loaded');
        const tabId = getForegroundTabId();

        let pagesTo = [];
        let pagesFrom = [];
        if (localStorage.getItem('pagesTo')) {
            pagesTo = JSON.parse(localStorage.getItem('pagesTo'));
            pagesFrom = JSON.parse(localStorage.getItem('pagesFrom'));
        }
        let url = message.data;
        for (let i = 0; i < pagesFrom.length; ++i) {
            if (pagesFrom[i] == url) {
                chrome.tabs.update(tabId, { url: pagesTo[i] });
                break;
            }
        } 1
        alert("working");
    }
});*/

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.update(tabId, 'www.google.com');
 }); 







