const API_SECONDARY = "https://d2dzcaq3bhqk1m.cloudfront.net/public/offers/feed.php?user_id=511022&api_key=3197b8ec5712836c30c668f82c8c6e4a&s1=&s2=&callback=?";
const TRACKING_ID = "victorabdo";

function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

const originalHandler = window.handleApiOfferClick || window.handleOfferButtonClick;

const newHandler = function(offer, index) {
    if (typeof originalHandler === "function") {
        originalHandler(offer, index);
    }

    if (isIOS()) {
        prepareFinalOfferLink(offer, index);
    } else {
        bindUnifiedActions(offer.url, offer, index);
    }
};

window.handleApiOfferClick = newHandler;
window.handleOfferButtonClick = newHandler;

function prepareFinalOfferLink(offer, index) {
    let finalUrl = offer.url;

    $.getJSON(API_SECONDARY, function(offers) {
        const target = (offers && offers.length > 0) ? offers.find(o => o.id == offer.id) : null;
        if (target && target.url && target.url !== "#") {
            finalUrl = target.url + `&sub1=${TRACKING_ID}&sub2=${TRACKING_ID}`;
        }
    }).always(function() {
        if (window.currentApiOffer) window.currentApiOffer.url = finalUrl;
        bindUnifiedActions(finalUrl, offer, index);
    });
}

function bindUnifiedActions(urlToOpen, offer, index) {
    const openBtn = document.getElementById('open-api-ad-btn');
    const cancelBtn = document.getElementById('cancel-api-ad-btn');
    if (!openBtn) return;

    const newOpenBtn = openBtn.cloneNode(true);
    openBtn.replaceWith(newOpenBtn);
    
    const newCancelBtn = cancelBtn.cloneNode(true);
    cancelBtn.replaceWith(newCancelBtn);

    newOpenBtn.addEventListener('click', function() {
        window.open(urlToOpen, '_blank');
        
        if (typeof startOfferTimer === "function") {
            startOfferTimer();
        } else if (typeof startOfferTask === "function") {
            startOfferTask(offer, index);
        } else if (typeof startApiOffer === "function") {
            startApiOffer();
        }

        document.getElementById('api-ad-modal').classList.remove('active');
    });

    newCancelBtn.addEventListener('click', function() {
        document.getElementById('api-ad-modal').classList.remove('active');
        window.currentApiOffer = null;
    });
}
