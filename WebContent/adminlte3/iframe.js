import { getSosoJwtToken, getExpirationFromToken, getNameFromToken, getCookie } from "./framework/computed.js";

new Vue({
  el: '#app',
  data: {
    name: "", 
    minsu: false,
    timeDisplay: null
  },
  mounted : async function(){
    this.checkJwtToken();
    this.name = await this.setName();
    if(this.name == "전민수"){
      this.minsu = true;
    }
    const jwt = getCookie("sosoJwtToken");
    if (jwt) {
      setInterval(() => {
        if(getCookie("sosoJwtToken") == ""){
          window.location.href = './login.html';
        }
        const expiration = getExpirationFromToken(jwt);
        const remaining = this.getTimeRemaining(expiration);
        this.timeDisplay = remaining.hours === "00" 
        ? `${remaining.minutes}:${remaining.seconds}`
        : `${remaining.hours}:${remaining.minutes}:${remaining.seconds}`;
      }, 1000);
    }else{
      window.location.href = './login.html';
    }

  },
  methods:{
    checkJwtToken: async function(){
      if(getSosoJwtToken() == null){
        console.log("checkJwtToken");
        window.location.href = './login.html';
      }
    },
    setName: async function(){
      return getNameFromToken(getCookie("sosoJwtToken")).aud;
    },
    refresh: function(){
      const iframe = $('.tab-content .tab-pane.active.show iframe');
      if (iframe.length) iframe.attr('src', iframe.attr('src'));
    },
    logout: function(){
      $.removeCookie('sosoJwtToken', { path: '/' });
      window.location.href = './login.html';
    },
    getTimeRemaining: function(expiration) {
      const total = new Date(expiration).getTime() - new Date().getTime();
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      return {
        total,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds
      };
    }
  }
});