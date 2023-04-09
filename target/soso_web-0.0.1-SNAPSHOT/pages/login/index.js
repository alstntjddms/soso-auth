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
      if(this.authCode.length < 1){
        this.errMsg = "코드를 입력하세요.";
        return;
      }
      $('.loader-wrapper').show();
      accessYn = await this.sendCode(this.authCode);
      if(accessYn != ""){
        console.log("로그인성공!");
        login();
      }else{
        this.errMsg = "코드를 확인하세요.";
        accessYn = "";
      }
      // 로그인 로그
      await axios.get('https://plater.kr/api/request/log?/authLogin/'+this.authCode);
      // 입력값 초기화
      this.authCode = "";
      $('.loader-wrapper').hide();
    },
    // 입력한 코드 전송
    sendCode : async function(authCode){
      return await axios.post('https://plater.kr/api/auth', this.authCode, { headers: {
        'Content-Type': 'text/plain'
    }}).then(function(response){
        console.log(response.data);
        return response.data;
      }).catch(function(error) {
        console.error(error);
      });
    }
  }
});