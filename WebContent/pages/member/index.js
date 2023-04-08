var b = new Vue({
  el: '#app',
  data: {
    members: [
    ],
    memberCount: 0,
  },
  mounted : async function(){
      await this.load();
      this.memberCount = this.members.length;
  },
  methods:{
    load : async function(){
      this.members = await axios.get('https://plater.kr/api/memberall?' + accessYn).then(function(response){
        console.log(response.data);
        return response.data;
      })
    },
  }
});