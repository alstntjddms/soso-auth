// 로그인 체크 변수
var accessYn = false;

// 기본페이지 로딩
$("#main").load("./login/index.html");

// 로그인 처리
function login(){
    if (accessYn == false) return;
    $('body').css('background-image', "none");
    $("#sidebar").load("./sidebar/sidebar.html");
    $("#main").load("./member/index.html");
};

// 메뉴 클릭시 메인페이지 이벤트
function loadMember(){
    if (accessYn == false) return;
    $("#main").load("./member/index.html");
};
function test2(){
    if (accessYn == false) return;
    $("#main").load("./test2/index.html");
};
function test3(){
    if (accessYn == false) return;
    $("#main").load("./test3/index.html");
};
function test4(){
    if (accessYn == false) return;
    $("#main").load("./test4/index.html");
};
function test5(){
    if (accessYn == false) return;
    $("#main").load("./test5/index.html");
};
function test6(){
    if (accessYn == false) return;
    $("#main").load("./test6/index.html");
};

// 홈 클릭시 초기화
function home(){
    accessYn = false;
    $("#main").load("./login/index.html");
    $('body').css('background-image', "url('background.png')");
    $("#sidebar").html("");
};