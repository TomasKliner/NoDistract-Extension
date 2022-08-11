
function loadAll() { //load all lists of textareas
    loadPermanent();
    loadGlobal();
}

function loadData(id, data) {
    x.innerText = 0;
    let x = document.getElementById(id);
    for (let i = 0; i < data.length; ++i) {
        x.innerText += data[i];
    }
}

function getData(id) {
    let x = document.getElementById(id);
    return x.split(/\r?\n/).filter(element => element);
}

function loadPermanent() {
    chrome.storage.local.get('permanent', function (result) {
        loadData("permanent_key", result.keys);
        loadData("permanent_urls", result.urls);
    });
}
function savePermanent() {
    let k = getData("permanent_key");
    let u = getData("permanent_urls");
    chrome.storage.local.set({ 'permanent': { keys: k, urls: u } });
}
function loadGlobal() {
    chrome.storage.local.get('global', function (result) {
        loadData("global_key", result.keys);
        loadData("global_urls", result.urls);
        document.getElementById("timeFrom").value = result.time.from;
        document.getElementById("timeTo").value = result.time.to;
    });
}
function saveGlobal() {
    let k = getData("global_key");
    let u = getData("global_urls");

    let timeFrom = document.getElementById("timeFrom").value;
    let timeTo = document.getElementById("timeTo").value;

    chrome.storage.local.set({ 'permanent': { keys: k, urls: u, time: { to: timeTo, from: timeFrom } } });
}

let permanent = {
    keys: [],
    urls: []
}

let global = {
    time: {
        from: null,
        to: null
    },
    keys: [],
    urls: []
}

let custom = {
    items: [{ time: { from: null, to: null }, key: null, url: null }]
}


let limit = {
    items: [{ time: { from: null, to: null }, key: null, url: null }]
}










// BASE SAVE
/*

function loadAll(){ //load all lists of textareas
    let elements = document.getElementsByName("textarea");

    for (let i=0; i<elements.length; i++) {
        loadList(array[i].id);
    }
}
function loadList(id) {
    let list = document.getElementById(id);
    arr.array.forEach(element => {
        list.innerText += element;
    });
}


function getData() {
    let str = list.innertext;
    let arr = str.split(/\r?\n/).filter(element => element);
}


function loadData() {
    let list = document.getElementById("id");
    arr.array.forEach(element => {
        list.innerText += element;
    });

}
*/