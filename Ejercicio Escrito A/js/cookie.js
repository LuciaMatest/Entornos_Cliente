document.cookie='expires=' + 60*60*24*30;
let cookie = document.cookie;
document.getElementById("mostrar").innerHTML = `La cookie caduca en ${cookie} dias`;

let cookies = navigator.cookieEnabled;
document.getElementById("mostrar2").innerHTML =  `Cookies habilidatas: ${cookies}`;

// function GetCookie (name) {
//     var arg = name + "=";
//     var alen = arg.length;
//     var clen = document.cookie.length;
//     var i = 0;
//     while (i < clen) {
//     var j = i + alen;
//     if (document.cookie.substring(i, j) == arg)
//     return getCookieVal (j);
//     i = document.cookie.indexOf(" ", i) + 1;
//     if (i == 0) break;
//     }
//     return null;
// }
    
// function SetCookie (name, value) {
//     var argv = SetCookie.arguments;
//     var argc = SetCookie.arguments.length;
//     var expires = (argc > 2) ? argv[2] : null;
//     var path = (argc > 3) ? argv[3] : null;
//     var domain = (argc > 4) ? argv[4] : null;
//     var secure = (argc > 5) ? argv[5] : false;
//     document.cookie = name + "=" + escape (value) +
//     ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
//     ((path == null) ? "" : ("; path=" + path)) +
//     ((domain == null) ? "" : ("; domain=" + domain)) +
//     ((secure == true) ? "; secure" : "");
// }
    
// function DeleteCookie (name) {
//     var exp = new Date();
//     exp.setTime (exp.getTime() - 1);
//     var cval = GetCookie (name);
//     document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
// }
// function amt(){
//     var count = GetCookie('count')
//     if(count == null) {
//         SetCookie('count','1')
//         return 1
//     } else {
//         var newcount = parseInt(count) + 1;
//         DeleteCookie('count')
//         SetCookie('count',newcount,exp)
//         return count
//     }
// }
// alert(`Has visitado nuestra página ${amt()} veces`);