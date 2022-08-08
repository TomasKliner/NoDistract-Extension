const timeFrom = document.getElementById("timeFrom");
const timeTo = document.getElementById("timeTo");
const timeAdd = document.getElementById("timeAdd");
const timeClear = document.getElementById("timeClear");
const timeList = document.getElementById('timeList');

loadTime();

function loadTime() {
    chrome.storage.local.get('time', function (result) {
        let arr = result['time'] ? result['time'] : [];
        timeList.innerHTML = '';
        for (let i = 0; i < arr.length; i += 2) {
            timeList.innerHTML += `<li> ${arr[i]} - ${arr[i + 1]}</li>`;
        }
    });
}

timeAdd.addEventListener("click", function () {
    chrome.storage.local.get('time', function (result) {
        let arr = result['time'] ? result['time'] : [];
        if (timeFrom.value && timeTo.value && timeTo.value > timeFrom.value) {
            arr.push(timeFrom.value);
            arr.push(timeTo.value);
            chrome.storage.local.set({ 'time': arr });
        }
        else alert("Time values are using wrong values")
        loadTime();
    });
});

timeClear.addEventListener("click", function () {
    console.log("test");
    chrome.storage.local.set({ 'time': [] });
    loadTime()
});

function getTime() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes();
}
