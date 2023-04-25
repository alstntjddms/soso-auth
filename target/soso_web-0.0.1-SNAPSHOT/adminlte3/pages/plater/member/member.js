new Vue({
    el: '#app',
    data: {
        members: [],
        memberCount: 0,
    },
    mounted : async function(){
        await this.load();

        $('#example1').DataTable({
          "responsive": true, "lengthChange": false, "autoWidth": false,
          "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
          data: this.members,
          columns: [
            { data: 'userId', title: 'userId' },
            { data: 'id', title: 'id' },
            { data: 'userNickName', title: 'userNickName' },
            { data: 'userOpenDate', title: 'userOpenDate',
              render: function(data) { return data ? timestampToDate(data) : ''; } 
            },
            { data: 'userDate', title: 'userDate',
              render: function(data) { return data ? timestampToDate(data) : ''; } 
            }],
          order:[[0, "desc"]],
          info: false,
          language: {
            paginate: {
              first: '처음',
              last: '마지막',
              next: '다음',
              previous: '이전'
            },
            info: '총 _TOTAL_개 중 _START_부터 _END_까지 표시중',
            lengthMenu: '_MENU_개씩 보기',
            search: '검색',
            zeroRecords: '검색 결과가 없습니다.'
          }
        }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    },
    methods:{
      load: async function(){
        this.members = await axios.get('https://plater.kr/api/memberall', {
          headers: {
            'sosoJwtToken': "Bearer " + getSosoJwtToken()
          }
        }).then(function(response){
          console.log(response.data);
          return response.data;
        }).catch(function(error) {
          location.reload();
        });
      },      
    }
  });