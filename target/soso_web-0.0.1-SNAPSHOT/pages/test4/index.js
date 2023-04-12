new Vue({
  el: '#app',
  data: {
    members : [],
  },
  mounted : async function(){
    await this.load();
    $('#main1').DataTable({
      data: this.members,
      columns: [
        { data: 'userId', title: '<th>userId</th>' },
        { data: 'id', title: '<th>id</th>' },
        { data: 'userNickName', title: '<th>userNickName</th>' },
        { data: 'userOpenDate', title: '<th>userOpenDate</th>' },
        { data: 'userDate', title: '<th>userDate</th>' }
      ]
    });
  },
  methods:{
    load : async function(){
      $('.loader-wrapper').show();
      this.members = await axios.get('https://plater.kr/api/memberall?' + accessYn).then(function(response){
        console.log(response.data);
        return response.data;
      });
      $('.loader-wrapper').hide();
    },
  }
});