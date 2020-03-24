chrome.browserAction.onClicked.addListener(function (tab) { //Fired when user clicks icon
    if (tab.url.indexOf("esxp.microsoft.com") > 0 && tab.url.indexOf("consumption") > 0) { // Inspect whether the place where user clicked matches with our list of URL
			chrome.tabs.executeScript(null, {file: "content.js"});
    }	else {
			alert("The extension won't work on this website! Please go to the consumption table on RMX. You will be happy...");
		}
});
