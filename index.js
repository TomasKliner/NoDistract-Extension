const sub = document.getElementById("submit");
const txt = document.getElementById("text");

sub.addEventListener("click", function () {
    let pagesTo = [];
    let pagesFrom = [];
    if (localStorage.getItem('pagesTo') != null) {
        let pagesTo = JSON.parse(localStorage.getItem('pagesTo'));
        let pagesFrom = JSON.parse(localStorage.getItem('pagesFrom'));
    }

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        let url = tabs[0].url;
        pagesFrom.push(url);
        pagesTo.push(txt.value);

        localStorage.setItem("pagesTo", JSON.stringify(pagesTo));
        localStorage.setItem("pagesFrom", JSON.stringify(pagesFrom));



    });



    document.getElementById('check').addEventListener("click", function () {
        let pagesTo = [];
        let pagesFrom = [];
        if (localStorage.getItem('pagesTo') != null) {
            let pagesTo = JSON.parse(localStorage.getItem('pagesTo'));
            let pagesFrom = JSON.parse(localStorage.getItem('pagesFrom'));
        }
            chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
                let url = tabs[0].url;
                for (let i = 0; i < pagesFrom.length; ++i) {
                    if(pagesFrom[i] === url){
                        console.log('test');
                        chrome.tabs.update({url: pagesTo[i]});
                    }
                }
        })
    })




})





















