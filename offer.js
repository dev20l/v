    // Load API Offers - USING REAL API WITH THUMBNAILS
    function loadApiOffers() {
        const apiOffersContainer = document.getElementById('api-offers-container');
        apiOffersContainer.innerHTML = `
            <div class="loading will-change">
                <div class="spinner"></div>
                <p>Loading amazing offers for you...</p>
            </div>
        `;
        
        const apiUrl = "https://d1y3y09sav47f5.cloudfront.net/public/offers/feed.php?user_id=511022&api_key=3197b8ec5712836c30c668f82c8c6e4a&s1=&s2=&callback=?";
        
        $.getJSON(apiUrl, function(offers) {
            if (offers && offers.length > 0) {
                apiOffersData = processApiOffers(offers.slice(0, 20));
                renderApiOffers();
            } else {
                showToast("No offers available at the moment. Please try again later.", "info");
                apiOffersContainer.innerHTML = `
                    <div class="offer-card will-change" style="text-align: center; padding: 40px 20px;">
                        <i class="fas fa-exclamation-circle" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 16px;"></i>
                        <p style="color: var(--text-secondary);">No offers available at the moment. Please check back later!</p>
                    </div>
                `;
            }
        }).fail(function() {
            showToast("Failed to load offers. Please try again.", "error");
            apiOffersContainer.innerHTML = `
                <div class="offer-card will-change" style="text-align: center; padding: 40px 20px;">
                    <i class="fas fa-exclamation-circle" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 16px;"></i>
                    <p style="color: var(--text-secondary);">Failed to load offers. Please check your connection and try again.</p>
                </div>
            `;
        });
    }

    function processApiOffers(offers) {
        // Create array of Robux values from high to low (120 to 50)
        const robuxValues = [240, 230, 200, 120, 80, 70, 65, 60, 55, 50];
        
        return offers.map((offer, index) => {
            const robux = robuxValues[index] || 50;
            
            // Clean the anchor text
            const cleanAnchor = cleanAnchorText(offer.anchor || offer.name || `Offer ${index + 1}`);
            
            // Get conversion description
            const conversion = offer.conversion || "Complete the task to earn Robux";
            
            // Get thumbnail URL from API
            const thumbnailUrl = getThumbnailUrl(offer);
            
            return {
                id: offer.id,
                anchor: cleanAnchor,
                conversion: conversion,
                url: offer.url || "#",
                robux: robux,
                thumbnail: thumbnailUrl,
                pendingTimer: pendingTimerOffers[offer.id] || null
            };
        });
    }

    function getThumbnailUrl(offer) {
        // Try to get thumbnail from various API fields
        if (offer.network_icon) {
            return offer.network_icon;
        } else if (offer.thumbnail) {
            return offer.thumbnail;
        } else if (offer.icon) {
            return offer.icon;
        } else if (offer.image_url) {
            return offer.image_url;
        } else {
            // Default thumbnail based on offer type
            const offerTypes = [
                "",
                ""
            ];
            return offerTypes[Math.floor(Math.random() * offerTypes.length)];
        }
    }

    function cleanAnchorText(text) {
        return text.replace(/&nbsp;/g, ' ')
                   .replace(/<[^>]*>/g, '')
                   .trim()
                   .substring(0, 100);
    }

    function renderApiOffers() {
        const apiOffersContainer = document.getElementById('api-offers-container');
        apiOffersContainer.innerHTML = '';
        
        if (apiOffersData.length === 0) {
            apiOffersContainer.innerHTML = `
                <div class="offer-card will-change" style="text-align: center; padding: 40px 20px;">
                    <i class="fas fa-exclamation-circle" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 16px;"></i>
                    <p style="color: var(--text-secondary);">No offers available at the moment. Check back later!</p>
                </div>
            `;
            return;
        }
        
        apiOffersData.forEach((offer, index) => {
            const isCompleted = userData.completedApiOffers.includes(offer.id);
            const hasPendingTimer = offer.pendingTimer && offer.pendingTimer > Date.now();
            
            const offerCard = document.createElement('div');
            offerCard.className = `offer-card will-change ${index < 3 ? 'highlight' : ''}`;
            offerCard.innerHTML = `
                <div class="offer-header">
                    <div class="offer-image">
                        <img src="${offer.thumbnail}" alt="${offer.anchor}" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2210%22 ry=%2210%22 fill=%22%236A11CB%22/><text x=%2250%22 y=%2250%22 font-family=%22Arial%22 font-size=%2230%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22>Offer</text></svg>';">
                    </div>
                    <div class="offer-content">
                        <div class="offer-title">${offer.anchor}</div>
                        <div class="offer-info">
                            <div class="offer-points">
                <img src="https://cdn.jsdelivr.net/gh/lib-devtools/img/HBaO44H.png" alt="Robux" style="width:20px; height:20px;"> ${offer.robux}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offer-description">${offer.conversion}</div>
                <button class="btn-offer ${isCompleted || hasPendingTimer ? 'btn-disabled' : ''} will-change" 
                        data-offer-id="${offer.id}"
                        ${isCompleted || hasPendingTimer ? 'disabled' : ''}>
                    <i class="fas fa-${isCompleted ? 'check' : hasPendingTimer ? 'clock' : 'play'}"></i>
                    ${isCompleted ? 'Completed' : hasPendingTimer ? 'Processing...' : 'Start Task'}
                </button>
            `;
            
            if (!isCompleted && !hasPendingTimer) {
                offerCard.querySelector('.btn-offer').addEventListener('click', () => handleApiOfferClick(offer));
            }
            apiOffersContainer.appendChild(offerCard);
        });
        
        updateApiOffersStatus();
    }

    function updateApiOffersStatus() {
        const completedCount = userData.completedApiOffers.length;
        const totalOffers = apiOffersData.length;
        const progress = totalOffers > 0 ? (completedCount / totalOffers) * 100 : 0;
        
        document.getElementById('completed-offers-count').textContent = completedCount;
        document.getElementById('api-total-earnings').textContent = userData.apiOffersEarnings;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        
        const offerStatusEl = document.getElementById('offer-status');
        offerStatusEl.style.display = completedCount > 0 ? 'block' : 'none';
    }

    function handleApiOfferClick(offer) {
        currentApiOffer = offer;
        document.getElementById('api-ad-description').textContent = 
            `Complete this task to earn ${offer.robux} Robux: ${offer.conversion}`;
        document.getElementById('api-ad-modal').classList.add('active');
    }

    function startOfferTimer() {
        if (!currentApiOffer) return;
        
        // Increment attempted offers count
        userData.totalOffersAttempted = (userData.totalOffersAttempted || 0) + 1;
        
        // Set pending timer
        pendingTimerOffers[currentApiOffer.id] = Date.now() + OFFER_TIMER_DURATION;
        
        // Open the offer URL
        if (currentApiOffer.url) {
            window.open(currentApiOffer.url, '_blank');
        }
        
        // Update the offers list to show pending status
        renderApiOffers();
        
        // Close modal
        document.getElementById('api-ad-modal').classList.remove('active');
        
        // Show success message
        showToast(`Offer started! Robux will be added to your account in 3 minutes.`, 'success', 10000);
        
        // Save user data
        saveUserToLocalStorage();
        
        setTimeout(checkPendingTimers, OFFER_TIMER_DURATION + 1000);
        
        currentApiOffer = null;
    }
