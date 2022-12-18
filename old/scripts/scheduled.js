loadGlobal();

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

function loadGlobal() {
    chrome.storage.local.get('global', function (result) {
        loadData("global_key", result['global']['keys']);
        loadData("global_url", result['global']['urls']);
        document.getElementById("timeFrom").value = result['global']['timeFrom'];
        document.getElementById("timeTo").value = result['global']['timeTo'];
    });
}

document.getElementById('save_global').addEventListener("click", function saveGlobal() {
    console.log("work");
    let k = getData("global_key");
    let u = getData("global_url");

    let timeFrom = document.getElementById("timeFrom").value;
    let timeTo = document.getElementById("timeTo").value;

    chrome.storage.local.set({
        'global':
            { 'keys': k, 'urls': u, 'timeTo': timeTo, 'timeFrom': timeFrom }
    });
});

