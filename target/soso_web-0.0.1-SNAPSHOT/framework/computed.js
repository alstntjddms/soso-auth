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