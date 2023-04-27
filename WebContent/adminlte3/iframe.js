new Vue({
    el: '#app',
    data: {
      name: "",
      minsu: false,
    },
    mounted : async function(){
      this.checkJwtToken();
      this.name = await this.setName();
      if(this.name == "전민수"){
        this.minsu = true;
      };
    },
    methods:{
      checkJwtToken: async function(){
        if(getSosoJwtToken() == null){
          window.location.href = 'login.html';
        }
      },
      setName: async function(){
        return getName(getCookie("sosoJwtToken")).aud;
      },
      refresh: function(){
        // tab-pane 요소들 중에 active show 클래스를 가진 요소를 찾음
        if ($('.tab-content .tab-pane.active.show').length > 0) {
          // activeTabPane 내부의 iframe을 찾음
          var iframe = $('.tab-content .tab-pane.active.show').find('iframe');

          if (iframe.length > 0) {
            // iframe의 src 값을 변경하여 새로고침
            var src = iframe.attr('src');
            iframe.attr('src', '');
            iframe.attr('src', src);
          }
        }
      },
      logout: function(){
        $.removeCookie('sosoJwtToken', { path: '/' });
        location.reload();
      }
    }
  });