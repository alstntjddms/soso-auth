import { getSosoJwtToken, getNameFromToken, getCookie } from "./framework/computed.js";

new Vue({
    el: '#app',
    data: {
      name: "", 
      minsu: false,
    },
    mounted : async function(){
      this.checkJwtToken();
      this.name = await this.setName();
      if(this.name == "전민수"){
        this.minsu = true;
      };
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
      }
      ,
      logout: function(){
        $.removeCookie('sosoJwtToken', { path: '/' });
        window.location.href = './login.html';
      }
    }
  });