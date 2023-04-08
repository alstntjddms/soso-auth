new Vue({
  el: '#app',
  data: {
    letters: [
    ],
    letterCount: 0
  },
  mounted : async function(){
      await this.load();
      this.letterCount = this.letters.length
  },
  methods:{
    load : async function(){
      this.letters = await axios.get('https://plater.kr/api/letterall?' + accessYn).then(function(response){
        console.log(response.data);
        return response.data;
      })
    }
  }
});