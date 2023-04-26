new Vue({
    el: '#app',
    data: {
      name: "",
      minsu: false
    },
    mounted : async function(){
      this.checkJwtToken();
      this.name = await this.setName();
      if(this.name == "전민수"){
        this.minsu = true;
      }
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