import { Storage } from "@plasmohq/storage"
const storage = new Storage()

console.log("Live now; Background script is running !")
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

	let pernament_urls, pernament_keywords, scheduled_urls, scheduled_keywords, redirectUrl
	let loadData = async () => {
		pernament_urls = await storage.get("pernament_urls")
        console.log(pernament_urls);
		pernament_keywords = await storage.get("pernament_keywords")
		scheduled_urls = await storage.get("scheduled_urls")
		scheduled_keywords = await storage.get("scheduled_keywords")
		redirectUrl = await storage.get("redirectUrl")
		//await permanent()
	}
	function permanent() {
        console.log("pernament_keywords", pernament_keywords + " ,pernament_urls", pernament_urls)
		if (pernament_keywords === undefined) return
		let arr = pernament_keywords
		let surl = changeInfo["url"]

		for (let i = 0; i < arr.length; ++i) {
			if (surl.toLowerCase().includes(arr[i].toLowerCase())) {
				if (redirectUrl) chrome.tabs.update(tabId, { url: redirectUrl })
				else chrome.tabs.update(tabId, { url: "https://www.google.com" })
			}
		}

		let arr2 = pernament_urls
		if (pernament_urls === undefined) return
		for (let i = 0; i < arr2.length; ++i) {
			if (surl.toLowerCase() === arr2[i].toLowerCase()) {
				if (redirectUrl) chrome.tabs.update(tabId, { url: redirectUrl })
				else chrome.tabs.update(tabId, { url: "https://www.google.com" })
			}
		}
	}

	loadData().then(permanent)
}) //added to fix the issue can delete if more comming

/////////////////////////////////////////// NOT USED IN NEW
//     function global() {
//         chrome.storage.local.get('global', function (result) {

//             let now = getTime();

//             if ((Date.parse('01/01/2011 ' + result['global']['timeFrom']) < Date.parse('01/01/2011 ' + now)) && (Date.parse('01/01/2011 ' + result['global']['timeTo']) > Date.parse('01/01/2011 ' + now))) {

//                 let arr = result['global']['keys'] ? result['global']['keys'] : [];
//                 let surl = changeInfo['url'];

//                 for (let i = 0; i < arr.length; ++i) {
//                     if (surl.toLowerCase().includes(arr[i].toLowerCase())) {
//                         chrome.storage.local.get(['redirectUrl'], function (result) {
//                             if (result.redirectUrl)
//                                 chrome.tabs.update(tabId, { url: result.redirectUrl });
//                             else
//                                 chrome.tabs.update(tabId, { url: "https://www.google.com" });
//                         });
//                     }
//                 }

//                 let arr2 = result['global']['urls'] ? result['global']['urls'] : [];

//                 for (let i = 0; i < arr2.length; ++i) {
//                     if (surl.toLowerCase() == arr2[i].toLowerCase()) {
//                         chrome.storage.local.get(['redirectUrl'], function (result) {
//                             if (result.redirectUrl)
//                                 chrome.tabs.update(tabId, { url: result.redirectUrl });
//                             else
//                                 chrome.tabs.update(tabId, { url: "https://www.google.com" });
//                         });
//                     }
//                 }

//             }
//         }
//         );
//     }

//     function old() {
//         chrome.storage.local.get('time', function (result) {

//             let timeArr = result['time'] ? result['time'] : [];
//             let isInInterval = false;

//             const timeNow = new Date('2020-01-01 ' + getTime());

//             for (let i = 0; i < timeArr.length; i += 2) {
//                 let timeF = new Date('2020-01-01 ' + timeArr[i]);
//                 let timeT = new Date('2020-01-01 ' + timeArr[i + 1]);
//                 if (timeNow >= timeF && timeNow <= timeT) {
//                     isInInterval = true;
//                     break;
//                 }
//             }
//             if (1) {
//                 chrome.storage.local.get('keywords', function (result) {
//                     let arr = result['keywords'] ? result['keywords'] : [];
//                     let surl = changeInfo['url'];

//                     for (let i = 0; i < arr.length; ++i) {
//                         if (surl.toLowerCase().includes(arr[i].toLowerCase())) {
//                             chrome.storage.local.get(['redirectUrl'], function (result) {
//                                 if (result.redirectUrl)
//                                     chrome.tabs.update(tabId, { url: result.redirectUrl });
//                                 else
//                                     chrome.tabs.update(tabId, { url: "https://www.google.com" });
//                             });
//                         }
//                     }
//                 });

//                 chrome.storage.local.get('urls', function (result) {
//                     let arr = result['urls'] ? result['urls'] : [];
//                     let surl = changeInfo['url'];

//                     for (let i = 0; i < arr.length; ++i) {
//                         if (surl.toLowerCase() == arr[i].toLowerCase()) {
//                             chrome.storage.local.get(['redirectUrl'], function (result) {
//                                 if (result.redirectUrl)
//                                     chrome.tabs.update(tabId, { url: result.redirectUrl });
//                                 else
//                                     chrome.tabs.update(tabId, { url: "https://www.google.com" });
//                             });
//                         }
//                     }
//                 });
//             }
//         });
//     }
//     function getTime() {
//         const date = new Date();
//         return date.getHours() + ":" + date.getMinutes();
//     }
// });
// //let tempArr = ['youtube.com/shorts', 'youtube.com/feed/explore'];

// ///////////////////////////////////////////////////////////////////////// Zoutube name
// //documentation : https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => { //solve tabs update
//     if (request.loaded) {
//         //console.log(request.name);
//         if (request.name.toLowerCase().includes('timmysdaadsads'.toLowerCase())) { //feed/sub exclude from this, or include only /watch urls
//             console.log("Channel name and record does MATCH!");
//             chrome.tabs
//                 .query({ currentWindow: true, active: true })
//                 .then(x => {
//                     chrome.storage.local.get(['redirectUrl'], function (result) {
//                         if (result.redirectUrl)
//                             chrome.tabs.update(x[0].id, { url: result.redirectUrl });
//                         else
//                             chrome.tabs.update(x[0].id, { url: "https://www.google.com" });
//                     });
//                 });
//         }
//         else console.log("Channel name and record does DOESNT match !!");

//         //console.log(sender); //sender info(url of current page that executed content script)

//     }

// });

// //ulozit zacatek a konec do chrome.storage dle data a pote je zpracovavat,. aby sel ukazat cas na index page
// ///mozna udelat dalsi s onActive podle ktereho budu pocitat cas vsem ostatnim krome youtube, netflix atd.. jelikoz ty muzou hrat i kdyz nejsou activeTab

// let openTabs = [];

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

//     if (openTabs[tabId] === undefined || openTabs[tabId].url !== changeInfo.url) {
//         openTabs[tabId] = { url: tab.url, openedOn: new Date() };
//     }

// });
// chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
//     console.log("closed tab url: " + openTabs[tabId].url + " " + openTabs[tabId].openedOn);
//     let timeElapsed = new Date() - openTabs[tabId].openedOn;
//     timeElapsed /= 1000;

//     console.log(timeElapsed + " s");

// });

// //favIconUrl
