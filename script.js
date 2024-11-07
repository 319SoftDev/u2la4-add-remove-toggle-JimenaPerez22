const heading = document.querySelector("#heading");
const subHeading = document.querySelector("#subheading");

const changeFontColor = () =>{
    heading.classList.toggle("blue-text");
}

const changeColor = () =>{
    subHeading.classList.toggle("blue-text");
}

heading.addEventListener("click", changeFontColor);
subHeading.addEventListener("click", changeColor);



//reply button shows text box (remove hidden)
const replyButton = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");


const openReplyMessage = () =>{
    replyMessage.classList.remove("hidden");
}

replyButton.addEventListener("click",openReplyMessage);


//send and cancel buttons hide text box(add hidden)
const cancelButton = document.querySelector("#cancel-button");
const sendButton = document.querySelector("#send-button");

const closeReplyMessage = () =>{
    replyMessage.classList.add("hidden");
}

cancelButton.addEventListener("click",closeReplyMessage);
sendButton.addEventListener("click",closeReplyMessage);

//opening Michaels Messanger
const openButton = document.querySelector("#open-button");
const inboxMessage = document.querySelector("#inbox-message");
const markButton = document.querySelector("#mark-button");


const openMessanger = () =>{
    heading.classList.add("is-read");
    inboxMessage.classList.remove("hidden");
    markButton.classList.remove("hidden");
}

openButton.addEventListener("click", openMessanger);


//closing Michaels Messanger
const close = document.querySelector("#close");

const closeMessanger = () =>{
    heading.classList.remove("is-read");
    inboxMessage.classList.add("hidden");
    markButton.classList.add("hidden");
}

close.addEventListener("click", closeMessanger);

//hide the inbox message + turn message background white
const hideInboxMessage = () =>{
    markButton.classList.add("hidden");
    openButton.classList.add("hidden");
    replyButton.classList.add("hidden");
    inboxMessage.classList.add("hidden");
}

markButton.addEventListener("click", hideInboxMessage);


// making the toggle of the Michaels Messenger
const checkbox = document.querySelector("#checkbox");
const actionButtons = document.querySelector("#ation-buttons");
const inbox = document.querySelector("#inbox");

const changeInbox = () =>{
    inbox.classList.toggle("is-selected");
    actionButtons.classList.toggle("hidden");
}

checkbox.addEventListener("click", changeInbox);


//Medium activity