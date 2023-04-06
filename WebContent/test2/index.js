new Vue({
    el: '#app',
    data: {
      kakaos: [
      ],
      kakaoCount: 0
    },  
    computed: {
      formatTimestamp() {
        return function(timestamp) {
          const d = new Date(timestamp);
          return d.toISOString().slice(0, 19).replace('T', ' ');
        }
      }
    },
    mounted : async function(){
        await this.load();
        this.kakaoCount = this.kakaos.length
    },
    methods:{
      load : async function(){
        this.kakaos = await axios.get('https://plater.kr/api/kakaoall').then(function(response){
          console.log(response.data);
          return response.data;
        })
      }
    }
  });