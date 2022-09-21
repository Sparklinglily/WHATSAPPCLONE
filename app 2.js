



var chatBtn = document.querySelector('#chats');
var chatTab = document.querySelector('#msgs');

var statusBtn = document.querySelector('#status');
var statusTab = document.querySelector('#status_content');

var callsBtn = document.querySelector('#calls');
var callsTab = document.querySelector('#calls_content');



// Tab Functionality

function openTab(tabname, btnName){
    
    // Hide All tabs
    chatTab.style.display = 'none';
    statusTab.style.display = 'none';
    callsTab.style.display = 'none';

    // Remove all active class
    chatBtn.setAttribute('class','');
    statusBtn.setAttribute('class','');
    callsBtn.setAttribute('class','');


    // Show tab
    if(tabname == 'chatTab'){
        chatTab.style.display = 'block';
        chatBtn.setAttribute('class','active');
    }

    else if(tabname == 'statusTab') {
        statusTab.style.display = 'block';
        statusBtn.setAttribute('class','active');
    }
    else {
        callsTab.style.display = 'block';
        callsBtn.setAttribute('class','active');
    }

}

chatBtn.addEventListener('click', function(){
    openTab('chatTab', 'chatBtn');
});


statusBtn.addEventListener('click', function(){
    openTab('statusTab', 'statusBtn');
});

callsBtn.onclick = openTab('callsTab', 'callsBtn');

// Default tab
chatBtn.click();
