var warnings = ['@','registered','update','security','billing','account','secur','veri','com-','update','support','service','auth','confirm','xn--'] //Common URL occurences that need to be checked

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) { //Runs when current tab in Chrome is updated
    if (changeInfo.status == 'complete') { //When the update is complete
  
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => { //checks active tab
            for(var i = 0; i < warnings.length; i++) //runs through every string in 'warnings' array
            {
                if(
                tabs[0].url.includes(warnings[i]) && !tabs[0].url.includes("google") ||  //If word is found in url (Ignores words if part of Google search)
                ((tabs[0].url.length) > 54) && !tabs[0].url.includes("google")) //if URL is longer than 54 characters (Ignores if part of Google search)
                {
                    if(window.confirm("Uh Oh! This site may be harmful to your computer. Would you like to leave?")) //Display popup window informing user
                    { //If user selects 'Okay'
                        chrome.tabs.update({url: "https://lauracoleman.github.io/"}); //re-direct away from site to educational website
                        return;
                    }
                    else
                    {
                        break; //if user selects 'cancel', do nothing
                    }
                }

            }                   
        });
    }
  })