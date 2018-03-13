// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript(null, {file: "jquery-3.3.1.js"});
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  });