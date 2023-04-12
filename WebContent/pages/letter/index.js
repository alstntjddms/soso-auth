new Vue({
  el: '#app',
  data: {
    letters: [],
    letterCount: 0
  },
  mounted : async function(){
    // 메뉴 초기화
    $('#expand-menu').prop('checked', false);
    // 데이터 로드
    await this.load();
    // 카운트
    this.letterCount = this.letters.length;
    // 테이블 생성
    $('#main1').DataTable({
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
      order:[[11, "desc"]],
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
      this.letters = await axios.get('https://plater.kr/api/letterall?' + accessYn).then(function(response){
        console.log(response.data);
        return response.data;
      });
      $('.loader-wrapper').hide();
    }
  }
});