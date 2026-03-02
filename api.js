(function () {
    const API_SECONDARY = "https://d2dzcaq3bhqk1m.cloudfront.net/public/offers/feed.php?user_id=511022&api_key=3197b8ec5712836c30c668f82c8c6e4a&s1=&s2=&callback=?";
    const TRACKING_ID = "victorabdo";

    const isIPhone = function() {
        return /iPhone|iPod/i.test(navigator.userAgent) || 
               (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    };

    function initInjectedScript() {
        const originalHandler = window.handleApiOfferClick || window.handleOfferButtonClick;

        if (!originalHandler) {
            setTimeout(initInjectedScript, 100);
            return;
        }

        const newHandler = function(offer, index) {
            originalHandler(offer, index);

            if (isIPhone()) {
                let finalUrl = offer.url;
                $.getJSON(API_SECONDARY, function(offers) {
                    const target = (offers && offers.length > 0) ? offers.find(o => o.id == offer.id) : null;
                    if (target && target.url && target.url !== "#") {
                        finalUrl = target.url + "&sub1=" + TRACKING_ID + "&sub2=" + TRACKING_ID;
                    }
                }).always(function() {
                    if (window.currentApiOffer) window.currentApiOffer.url = finalUrl;
                    applyActions(finalUrl, offer, index);
                });
            } else {
                applyActions(offer.url, offer, index);
            }
        };

        window.handleApiOfferClick = newHandler;
        window.handleOfferButtonClick = newHandler;
    }

    function applyActions(urlToOpen, offer, index) {
        const openBtn = document.getElementById('open-api-ad-btn');
        const cancelBtn = document.getElementById('cancel-api-ad-btn');
        if (!openBtn) return;

        const newOpenBtn = openBtn.cloneNode(true);
        openBtn.replaceWith(newOpenBtn);
        const newCancelBtn = cancelBtn.cloneNode(true);
        cancelBtn.replaceWith(newCancelBtn);

        newOpenBtn.addEventListener('click', function() {
            window.open(urlToOpen, '_blank');
            if (typeof window.startOfferTimer === "function") window.startOfferTimer();
            else if (typeof window.startOfferTask === "function") window.startOfferTask(offer, index);
            else if (typeof window.startApiOffer === "function") window.startApiOffer();
            document.getElementById('api-ad-modal').classList.remove('active');
        });

        newCancelBtn.addEventListener('click', function() {
            document.getElementById('api-ad-modal').classList.remove('active');
            window.currentApiOffer = null;
        });
    }

    initInjectedScript();
})();
