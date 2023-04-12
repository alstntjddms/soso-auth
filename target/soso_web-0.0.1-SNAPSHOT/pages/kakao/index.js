new Vue({
  el: '#app',
  data: {
    kakaos: [],
    kakaoCount: 0
  },
  mounted : async function(){
    await this.load();
    this.kakaoCount = this.kakaos.length;
    $('#main1').DataTable({
      data: this.kakaos,
      columns: [
        { data: 'id', title: 'id' },
        { data: 'kakaoId', title: 'kakaoId' },
        { data: 'kakaoAccessToken', title: 'kakaoAccessToken' },
        { data: 'kakaoRefreshToken', title: 'kakaoRefreshToken' },
        { data: 'kakaoEmail', title: 'kakaoEmail' },
        { data: 'kakaoNickName', title: 'kakaoNickName' },
        { data: 'kakaoGender', title: 'kakaoGender' },
        { data: 'kakaoBirthday', title: 'kakaoBirthday' },
        { data: 'kakaoRegisterDate', title: 'kakaoRegisterDate',
          render: function(data) { return data ? timestampToDate(data) : ''; } 
        },
        { data: 'kakaoLoginDate', title: 'kakaoLoginDate',
          render: function(data) { return data ? timestampToDate(data) : ''; } 
        },
        { data: 'kakaoMsgYn', title: 'kakaoMsgYn' }
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
      }
    });
  },
  methods:{
    load : async function(){
      $('.loader-wrapper').show();
      this.kakaos = await axios.get('https://plater.kr/api/kakaoall?'+ accessYn).then(function(response){
        console.log(response.data);
        return response.data;
      });
      $('.loader-wrapper').hide();
    }
  }
});