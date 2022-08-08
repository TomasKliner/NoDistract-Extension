const txt = document.getElementById("text");
const submit = document.getElementById("submit");
const submit2 = document.getElementById("submit2");
const check = document.getElementById('check');
const delAll = document.getElementById('delAll');
const keyList = document.getElementById('keyList');
const delByName = document.getElementById('delByName');
load();


function load() {
    chrome.storage.local.get('keywords', function (result) {
        let arr = result['keywords'] ? result['keywords'] : [];
        keyList.innerHTML = '';
        for (let i = 0; i < arr.length; i++) {
            keyList.innerHTML += `<li> ${arr[i]} </li>`; //<button class="closebtn" data-id='${i}'>x</button>
        }
    });
    chrome.storage.local.get('urls', function (result) {
        let arr = result['urls'] ? result['urls'] : [];
        timeList.innerHTML = '';
        for (let i = 0; i < arr.length; i++) {
            timeList.innerHTML += `<li> ${arr[i]} </li>`; //<button class="closebtn" data-id='${i}'>x</button>
        }
    });
}

submit.addEventListener("click", function () {

    if (txt.value.length > 2) {
        chrome.storage.local.get('keywords', function (result) {
            let arr = result['keywords'] ? result['keywords'] : [];
            arr.push(txt.value);
            chrome.storage.local.set({ 'keywords': arr });
            load();
        });
    }
    else alert("The key has to be atleast 3 characters long !")
});

submit2.addEventListener("click", function () {

    if (txt.value.length > 2) {
        chrome.storage.local.get('urls', function (result) {
            let arr = result['urls'] ? result['urls'] : [];
            arr.push(txt.value);
            chrome.storage.local.set({ 'urls': arr });
            load();
        });
    }
    else alert("The key has to be atleast 3 characters long !")
});

delAll.addEventListener("click", function () {
    chrome.storage.local.clear();
    load();
});

delByName.addEventListener("click", function () {
    chrome.storage.local.get('urls', function (result) {
        let arr = result['urls'] ? result['urls'] : [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == txt.value) {
                arr.splice(i, 1);
            }
        }
        chrome.storage.local.set({ 'urls': arr });
        load();
    });
    chrome.storage.local.get('keywords', function (result) {
        let arr = result['keywords'] ? result['keywords'] : [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == txt.value) {
                arr.splice(i, 1);
            }
        }
        chrome.storage.local.set({ 'keywords': arr });
        load();
    });
});







/*let updateBtns = document.getElementsByClassName('closebtn');
for (let i = 0; i < updateBtns.length; i++) {
    document.getElementsByClassName('updateBtn')[i].addEventListener('click', function () {
        let id = parseInt(this.getAttribute("data-id"));
        rem(id);
    });
}



function rem(id) {
    alert('test');
    chrome.storage.local.get('keywords', function (result) {
        let arr = result['keywords'] ? result['keywords'] : [];
        alert(id);
        arr.splice(id, 1);
        chrome.storage.local.set({ 'keywords': arr });
        load();
    });
}

*/