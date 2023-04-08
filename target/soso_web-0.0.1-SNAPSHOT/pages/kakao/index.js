new Vue({
    el: '#app',
    data: {
      kakaos: [
      ],
      kakaoCount: 0
    },
    mounted : async function(){
        await this.load();
        this.kakaoCount = this.kakaos.length
    },
    methods:{
      load : async function(){
        this.kakaos = await axios.get('https://plater.kr/api/kakaoall?'+ accessYn).then(function(response){
          console.log(response.data);
          return response.data;
        })
      }
    }
  });