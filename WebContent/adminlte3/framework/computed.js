function timestampToDate(timestamp) {
  const d = new Date(timestamp);
  const koreanTime = new Date(d.getTime() + (9 * 60 * 60 * 1000)); // 한국 표준시(UTC+9)로 시간 조정
  return koreanTime.toISOString().slice(0, 19).replace('T', ' ');
}

function getSosoJwtToken(){
  // 쿠키에서 sosoJwtToken 값을 가져옴
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('sosoJwtToken=')) {
      return cookie.substring('sosoJwtToken='.length, cookie.length);
    }
  }
  return null;
}

function getCookie(name) {
  var nameOfCookie = name + "=";
  var x = 0;
  while (x <= document.cookie.length) {
       var y = (x + nameOfCookie.length);
       if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                 endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
       }
       x = document.cookie.indexOf(" ", x) + 1;
       if (x == 0)
            break;
  }
  return "";
}

function getName(token){
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
