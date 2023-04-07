var b = new Vue({
  el: '#app',
  data: {
    authCode: "",
    errMsg: ""
  },
  mounted : async function(){
  },
  methods:{
    // 로그인 처리
    login : async function(){
      const result = await this.sendCode(this.authCode);
      if(result != null){
        console.log("로그인성공!");
        accessYn = true;
        login();
      }else{
        this.errMsg = "잘못된 코드";
        accessYn = false;
      }
      // 입력값 초기화
      this.authCode = "";
    },
    // 입력한 코드 전송
    sendCode : async function(authCode){
      return await axios.get('https://plater.kr/api/memberall').then(function(response){
        console.log(response.data);
        return response.data;
      });
    }
  }
});