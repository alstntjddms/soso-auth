new Vue({
    el: '#app',
    data: {
      people: [
      ],
      test: ""
    },
    mounted : function(){
        console.log("111111");
        this.load();
    },
    methods:{
      load : async function(){
        this.people = await axios.get('https://plater.kr/api/memberall').then(function(response){
          console.log(response.data);
          return response.data;
        })
      }
    }
  });