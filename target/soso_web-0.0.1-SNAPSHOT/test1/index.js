new Vue({
  el: '#app',
  data: {
    members: [
    ],
    memberCount: 0,
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
      this.memberCount = this.members.length;
  },
  methods:{
    load : async function(){
      this.members = await axios.get('https://plater.kr/api/memberall').then(function(response){
        console.log(response.data);
        return response.data;
      })
    },
  }
});