test();
function test() {
    let url = location.href;
    let el = !url.includes('/feed/subscription') ? document.querySelectorAll('#channel-name') : null;
    if (el != null && el.length === 0) {
        setTimeout(test, 50);
        //console.log("not yet!")
    }
    else if (el == null) {
        console.log('Url icludes restricted phrase!');
    }
    else Work(el);

}
function Work(el) {
    const name = el[0].innerText;
    // contains 2x + new lines
    console.log(name); // yep +- /n

    chrome.runtime.sendMessage({ loaded: true, name: name, message: 'Hello, im Content script' });
}




// Example test
/*
console.log("test");
let docc = document.getElementsByTagName('body')
alert(docc);
console.log(docc);
console.log("test");

const test = document.createElement("div")
test.style.fontSize='10rem'
test.innerText="test"
document.body.append(test);
*/

/*
chrome.runtime.sendMessage({data: "loadedPage"});
console.log('Content script');
*/

