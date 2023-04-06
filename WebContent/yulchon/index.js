const Chat = (function(){
    const myName = "YC테스터";
    const toggle = false;
    const historyMsg = [
        {"role": "system", "content": "You are a useful assistant at Yulchon Law Firm."},
        {"role": "user", "content": "From now on, please answer in plain text only using the information I registered."},
        {"role": "user", "content": "직원 정보 =[{이름:전민수,나이:27,회사:율촌,부서:개발팀,직무:홈페이지 개발},{ 이름:김갑수, 나이:37, 회사:율촌, 부서:인사팀, 직무:인사 이동},{ 이름:이미자, 나이:45, 회사:율촌, 부서:회계팀, 직무:사내 회계 관리},{ 이름:박지수, 나이:42, 회사:율촌, 부서:감사팀, 직무:사내 감사},{ 이름:김오리, 나이:44, 회사:율촌, 부서:업무지원팀, 직무:업무지원},{ 이름:감시자, 나이:45, 회사:율촌, 부서:감시팀, 직무:감시},{ 이름:국어책, 나이:57, 회사:율촌, 부서:송무팀, 직무:송무 관리},{ 이름:영어책, 나이:37, 회사:율촌, 부서:영어팀, 직무:영어 교육},{ 이름:김변호, 나이:22, 회사:율촌, 부서:(법무)부동산개발, 직무:부동산개발 상담},{ 이름:김판사, 나이:46, 회사:율촌, 부서:(송무)재판관리, 직무:재판 참석}]"},
        {"role": "user", "content": "율촌 회사 정보 = {이름:법무법인(유) 율촌, 위치:서울 강남구 테헤란로 521 파르나스타워 38층, 전화번호:02-528-5200, 하는일:로펌, 법률서비스, 관련정보:법무법인,로펌,대한민국로펌, 홈페이지:https://www.yulchon.com}"}
        ]
    
    // init 함수
    function init() {
        
        // enter 키 이벤트
        $(document).on('keydown', 'div.input-div textarea', function(e){
            if(e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();
 
                // 메시지 전송
                sendMessage(message);
                // 입력창 clear
                clearTextarea();
                downScroll();
            }
        });
        // 버튼 키 이벤트
        $(document).on('click', '#btn', function(){
                const message = $('#txt').val();
                // 메시지 전송
                sendMessage(message);
                // 입력창 clear
                clearTextarea();
                downScroll();
        });
    }

 
    // 메세지 태그 생성
    function createMessageTag(LR_className, senderName, message) {
        // 형식 가져오기
        let chatLi = $('div.chat.format ul li').clone();
 
        // 값 채우기
        chatLi.addClass(LR_className);
        chatLi.find('.sender span').text(senderName);

        if ($('#toggleSwitch').is(":checked")){
            chatLi.find('.message span').text(message);
        }else{
            if(LR_className == "left"){
                var typewriter = new Typewriter(chatLi.find('.message span')[0], {
                    loop: false
                });
        
                typewriter.typeString(message)
                    .start();
            }else{
                chatLi.find('.message span').text(message);
            }
        }

    
        
 
        return chatLi;
    }
 
    // 메세지 태그 append
    function appendMessageTag(LR_className, senderName, message) {
        const chatLi = createMessageTag(LR_className, senderName, message);
 
        $('div.chat:not(.format) ul').append(chatLi);
 
        downScroll();
    }

            // 스크롤바 아래 고정
    function downScroll(){
        var scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }

    // 메세지 전송
    function sendMessage(message) {
        // 서버에 전송하는 코드로 후에 대체
        const data = {
            "senderName"    : "YC테스터",
            "message"        : message
        };
        resive(data);
        historyMsg.push({"role": "user", "content": message});

        $.ajax({
            type: "POST",
            url: "https://api.openai.com/v1/chat/completions",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-type","application/json");
                xhr.setRequestHeader("Authorization","Bearer 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");
            },
            data: JSON.stringify(             
                {
                "model": "gpt-3.5-turbo",
                "messages": historyMsg
                }
            ),
            success: function (res) {
                console.log(res);
                historyMsg.push({
                    'role' : 'assistant',
                    'content' : res.choices[0].message.content
                })
                resive({
                        "senderName" : "Gpt-3.5",
                        "message" : res.choices[0].message.content
                        });
            }
        });
        console.log("historyMsg");
        console.log(historyMsg);

    }
 
    // 메세지 입력박스 내용 지우기
    function clearTextarea() {
        $('div.input-div textarea').val('');
    }
 
    // 메세지 수신
    function resive(data) {
        const LR = (data.senderName != myName)? "left" : "right";
        appendMessageTag(LR, data.senderName, data.message);
    }
 
    return {
        'init': init
    };
})();
 
$(function(){
    Chat.init();
});