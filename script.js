chrome.runtime.getBackgroundPage(backgroundPage => backgroundPage.testMethod());

const sub = document.getElementById("submit");
const txt = document.getElementById("text");

sub.addEventListener("click", function(){
    let currentUrl;
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        currentUrl = tabs[0].url;
    });

    let pagesTo = [];
    let pagesFrom = [];
    pagesFrom.push(currentUrl);
    pagesTo.push(txt.value);

    localStorage.setItem("pagesTo") = pagesTo;
    localStorage.setItem("pagesFrom") = pagesFrom;
})



























