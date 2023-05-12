import { timestampToDate, getSosoJwtToken, render } from "../../../framework/computed.js";

new Vue({
    el: '#app',
    data: {
      mode:"default",
      kakao:{
        id:"",
        kakaoId:"",
        kakaoAccessToken:"",
        kakaoRefreshToken:"",
        kakaoEmail:"",
        kakaoNickName:"",
        kakaoGender:"",
        kakaoBirthday:"",
        kakaoRegisterDate:"",
        kakaoLoginDate:"",
        kakaoMsgYn:""
      },
      kakaos: [],
    },
    mounted : async function(){
      // self에 vue객체 설정
      var self = this;
      
      await this.load();

      $('#example1').DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
        // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
        buttons: ["excel", "colvis"],
        data: this.kakaos,
        columns: [
          { data: 'id', title: 'id', render: function(data) { return render(data); }},
          { data: 'kakaoId', title: 'kakaoId', render: function(data) { return render(data); }},
          { data: 'kakaoAccessToken', title: 'kakaoAccessToken', render: function(data) { return render(data); }},
          { data: 'kakaoRefreshToken', title: 'kakaoRefreshToken', render: function(data) { return render(data); }},
          { data: 'kakaoEmail', title: 'kakaoEmail', render: function(data) { return render(data); }},
          { data: 'kakaoNickName', title: 'kakaoNickName', render: function(data) { return render(data); }},
          { data: 'kakaoGender', title: 'kakaoGender', render: function(data) { return render(data); }},
          { data: 'kakaoBirthday', title: 'kakaoBirthday', render: function(data) { return render(data); }},
          { data: 'kakaoRegisterDate', title: 'kakaoRegisterDate',
            render: function(data) { return data ? timestampToDate(data) : ''; } 
          },
          { data: 'kakaoLoginDate', title: 'kakaoLoginDate',
            render: function(data) { return data ? timestampToDate(data) : ''; } 
          },
          { data: 'kakaoMsgYn', title: 'kakaoMsgYn', render: function(data) { return render(data); }},
        ],
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
        },
      }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
      $(document).ready(function() {
        // 모달 토글 이벤트 리스너 등록
        $('#modal-xl').on('show.bs.modal', function(event) {
          // 모달이 열릴 때 실행될 함수
        });
        $('#example1 tbody').on('click', 'tr td:not(:first-child)', function() {
          // 데이터 가져오기
          var data = $('#example1').DataTable().row(this).data();
          self.kakao.id = data.id;
          self.kakao.kakaoId = data.kakaoId;
          self.kakao.kakaoAccessToken = data.kakaoAccessToken;
          self.kakao.kakaoRefreshToken = data.kakaoRefreshToken;
          self.kakao.kakaoEmail = data.kakaoEmail !== null ? data.kakaoEmail : "";
          self.kakao.kakaoNickName = data.kakaoNickName;
          self.kakao.kakaoGender = data.kakaoGender !== null ? data.kakaoGender : "";
          self.kakao.kakaoBirthday = data.kakaoBirthday !== null ? data.kakaoBirthday : "";
          self.kakao.kakaoRegisterDate = data.kakaoRegisterDate;
          self.kakao.kakaoLoginDate = data.kakaoLoginDate;
          self.kakao.kakaoMsgYn = data.kakaoMsgYn;

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
        this.kakaos = await axios.get('https://plater.kr/api/kakaoall', {
          headers: {
            'sosoJwtToken': "Bearer " + getSosoJwtToken()
          }
        }).then(function(response){
          console.log(response.data);
          return response.data;
        }).catch(function(error) {
          console.log(error);
          window.parent.location.reload()
        });
      },
      clickUpdate : async function(){
        console.log("clickUpdate");
        this.mode = "update";
      },      
    }
  });