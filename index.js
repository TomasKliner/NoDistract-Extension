const submit = document.getElementById("submit");
const txt = document.getElementById("text");
const check = document.getElementById('check');
const del = document.getElementById('del');
const keyList = document.getElementById('keyList');

load();

function load() {
    chrome.storage.local.get('keywords', function (result) {
        let arr = result['keywords'] ? result['keywords'] : [];
        keyList.innerHTML = '';
        for (let i = 0; i < arr.length; i++) {
            keyList.innerHTML += `<li> ${arr[i]} </li>`;
        }
    });
}

submit.addEventListener("click", function () {

    if (txt.value.length > 2) {
        chrome.storage.local.get('keywords', function (result) {
            let arr = result['keywords'] ? result['keywords'] : [];
            arr.push(txt.value);
            chrome.storage.local.set({ 'keywords': arr });
        });
        load();
    }
    else alert("The key has to be atleast 3 characters long !")
});

del.addEventListener("click", function () {
    chrome.storage.local.clear();
    alert("done")
    load();
});
