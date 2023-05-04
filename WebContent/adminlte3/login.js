import { getSosoJwtToken } from "./framework/computed.js";

new Vue({
    el: '#app',
    data: {
        authCode: "",
        errMsg: ""
    },
    mounted : async function(){
        await this.checkJwtToken();        
    },
    methods:{
        login : async function(){
            console.log("login");
            if(this.authCode.length < 1){
              this.errMsg = "코드를 입력하세요.";
              return;
            }
            $('.loader-wrapper').show();
      
            if(await this.sendCode() == true){
                window.location.href = 'iframe.html';
            }else{
              this.errMsg = "코드를 확인하세요.";
              // 입력값 초기화
              this.authCode = "";
            }
            $('.loader-wrapper').hide();
            
            // 로그인 로그
            await axios.get('https://plater.kr/api/request/log?/authLogin/' + this.authCode);
      
          },
        sendCode : async function(){
            return await axios.post('https://plater.kr/api/auth', this.authCode, { 
            headers: {
                'Content-Type': 'text/plain'
            },
        }).then(function(response){
            console.log(response.data);
            return response.data;
            }).catch(function(error) {
            console.error(error);
            return false;
            });
        },
        checkJwtToken: async function(){
            if(getSosoJwtToken() != null){
                console.log("login");
                window.location.href = './iframe.html';
            }
        }
    }
  });