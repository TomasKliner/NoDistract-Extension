const submit = document.getElementById("submit");
const txt = document.getElementById("text");
const check = document.getElementById('check');


submit.addEventListener("click", function () {
    chrome.storage.local.get('keywords', function (result) {
        let arr = result['keywords'] ? result['keywords'] : [];
        arr.push(txt.value);
        chrome.storage.local.set({ 'keywords': arr });
        });

    });
