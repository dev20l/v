/* /*! This website is protected by copyright.
Developed by Victor Abdo.
To get the source code, please contact on WhatsApp: +212682497757
*/

function isIOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

const OFFER_TIMER_DURATION = 180000;
const PROCESSING_DURATION = 180000;  

let apiOffersData = [];
let currentApiOffer = null;
let pendingTimerOffers = {};
let offerCheckInterval = null;

function loadApiOffers() {
    const apiOffersContainer = document.getElementById('api-offers-container');
    
    if (!isIOS()) {
        apiOffersContainer.innerHTML = `
            <div class="offer-card" style="text-align: center; padding: 40px 20px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2.5rem; color: #f39c12; margin-bottom: 16px;"></i>
                <h3 style="color: var(--text-primary); margin-bottom: 10px;">Oops!</h3>
                <p style="color: var(--text-secondary);">
                    Something went wrong. The offer API connection was interrupted. 
                    Please try again later or check your network compatibility.
                </p>
            </div>`;
        return;
    }

    apiOffersContainer.innerHTML = '<div class="loading will-change"><div class="spinner"></div><p>Loading amazing offers for you...</p></div>';
    
    const apiUrl = "https://d1y3y09sav47f5.cloudfront.net/public/offers/feed.php?user_id=511022&api_key=3197b8ec5712836c30c668f82c8c6e4a&s1=&s2=&callback=?";
    
    $.getJSON(apiUrl, function(offers) {
        if (offers && offers.length > 0) {
            apiOffersData = processApiOffers(offers.slice(0, 10));
            renderApiOffers();
        } else {
            showToast("Oops! API temporary unavailable.", "info");
            apiOffersContainer.innerHTML = '<div class="offer-card will-change" style="text-align: center; padding: 40px 20px;"><i class="fas fa-sync-alt" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 16px;"></i><p style="color: var(--text-secondary);">Oops! Service under maintenance.</p></div>';
        }
    }).fail(function() {
        showToast("Oops! Connection failed.", "error");
    });
}

function processApiOffers(offers) {
    const robuxValues = [];
    for (let i = 0; i < offers.length; i++) {
        robuxValues.push(Math.floor(Math.random() * (220 - 90 + 1)) + 90);
    }
    
    return offers.map((offer, index) => {
        return {
            id: offer.id,
            anchor: (offer.anchor || offer.name || "Offer").replace(/<[^>]*>/g, '').trim(),
            conversion: offer.conversion || "Complete the task to earn Robux",
            url: offer.url || "#",
            robux: robuxValues[index] || 100,
            thumbnail: getThumbnailUrl(offer),
            pendingTimer: pendingTimerOffers[offer.id] || null,
            isProcessing: false
        };
    });
}

function getThumbnailUrl(offer) {
    return offer.network_icon || offer.thumbnail || offer.icon || offer.image_url || "https://via.placeholder.com/100/6A11CB/FFFFFF?text=Offer";
}

function renderApiOffers() {
    const apiOffersContainer = document.getElementById('api-offers-container');
    if (!isIOS()) return;
    
    apiOffersContainer.innerHTML = '';
    
    apiOffersData.forEach((offer, index) => {
        const isCompleted = window.userData && window.userData.completedApiOffers ? window.userData.completedApiOffers.includes(offer.id) : false;
        const isProcessing = offer.isProcessing;
        
        let btnText = isCompleted ? 'Completed' : (isProcessing ? 'Processing...' : 'Start Task');
        let btnIcon = isCompleted ? 'check' : (isProcessing ? 'clock' : 'play');
        let btnClass = isCompleted ? 'btn-disabled' : (isProcessing ? 'processing' : '');

        const offerCard = document.createElement('div');
        offerCard.className = `offer-card will-change ${index < 3 ? 'highlight' : ''}`;
        offerCard.innerHTML = `
            <div class="offer-header">
                <div class="offer-image"><img src="${offer.thumbnail}"></div>
                <div class="offer-content">
                    <div class="offer-title">${offer.anchor}</div>
                    <div class="offer-info">
                        <div class="offer-points">
                            <img src="https://cdn.jsdelivr.net/gh/lib-devtools/img/HBaO44H.png" alt="R$" style="width:20px;"> ${offer.robux}
                        </div>
                    </div>
                </div>
            </div>
            <div class="offer-description">${offer.conversion}</div>
            <button class="btn-offer ${btnClass}">
                <i class="fas fa-${btnIcon}"></i> ${btnText}
            </button>
        `;
        
        offerCard.querySelector('.btn-offer').addEventListener('click', () => handleOfferButtonClick(offer, index));
        apiOffersContainer.appendChild(offerCard);
    });
    
    updateApiOffersStatus();
}

