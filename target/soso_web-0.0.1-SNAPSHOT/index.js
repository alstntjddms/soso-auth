// 로그인 체크 변수
var accessYn = "";

// 기본페이지 로딩
$("#main").load("./pages/login/index.html");

// 로딩창 숨김 처리
$('.loader-wrapper').hide();

// 로그인 처리
function login(){
    if (accessYn == "") return;
    $('body').css('background-image', "none");
    $("#sidebar").load("./sidebar/sidebar.html");
    $("#main").load("./pages/member/index.html");
};

// 메뉴 클릭시 메인페이지 이벤트
function loadMember(){
    if (accessYn == "") return;
    $("#main").load("./pages/member/index.html");

};
function test2(){
    if (accessYn == "") return;
    $("#main").load("./pages/kakao/index.html");
};
function test3(){
    if (accessYn == "") return;
    $("#main").load("./pages/letter/index.html");
};
function test4(){
    if (accessYn == "") return;
    $("#main").load("./pages/test4/index.html");
};
function test5(){
    if (accessYn == "") return;
    $("#main").load("./pages/test5/index.html");
};
function test6(){
    if (accessYn == "") return;
    $("#main").load("./pages/test6/index.html");
};

// 홈 클릭시 초기화
function home(){
    accessYn = "";
    $("#main").load("./pages/login/index.html");
    $('body').css('background-image', "url('background.png')");
    $("#sidebar").html("");
};
