new Vue({
    el: '#app',
    data: {
      name: ""
    },
    mounted : async function(){
      this.checkJwtToken();
      this.name = await this.setName();
    },
    methods:{
      checkJwtToken: async function(){
        if(getSosoJwtToken() == null){
          window.location.href = 'login.html';
        }
      },
      setName: async function(){
        return getName(getCookie("sosoJwtToken")).aud;
      }
    }
  });