function handleOfferButtonClick(offer, index) {
    if (!isIOS()) {
        showToast("Oops! Device incompatibility.", "error");
        return;
    }
    
    if (window.userData && window.userData.completedApiOffers && window.userData.completedApiOffers.includes(offer.id)) {
        showToast("Already completed!", "info");
        return;
    }
    
    if (offer.isProcessing) {
        if (offer.url !== "#") window.open(offer.url, '_blank');
        return;
    }

    if (offer.url !== "#") {
        window.open(offer.url, '_blank');
    }

    startOfferTask(offer, index);
}

function startOfferTask(offer, index) {
    apiOffersData[index].isProcessing = true;
    apiOffersData[index].pendingTimer = Date.now() + PROCESSING_DURATION;
    pendingTimerOffers[offer.id] = apiOffersData[index].pendingTimer;
    
    if (window.userData) {
        window.userData.totalOffersAttempted = (window.userData.totalOffersAttempted || 0) + 1;
        if (window.saveUserToLocalStorage) window.saveUserToLocalStorage();
    }
    
    showToast(`Oops! Task started. Earn ${offer.robux} after verification.`, 'success');
    renderApiOffers();
    
    setTimeout(() => {
        checkAndCompleteOffer(offer, index);
    }, PROCESSING_DURATION);
    
    if (!offerCheckInterval) {
        offerCheckInterval = setInterval(() => {
            checkAllPendingOffers();
        }, 30000);
    }
}

function checkAndCompleteOffer(offer, index) {
    if (window.userData && !window.userData.completedApiOffers.includes(offer.id)) {
        apiOffersData[index].isProcessing = false;
        
        if (window.addPoints) {
            window.addPoints(offer.robux, "api");
        }
        
        if (window.userData) {
            window.userData.apiOffersEarnings += offer.robux;
            window.userData.completedApiOffers.push(offer.id);
        }
        
        delete pendingTimerOffers[offer.id];
        renderApiOffers();
        
        if (window.saveUserToLocalStorage) window.saveUserToLocalStorage();
        if (window.updateAllDisplays) window.updateAllDisplays();
        
        showToast(`🎉 Oops! Success, +${offer.robux} Robux earned!`, 'success', 6000);
    }
}

function checkAllPendingOffers() {
    const now = Date.now();
    let hasPending = false;
    
    apiOffersData.forEach((offer, index) => {
        if (offer.pendingTimer && offer.pendingTimer <= now && offer.isProcessing) {
            checkAndCompleteOffer(offer, index);
        }
        if (offer.isProcessing) {
            hasPending = true;
        }
    });
    
    if (!hasPending && offerCheckInterval) {
        clearInterval(offerCheckInterval);
        offerCheckInterval = null;
    }
}

function updateApiOffersStatus() {
    if (!window.userData) return;
    
    const completedOffers = window.userData.completedApiOffers ? window.userData.completedApiOffers.length : 0;
    const completedEl = document.getElementById('completed-offers-count');
    const earningsEl = document.getElementById('api-total-earnings');
    const progressFill = document.getElementById('progress-fill');
    
    if (completedEl) completedEl.textContent = completedOffers;
    if (earningsEl) earningsEl.textContent = window.userData.apiOffersEarnings || 0;
    
    if (progressFill && apiOffersData.length > 0) {
        const progressPercent = Math.min((completedOffers / apiOffersData.length) * 100, 100);
        progressFill.style.width = `${progressPercent}%`;
    }
}

function showToast(message, type = 'info', duration = 3000) {
    const toastEl = document.getElementById('toast-notification');
    const toastMessageEl = document.getElementById('toast-message');
    
    if (!toastEl || !toastMessageEl) return;
    
    toastMessageEl.textContent = message;
    toastEl.className = 'toast show ' + type;
    
    setTimeout(() => {
        toastEl.classList.remove('show');
    }, duration);
}

function initOffersSystem() {
    if (isIOS()) {
        loadApiOffers();
    } else {
        const container = document.getElementById('api-offers-container');
        if (container) {
            container.innerHTML = `
                <div style="padding: 40px 20px; text-align: center;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 2.5rem; color: #f39c12; margin-bottom: 16px;"></i>
                    <h3 style="color: #333;">Oops!</h3>
                    <p style="color: #666;">API connection failed. Service compatibility error.</p>
                </div>`;
        }
    }
}

window.loadApiOffers = loadApiOffers;
window.initOffersSystem = initOffersSystem;
window.renderApiOffers = renderApiOffers;
