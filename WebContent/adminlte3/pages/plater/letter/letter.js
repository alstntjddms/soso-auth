new Vue({
    el: '#app',
    data: {
      mode:"default",
      letter:{
        letterId:"",
        userId:"",
        letterContent:"",
        letterFont:"",
        letterFontColor:"",
        letterPaper:"",
        letterWriter:"",
        letterIcon:"",
        letterFontSize:"",
        letterTextAlign:"",
        letterWriteDate:""
      },
      letters: [],
    },
    mounted : async function(){
      // self에 vue객체 설정
      var self = this;
      
      await this.load();

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
      $(document).ready(function() {
        // 모달 토글 이벤트 리스너 등록
        $('#modal-xl').on('show.bs.modal', function(event) {
          // 모달이 열릴 때 실행될 함수
        });
        $('#example1 tbody').on('click', 'tr td:not(:first-child)', function() {
          // 데이터 가져오기
          var data = $('#example1').DataTable().row(this).data();
          self.letter.letterId = data.letterId;
          self.letter.userId = data.userId;
          self.letter.letterContent = data.letterContent;
          self.letter.letterFont = data.letterFont;
          self.letter.letterFontColor = data.letterFontColor;
          self.letter.letterPaper = data.letterPaper;
          self.letter.letterWriter = data.letterWriter;
          self.letter.letterIcon = data.letterIcon;
          self.letter.letterFontSize = data.letterFontSize;
          self.letter.letterTextAlign = data.letterTextAlign;
          self.letter.letterWriteDate = data.letterWriteDate;

          // 모달 열기
          $('#modal-xl').modal('toggle');
        });
        // 모달 닫힘 이벤트 처리
        $('#modal-xl').on('hidden.bs.modal', function (e) {
          self.mode = "default";
        });
      });
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
          window.parent.location.reload()
        });
      },
      clickUpdate : async function(){
        console.log("clickUpdate");
        this.mode = "update";
      },      
    }
  });