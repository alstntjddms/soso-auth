// 로그인 처리
function login(){
    $("#sidebar").load("./sidebar/sidebar.html");
    $("#main").load("./test1/index.html");
};

// 기본페이지 로딩
$("#main").load("./login/index.html");

// 메뉴 클릭시 메인페이지 이벤트
function test1(){
    $("#main").load("./test1/index.html");
};
function test2(){
    $("#main").load("./test2/index.html");
};
function test3(){
    $("#main").load("./test3/index.html");
};
function test4(){
    $("#main").load("./test4/index.html");
};
function test5(){
    $("#main").load("./test5/index.html");
};
function test6(){
    $("#main").load("./test6/index.html");
};

// 홈 클릭시 초기화
function home(){
    $("#main").load("./login/index.html");
    $("#sidebar").html("");
};