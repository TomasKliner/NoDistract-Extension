
loadAll();
function loadAll() { //load all lists of textareas
    loadPermanent();
    loadGlobal();
}

function loadData(id, data) {
    let x = document.getElementById(id);
    x.value = "";
    for (let i = 0; i < data.length; ++i) {
        x.value += data[i] + "\n";
    }
}

function getData(id) {
    let x = document.getElementById(id).value;
    return x.split(/\r?\n/).filter(element => element);
}
//////////////////////////////////////////////////////

function loadPermanent() {
    chrome.storage.local.get('permanent', function (result) {
        loadData("permanent_key", result['permanent']['keys']);
        loadData("permanent_url", result['permanent']['urls']);
    });
}
document.getElementById('save_permanent').addEventListener("click",
    function savePermanent() {
        let k = getData("permanent_key");
        let u = getData("permanent_url");
        chrome.storage.local.set({ 'permanent': { 'keys': k, 'urls': u } });
    });
////////////////////////////////////////////////////////////////

function loadGlobal() {
    chrome.storage.local.get('global', function (result) {
        loadData("global_key", result['global']['keys']);
        loadData("global_url", result['global']['urls']);
        document.getElementById("timeFrom").value = result['global']['timeFrom'];
        document.getElementById("timeTo").value = result['global']['timeTo'];
    });
}

document.getElementById('save_global').addEventListener("click", function saveGlobal() {
    let k = getData("global_key");
    let u = getData("global_url");

    let timeFrom = document.getElementById("timeFrom").value;
    let timeTo = document.getElementById("timeTo").value;

    chrome.storage.local.set({
        'global':
            { 'keys': k, 'urls': u, 'timeTo': timeTo, 'timeFrom': timeFrom }
    });
});






































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