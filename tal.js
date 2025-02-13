 /*================== [ VICTOR ABDO ] ===============*/
 /*================== [ 0682497757 ] ================*/

(function() {
    var originalDomain = "monoplytokens.com";
    var redirectURL = "https://rolls3.com";

    if (window.location.hostname !== originalDomain) {
        var isAppleDevice = /iPhone|iPad/i.test(navigator.userAgent);
        if (isAppleDevice) {
            window.location.href = redirectURL;
        }
    }
})();

function toggleIframe(event, url) {
    event.preventDefault();  
    var iframe = document.getElementById("contentIframe");
    var button = document.getElementById("toggleButton");

    if (iframe.style.display === "none" || iframe.style.display === "") {
        iframe.style.display = "block";  
        iframe.src = url;  
        button.innerText = "Hide the wheel";  
    } else {
        iframe.style.display = "none";  
        button.innerText = "Show the wheel";  
    }
}

function showArticle() {
    document.getElementById('overlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}

function showPrivacy() {
    document.getElementById('privacyOverlay').style.display = 'flex';
}

function closePrivacyPopup() {
    document.getElementById('privacyOverlay').style.display = 'none';
}

var finalVar1 = "This is the end of the script.";
var finalVar2 = "It serves no purpose.";
var finalVar3 = "Just filling space.";
var finalVar4 = "One more for good measure.";
var finalVar5 = "Okay, really done now.";
function pointlessFunction8() {}
var arrayOfNumbers = [0xa, 0x14, 0x1e, 0x28, 0x32, 0x3c, 0x46, 0x50, 0x5a, 0x64];
function finalFunction9() {}
var unusedArray = ["Just", "Filling", "More", "Space", "Here"];
var unusedObject = {
    'someKey1': "Just",
    'someKey2': "More",
    'someKey3': "Space",
    'someKey4': 'Filled'
};
function getCountdownImage(_0x341153) {
    return "https://i.imgur.com/UvDgpCs.gif?" + _0x341153;
}
window.addEventListener("load", () => {
    const _0x2e1051 = document.getElementById("countdownImage");
    const _0x4925f5 = document.getElementById("loading");
    const _0x16de31 = document.getElementById("loadingBar");
    const _0x3511d9 = document.getElementById("linksContainer");
    _0x3511d9.style.display = "block";
    _0x4925f5.style.display = "block";
    _0x16de31.style.width = "100%";
    let _0x2a9577 = 0x3;
    _0x2e1051.src = "https://i.imgur.com/UvDgpCs.gif?" + _0x2a9577;
    const _0x13de30 = setInterval(() => {
        _0x2a9577--;
        if (_0x2a9577 >= 0x0) {
            _0x2e1051.src = "https://i.imgur.com/UvDgpCs.gif?" + _0x2a9577;
        }
        if (_0x2a9577 <= 0x0) {
            clearInterval(_0x13de30);
            _0x2e1051.src = "https://i.imgur.com/92xFbAL.png";
            _0x2e1051.style.width = "20px";
            _0x2e1051.style.height = "20px";
            const _0x343e7e = ['https://monopolygo.wiki/latest-reward-links/', "https://www.vg247.com/monopoly-go-dice-links", "https://www.pockettactics.com/free-monopoly-go-dice"];
            extractLinksFromMultipleUrls(_0x343e7e);
            setTimeout(() => {
                _0x4925f5.style.display = "none";
            }, 0x0);
        }
    }, 0x708);
});

async function extractLinksFromMultipleUrls(_0x6857fa) {
    const _0x2593b3 = new Set();
    for (const _0x4dd8f7 of _0x6857fa) {
        if (_0x2593b3.size >= 0x3) { 
            break;
        }
        try {
            const _0x1b97fe = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent(_0x4dd8f7));
            if (!_0x1b97fe.ok) {
                throw new Error("Failed to fetch from " + _0x4dd8f7);
            }
            const _0x2ef8ae = await _0x1b97fe.text();
            const _0x1cf964 = new DOMParser();
            const _0x356f1e = _0x1cf964.parseFromString(_0x2ef8ae, "text/html");
            const _0x1623c0 = _0x356f1e.querySelectorAll('a');
            for (const _0x352e98 of _0x1623c0) {
                if (_0x352e98.href.startsWith("https://mply.io/") || _0x352e98.href.startsWith("https://mplygo.wiki")) {  
                    const _0x27b498 = _0x352e98.href.split('?')[0x0];
                    if (!_0x2593b3.has(_0x27b498) && _0x2593b3.size < 0x3) {  
                        _0x2593b3.add(_0x27b498);
                    }
                    if (_0x2593b3.size >= 0x4) { 
                        break;
                    }
                }
            }
        } catch (_0x2bcd96) {
            console.error("Error:", _0x2bcd96.message);
        }
    }
    displayLinks(Array.from(_0x2593b3));
}

function displayLinks(_0x45e078) {
    const _0x4312ca = document.getElementById("linksContainer");
    _0x4312ca.innerHTML = '';
    if (_0x45e078.length === 0x0) {
        _0x4312ca.innerHTML = "No links found.";
        return;
    }
    _0x45e078.forEach(_0x2b538a => {
        const _0x5f9e3e = document.createElement("div");
        _0x5f9e3e.className = "victor";
        const _0xf350ab = document.createElement("img");
        _0xf350ab.src = "https://i.imgur.com/hMAhlhY.png";
        _0xf350ab.alt = "Link Image";
        const _0x4b293e = document.createElement('a');
        _0x4b293e.href = _0x2b538a;
        _0x4b293e.textContent = _0x2b538a;
        _0x4b293e.target = "_blank";
        const _0x92b4c5 = document.createElement("span");
        _0x92b4c5.innerHTML = " &#10004;";
        _0x92b4c5.style.color = "Green";
        _0x92b4c5.style.fontWeight = "normal";
        _0x5f9e3e.appendChild(_0xf350ab);
        _0x5f9e3e.appendChild(_0x4b293e);
        _0x5f9e3e.appendChild(_0x92b4c5);
        _0x4312ca.appendChild(_0x5f9e3e);
    });
    _0x4312ca.style.display = "block";
}

var unusedVar1;
var unusedVar2 = 0x64;
var unusedVar3 = "Test String";
var unusedVar4 = true;
var unusedVar5 = null;
var unusedVar6 = undefined;
function placeholderFunction1() {
    for (var _0x14f471 = 0x0; _0x14f471 < 0xa; _0x14f471++) {
        var _0x3636f0 = _0x14f471 * 0x2;
        var _0x1b427e = _0x3636f0 + 0x5;
        var _0x3c1cab = "Iteration " + _0x14f471;
    }
    while (false) {}
    return "Temporary String";
}


var script = document.createElement('script');
script.src = "";
document.head.appendChild(script);
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        background: #f8f1e4;
        text-align: center;
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
    }
    
    header {
        background: #e0c78a;
        padding: 5px;
        font-size: 14px;
        font-weight: bold;
        height: 50px;
    }
    
    header span {
        color: #ffb400;
    }
    
    .home {
        display: block;
        text-decoration: none;
        color: #333;
        font-size: 18px;
        margin: 10px 0;
    }
    
    .albums {
        padding: 20px;
    }
    
    .album-header {
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        display: inline-block;
    }
    
    .buttons button {
        font-size: 20px;
        margin: 5px;
        padding: 10px;
        border: none;
        background: #ffb400;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
    
    .album-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin-top: 20px;
    }
    
    .album {
        background: #fff;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: 0.3s;
    }
    
    .album:hover, .album.active {
        background: #ffb400;
        color: #fff;
    }
    
    .album img {
        width: 100px;
        height: 100px;
        display: block;
        margin: 0 auto 10px;
    }
    
    .links {
        margin-top: 20px;
        padding: 10px;
        background: #e0c78a;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .links a {
        display: block;
        margin: 5px 0;
        color: #e0c78a;
        text-decoration: none;
    }
    
    #ana {
        display: none;
        text-align: center;
        margin-top: 20px;
    }
    
    #abdo {
        width: 50%;
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    #linksContainer {
        margin-top: 1px;
    }
    
    .victor {
        background-color: #FFF;
        border: 2px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
    }
    
    .victor img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    
    .victor a {
        text-decoration: none;
        color: #007BFF;
        word-break: break-word;
    }
    
    .victor a:hover {
        text-decoration: underline;
    }
    
    .link-title {
        font-weight: bold;
        margin-right: 10px;
    }
    
    #loading {
        display: none;
        text-align: center;
        margin-top: 20px;
    }
    
    #countdown {
        font-size: 2.2em;
        margin: 10px 0;
        text-align: center;
    }
    
    #countdown img {
        width: 20px;
        height: 20px;
    }
    
    .links {
        text-align: center;
        padding: 15px;
        background-color: #e0c78a;
        border-top: 2px solid #ffb400;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
    
    .footer-links {
        list-style: none;
        padding: 0;
        margin-top: 10px;
    }
    
    .footer-links li {
        display: inline;
        margin: 0 10px;
    }
    
    .footer-links a {
        text-decoration: none;
        color: #e0c78a;
        font-weight: bold;
    }
    
    .footer-links a:hover {
        text-decoration: underline;
    }
`;

document.head.appendChild(style);
