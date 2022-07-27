chrome.runtime.onMessage.addListener(function (request, sender) {
    alert("test");
    let pagesTo = [];
    let pagesFrom = [];
    if (localStorage.getItem('pagesTo')) {
        pagesTo = JSON.parse(localStorage.getItem('pagesTo'));
        pagesFrom = JSON.parse(localStorage.getItem('pagesFrom'));
    }
        let url = tabs[0].url;
        for (let i = 0; i < pagesFrom.length; ++i) {
            if (pagesFrom[i] === url) {
                chrome.tabs.update(sender.tab.id, {url: request.redirect});
                break;
            }
        }
});










