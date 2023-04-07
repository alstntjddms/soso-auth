var b = new Vue({
  el: '#app',
  data: {
    authCode: "",
    errMsg: ""
  },
  mounted : async function(){
  },
  methods:{
    login : async function(){
      // 입력값 초기화
      this.authCode = "";

      // 로그인처리 로직
      await this.sendCode(this.authCode)
      if(window.accessYn == true){
        console.log("로그인성공!");
        login();
      }else{
        this.errMsg = "잘못된 코드";
        return;
      }
    },
    sendCode : async function(authCode){
      result = await axios.get('https://plater.kr/api/memberall').then(function(response){
        console.log(response.data);
        return response.data;
      });
      if(result != null){
        window.accessYn = true;
      }else{
        window.accessYn = false;
      }
    }
  }
});