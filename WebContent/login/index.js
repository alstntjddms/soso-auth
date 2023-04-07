var b = new Vue({
  el: '#app',
  data: {
    authCode: "",
    errMsg: ""
  },
  mounted : async function(){
      console.log("로그인페이지");
  },
  methods:{
    login : async function(){
      console.log(this.authCode);
      // this.members = await axios.get('https://plater.kr/api/memberall').then(function(response){
      //   console.log(response.data);
      //   return response.data;
      // });
      // 로그인처리 로직
      if(this.authCode == 1111){
        login();
      }else{
        this.errMsg = "잘못된 코드";
      }
    },
  }
});