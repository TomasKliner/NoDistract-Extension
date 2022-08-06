const submit = document.getElementById("submit");
const txt = document.getElementById("text");
const check = document.getElementById('check');


submit.addEventListener("click", function () {
    chrome.storage.local.get(['keywords'], function (result) {
        let keywords = [];
        keywords = result;
        keywords.push(txt.value);
        chrome.storage.local.set({ 'keywords': keywords });
        console.log(keywords)

    });

    /*
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            let url = tabs[0].url;
            pagesFrom.push(url);
            pagesTo.push(txt.value);
    
            localStorage.setItem("pagesTo", JSON.stringify(pagesTo));
        });
        */
});







