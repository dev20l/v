window.hideAllMessages = function() {
  window.searchingMessage.style.display = 'none';
  window.verifyingMessage.style.display = 'none';
  window.foundMessage.style.display = 'none';
};

window.claimButtons.forEach(button => {
  button.addEventListener('click', function() {
    const gems = this.getAttribute('data-gems');
    window.selectedGems = gems;
    window.popupDiamondCount.textContent = gems;
    window.finalDiamondCount.textContent = gems;

    const diamondImages = {
      "750": "https://cdn.jsdelivr.net/gh/monorolls/99@main/700-diamonds.png",
      "250": "https://cdn.jsdelivr.net/gh/monorolls/99@main/250-diamonds.png",
      "100": "https://cdn.jsdelivr.net/gh/monorolls/99@main/100-diamonds.png",
      "20":  "https://cdn.jsdelivr.net/gh/monorolls/99@main/20-diamonds.webp"
    };

    window.popupDiamondImage.src = "https://cdn.jsdelivr.net/gh/monorolls/99@main/dia.png";
    window.selectedDiamondImage = diamondImages[gems] || "";
    window.finalDiamondImage.src = window.selectedDiamondImage;

    window.usernameInput.value = "";
    window.hideAllMessages();
    window.claimSection.style.display = 'none';
    window.popupForm.style.display = 'block';
    window.userProfile.style.display = 'none';
    window.popupDiamonds.classList.remove('hidden');
    window.popupOverlay.classList.add('active');
  });
});

window.popupClose.addEventListener('click', () => window.popupOverlay.classList.remove('active'));
