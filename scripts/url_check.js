test();
function test(){
    if(document.querySelectorAll('#channel-name').length===0){
        setTimeout(test, 200);
         //console.log("not yet!")
    }
    else Work();
   
}
function Work() {
    const el = document.querySelectorAll('#channel-name') || null;

    const name = el[0].innerText; //someText.replace(/(\r\n|\n|\r)/gm, "");
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

