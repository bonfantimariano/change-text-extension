let btn = document.getElementById('changeTitleBtn');
btn.innerText = "Change Title...";
btn.style.cssText = 'width: 150px;';

btn.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript({
      file: "modifyText.js"
    });
  });
};