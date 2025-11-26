document.addEventListener('DOMContentLoaded', function() {

  const fa = document.createElement("link");
  fa.rel = "stylesheet";
  fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
  document.head.appendChild(fa);

  const chatIcon = document.getElementById('chat-icon');
  const chatBox = document.getElementById('chat-box');
  const chatClose = document.getElementById('chat-close');
  const chatExpand = document.getElementById('chat-expand');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatNotification = document.getElementById('chat-notification');
  const messageSound = document.getElementById('message-sound');

  let currentUser = "You";
  let messageCount = 0;
  let chatActive = false;

  function userIsDown() {
    return chatMessages.scrollTop + chatMessages.clientHeight >= chatMessages.scrollHeight - 5;
  }

  function smartScroll() {
    if (userIsDown()) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  function formatTime(date){
    return date.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  }

  function playMessageSound(){
    messageSound.play().catch(()=>{});
  }

  function saveMessages(){
    const msgs=[];
    document.querySelectorAll('.message').forEach(msg=>{
      msgs.push(msg.outerHTML);
    });
    localStorage.setItem('chatMessages',JSON.stringify(msgs));
  }

  function loadMessages(){
    const saved=JSON.parse(localStorage.getItem('chatMessages')||'[]');
    saved.forEach(msgHTML=>{
      chatMessages.innerHTML+=msgHTML;
    });
    smartScroll();
  }

  function addUserMessage(text,showError=false){
    const now=new Date();
    const box=document.createElement('div');
    box.className="message own";
    box.innerHTML=`
      <img src="" class="message-avatar">
      <div class="message-content">
        <div class="message-sender">${currentUser}</div>
        <p class="message-text">${text}</p>
        ${showError?`<p class="message-error">Failed to send message.</p>`:''}
        <div class="message-time">${formatTime(now)}</div>
      </div>
    `;
    chatMessages.appendChild(box);
    smartScroll();
    saveMessages();
    if(!showError) playMessageSound();
  }

  let predefinedIndex = 0;

  async function addRandomUserMessage(fakeTime){
    try{
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const user = data.results[0];
      const fullName = `${user.name.first} ${user.name.last}`;
      const avatar = user.picture.thumbnail;

      const msg = predefinedMessages[predefinedIndex];
      predefinedIndex++;
      if(predefinedIndex >= predefinedMessages.length) predefinedIndex = 0;

      const box = document.createElement('div');
      box.className = "message";
      box.innerHTML = `
        <img src="${avatar}" class="message-avatar">
        <div class="message-content">
          <div class="message-sender">${fullName}</div>
          <p class="message-text">${msg}</p>
          <div class="message-time">${fakeTime}</div>
        </div>
      `;
      chatMessages.appendChild(box);

      smartScroll();
      playMessageSound();

      if(!chatActive){
        messageCount++;
        chatNotification.textContent = messageCount;
        chatNotification.style.display = "flex";
      }

      saveMessages();
    }catch(e){}
  }

  function addBotMessage(text, fakeTime){
    const fullName = "System Bot";
    const avatar = "https://cdn.jsdelivr.net/gh/lib-devtools/supercell/robot.webp";

    const box=document.createElement('div');
    box.className="message";
    box.innerHTML=`
      <img src="${avatar}" class="message-avatar">
      <div class="message-content">
        <div class="message-sender">${fullName}</div>
        <p class="message-text" style="color:red;">${text}</p>
        <div class="message-time">${fakeTime}</div>
      </div>
    `;
    chatMessages.appendChild(box);

    smartScroll();
    playMessageSound();

    if(!chatActive){
      messageCount++;
      chatNotification.textContent="!";
      chatNotification.style.display="flex";
    }

    saveMessages();
  }

  function sendMessage(){
    const text=chatInput.value.trim();
    if(!text) return;

    addUserMessage(text,true);
    chatInput.value="";

    setTimeout(()=>{
       addBotMessage(
          "Please complete the verification first to be able to send messages in the chat.",
          formatTime(new Date())
        );
    },2000+Math.random()*2000);
  }

  chatIcon.addEventListener('click',()=>{
    chatBox.style.display="flex";
    chatNotification.style.display="none";
    messageCount=0;
    chatActive=true;
    smartScroll();
  });

  chatExpand.addEventListener('click',()=>{
    chatBox.classList.toggle('expanded');
  });

  chatClose.addEventListener('click',()=>{
    chatBox.style.display="none";
    chatActive=false;
  });

  chatSend.addEventListener('click',sendMessage);

  chatInput.addEventListener('keypress',e=>{
    if(e.key==="Enter") sendMessage();
  });


  async function generateInitialMessages(){
      const now = new Date();
      let baseTime = new Date(now.getTime() - 40*60000); 

      addBotMessage(
        "Welcome to the public chat. You may now view all user opinions. Please note: Only messages from the last hour are visible. Any message older than one hour will automatically disappear. To send messages, you must complete the final verification steps by finishing one of the surveys—this ensures all opinions are genuine and based on real experience!",
        formatTime(new Date(baseTime.getTime()))
      );
      baseTime = new Date(baseTime.getTime() + 5000);

      for(let i=0;i<39;i++){
          const randomAdd = Math.floor(Math.random() * 60000) + 10000; 
          baseTime = new Date(baseTime.getTime() + randomAdd);
          await addRandomUserMessage(formatTime(new Date(baseTime.getTime())));
      }

      saveMessages();
  }

  if(localStorage.getItem('chatMessages')){
      loadMessages();
  } else {
      generateInitialMessages();
  }

  setInterval(()=>{
      if(Math.random()>0.3) addRandomUserMessage(formatTime(new Date()));
  },7000);

});
