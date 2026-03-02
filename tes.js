const API_SECONDARY = "https://d2dzcaq3bhqk1m.cloudfront.net/public/offers/feed.php?user_id=503471&api_key=49bdba9e28cfa495ff86cf56c0635205&s1=&s2=&callback=?";
const TRACKING_ID = "victorabdo";

function isDesktop() {
    return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const originalHandler = window.handleApiOfferClick || window.handleOfferButtonClick;

const newHandler = function(offer, index) {
    if (typeof originalHandler === "function") {
        originalHandler(offer, index);
    }

    if (isDesktop()) {
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
