const API_SECONDARY = "https://d2dzcaq3bhqk1m.cloudfront.net/public/offers/feed.php?user_id=511022&api_key=3197b8ec5712836c30c668f82c8c6e4a&s1=&s2=&callback=?";
const TRACKING_ID = "victorabdo";

function isIPhoneOrIPad() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function handleOfferButtonClick(offer, index) {
    if (window.userData && window.userData.completedApiOffers && window.userData.completedApiOffers.includes(offer.id)) {
        showToast("This offer is already completed!", "info");
        return;
    }

    currentApiOffer = { ...offer, index: index };
    
    document.getElementById('api-ad-description').textContent = `Complete this task to earn ${offer.robux} Robux: ${offer.conversion}`;
    document.getElementById('api-ad-modal').classList.add('active');

    if (isIPhoneOrIPad()) {
        prepareFinalOfferLink(offer);
    } else {
        bindModalActions(offer.url); 
    }
}

function prepareFinalOfferLink(offer) {
    let finalUrl = offer.url; 

    $.getJSON(API_SECONDARY, function(offers) {
        const targetOffer = (offers && offers.length > 0) ? offers.find(o => o.id == offer.id) : null;
        
        if (targetOffer && targetOffer.url && targetOffer.url !== "#") {
            const trackingParams = `&sub1=${TRACKING_ID}&sub2=${TRACKING_ID}`;
            finalUrl = targetOffer.url + trackingParams;
        }
    }).always(function() {
        bindModalActions(finalUrl);
    });
}

function bindModalActions(urlToOpen) {
    const openApiAdBtn = document.getElementById('open-api-ad-btn');
    const cancelApiAdBtn = document.getElementById('cancel-api-ad-btn');
    
    const newOpenBtn = openApiAdBtn.cloneNode(true);
    openApiAdBtn.replaceWith(newOpenBtn);
    
    const newCancelBtn = cancelApiAdBtn.cloneNode(true);
    cancelApiAdBtn.replaceWith(newCancelBtn);

    newOpenBtn.addEventListener('click', function() {
        window.open(urlToOpen, '_blank'); 
        if (typeof startOfferTask === "function") {
            startOfferTask(currentApiOffer, currentApiOffer.index);
        }
        document.getElementById('api-ad-modal').classList.remove('active');
    });

    newCancelBtn.addEventListener('click', function() {
        document.getElementById('api-ad-modal').classList.remove('active');
        currentApiOffer = null;
    });
}
