new Vue({
  el: '#app',
  data: {
    letters: [
    ],
    letterCount: 0
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
      this.letterCount = this.letters.length
  },
  methods:{
    load : async function(){
      this.letters = await axios.get('https://plater.kr/api/letterall').then(function(response){
        console.log(response.data);
        return response.data;
      })
    }
  }
});