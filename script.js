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
const actionButton = document.querySelector("#action-button");


const openMessanger = () =>{
    heading.classList.add("is-read");
    inboxMessage.classList.remove("hidden");
    actionButton.classList.remove("hidden");
}

openButton.addEventListener("click", openMessanger);


//closing Michaels Messanger
const close = document.querySelector("#close");

const closeMessanger = () =>{
    heading.classList.remove("is-read");
    inboxMessage.classList.add("hidden");
    actionButton.classList.add("hidden");
}

close.addEventListener("click",closeMessanger);