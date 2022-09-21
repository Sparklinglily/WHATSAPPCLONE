





var chatBtn = document.querySelector('#chats');
var chatTab = document.querySelector('#msgs');

var statusBtn = document.querySelector('#status');
var statusTab = document.querySelector('#status_content');

var callsBtn = document.querySelector('#calls');
var callsTab = document.querySelector('#calls_content');

// Tab Functionality
function openTab(tabname, btn){

    // Hide all tabs
    chatTab.style.display = 'none';
    statusTab.style.display = 'none';
    callsTab.style.display = 'none';

    // Disable all active class
    chatBtn.classList.remove('active');
    statusBtn.classList.remove('active');
    callsBtn.classList.remove('active');

    // Display tab and add active class 
    tabname.style.display= 'block';
    btn.currentTarget.classList.toggle('active');
    
}


// Attaching the handlers
chatBtn.addEventListener('click', function(event){
    openTab(chatTab, event);
});


statusBtn.addEventListener('click', function(event){
    openTab(statusTab, event);
});

callsBtn.addEventListener('click', function(event){
    openTab(callsTab, event);
});


// Open Chat by default
chatBtn.click();



// 