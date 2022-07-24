// background.js
/*
chrome.runtime.onInstalled.addListener(() => {

    let pagesTo = [];
    let pagesFrom = [];
    if (localStorage.getItem('pagesTo') != null) {
        let pagesTo = JSON.parse(localStorage.getItem('pagesTo'));
        let pagesFrom = JSON.parse(localStorage.getItem('pagesFrom'));
    }

    sub.addEventListener("click", function () {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            let url = tabs[0].url;
            for (let i = 0; i < pagesFrom.length; ++i) {
                if(pagesFrom[i] === url){
                    window.location.replace(pagesTo[i]);
                }
            }

        });
    })


});


*/

