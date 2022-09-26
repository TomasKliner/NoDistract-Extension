const myTimeout = setTimeout(test,10000); //find better solution after load of everything

function test(){

const el = document.querySelectorAll('#channel-name')
    || "not found";

const name = el[0].innerText; //someText.replace(/(\r\n|\n|\r)/gm, "");
// contains 2x + new lines

//console.log(el);
//console.log(el.length)
console.log(name); // yep +- /n

chrome.runtime.sendMessage({ loaded: true, name: name, message: 'Hello, im Content script' });
}

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

