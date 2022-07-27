const submit = document.getElementById("submit");
const txt = document.getElementById("text");
const check = document.getElementById('check');


submit.addEventListener("click", function () {
    let pagesTo = [];
    let pagesFrom = [];
    if (localStorage.getItem('pagesTo')) {
        pagesTo = JSON.parse(localStorage.getItem('pagesTo'));
        pagesFrom = JSON.parse(localStorage.getItem('pagesFrom'));
    }

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        let url = tabs[0].url;
        pagesFrom.push(url);
        pagesTo.push(txt.value);

        localStorage.setItem("pagesTo", JSON.stringify(pagesTo));
        localStorage.setItem("pagesFrom", JSON.stringify(pagesFrom));

    });



    check.addEventListener("click", function () {
        let pagesTo = [];
        let pagesFrom = [];
        if (localStorage.getItem('pagesTo') != null) {
            pagesTo = JSON.parse(localStorage.getItem('pagesTo'));
            pagesFrom = JSON.parse(localStorage.getItem('pagesFrom'));
        }
            chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
                let url = tabs[0].url;
                for (let i = 0; i < pagesFrom.length; ++i) {
                    if(pagesFrom[i] === url){
                        alert('test');
                        chrome.tabs.update({url: pagesTo[i]});
                    }
                }
        })
    })




})





















