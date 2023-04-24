new Vue({
  el: '#app',
  data: {
    members : [],
    memberCount : 0,
  },
  mounted : async function(){
    // 메뉴 초기화
    $('#expand-menu').prop('checked', false);
    // 데이터 로드
    await this.load();
    // 카운트
    this.memberCount = this.members.length;
    // 테이블 생성
    $('#main1').DataTable({
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
    });
  },
  methods:{
    load : async function(){
      $('.loader-wrapper').show();
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
      $('.loader-wrapper').hide();
    },
    
  }
});