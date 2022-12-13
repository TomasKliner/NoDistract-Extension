loadPermanent();

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