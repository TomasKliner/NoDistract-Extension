
loadAll();
function loadAll() { //load all lists of textareas
    chrome.storage.local.get(['redirectUrl'], function (result) {
        console.log(result.redirectUrl)
        if(result['redirectUrl']) document.getElementById('redirectUrl').value = result['redirectUrl'];
    });
}

document.getElementById('save').addEventListener("click",
    function save() {
        let current_value = document.getElementById('redirectUrl').value;
        console.log(`current going to save value : ${current_value}`)
        chrome.storage.local.set({redirectUrl: current_value}, function() {
          });
    });






