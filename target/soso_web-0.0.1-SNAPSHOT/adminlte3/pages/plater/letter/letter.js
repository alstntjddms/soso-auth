new Vue({
    el: '#app',
    data: {
      letters: [],
      letterCount: 0
    },
    mounted : async function(){
        await this.load();
        //카운트
        this.letterCount = this.letters.length;
        $('#example1').DataTable({
          "responsive": true, "lengthChange": false, "autoWidth": false,
          "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
          data: this.letters,
          columns: [
            { data: 'letterId', title: 'letterId' },
            { data: 'userId', title: 'userId' },
            { data: 'letterContent', title: 'letterContent' },
            { data: 'letterFont', title: 'letterFont' },
            { data: 'letterFontColor', title: 'letterFontColor' },
            { data: 'letterPaper', title: 'letterPaper' },
            { data: 'letterWriter', title: 'letterWriter' },
            { data: 'letterIcon', title: 'letterIcon' },
            { data: 'letterFontSize', title: 'letterFontSize' },
            { data: 'letterTextAlign', title: 'letterTextAlign' },
            { data: 'letterWriteDate', title: 'letterWriteDate',
              render: function(data) { return data ? timestampToDate(data) : ''; } 
            },
            { data: 'letterReadYn', title: 'letterReadYn' },
            { data: 'letterDelYn', title: 'letterDelYn' },
          ],
          order:[[10, "desc"]],
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
        this.letters = await axios.get('https://plater.kr/api/letterall', {
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