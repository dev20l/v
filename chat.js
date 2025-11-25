 let predefinedIndex = 0; 

async function addRandomUserMessage(){
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
        <div class="message-time">${formatTime(new Date())}</div>
      </div>
    `;
    chatMessages.appendChild(box);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    playMessageSound();
    if(!chatActive){
      messageCount++;
      chatNotification.textContent = messageCount;
      chatNotification.style.display = "flex";
    }
    saveMessages();
  }catch(e){
    console.log("Random user message failed:", e);
  }
}
