var webpage = window.location.href;

var trustworthy = true;
var warnings = ['@','registered','update','security','billing','account','secur','veri','com-','update','support','service','auth','confirm','xn--']

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
  
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            for(var i = 0; i < warnings.length; i++)
            {
                if(tabs[0].url.includes(warnings[i]) && !tabs[0].url.includes("google") || ((tabs[0].url.length) > 54) && !tabs[0].url.includes("google"))
                {
                    if(window.confirm("Uh Oh! This site may be harmful to your computer. Would you like to leave?"))
                    {
                        chrome.tabs.update({url: "https://www.google.com"});
                        return;
                    }
                    else
                    {
                        break;
                    }
                }
            }                   
        });
    }
  })