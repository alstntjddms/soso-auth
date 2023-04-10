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

    $("#install-button").hide();
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
    $("#install-button").show();
};

// let deferredInstallPrompt = null;
// $(document).ready(function(){
//     console.log("aaa");
//     $("#install-button").on("click", installPWA);
// });

// $(window).on("beforeinstallprompt", function(evt){
//     deferredInstallPrompt = evt.originalEvent;
//     console.log("aaa1");
//     $("#install-button").show();
// });

// function installPWA(){
//     console.log("aaa2");
//     deferredInstallPrompt.prompt();
//     $("#install-button").remove();

//     deferredInstallPrompt.userChoice
//     .then((choice) =>{
//         if(choice.outcome === 'accepted'){
//             console.log("aaa");
//         }else{
//             console.log("bbb");
//         }
//         deferredInstallPrompt = null;
//     });
// }

let deferredPrompt;

self.addEventListener("install", function () {
  console.log("install");
});

self.addEventListener("activate", function () {
  console.log("activate");
});

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  $("#install-button").show();
  console.log(`'beforeinstallprompt' event was fired.`);
});

$("#install-button").on('click', async () => {
  // Hide the app provided install promotion
  // Show the install prompt
  console.log("11111");
  deferredPrompt.prompt();
  console.log("22222");
  try {
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
  } catch (error) {
    console.log(`Error occurred while handling install prompt: ${error}`);
  } finally {
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt = null;
  }
});

window.addEventListener('appinstalled', () => {
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
  // Optionally, send analytics event to indicate successful install
  console.log('PWA was installed');
  $("#install-button").hide();
});


  function getPWADisplayMode() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (document.referrer.startsWith('android-app://')) {
      return 'twa';
    } else if (navigator.standalone || isStandalone) {
      return 'standalone';
    }
    return 'browser';
  }

  console.log(getPWADisplayMode());