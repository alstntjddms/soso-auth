const Chat = (function(){
    const myName = "YC테스터";
    const toggle = false;
    const historyMsg = [
        {"role": "system", "content": " You are a helper who analyzes the user's needs, finds the functions in the most appropriate Among the data array I presented, and fills the parameters."
                                    + " Do not create functions that are not in the data array "
                                    + " If the appropriate parameter is not found, put null."
                                    + " The number of parameters cannot be checked and left out."
                                    + " f''' perform the following action: "
                                    + " 1 - Interpret the sentence and summarize the request. "
                                    + " 2 - Extract only the key words. "
                                    + " 3 - Find the best function in data array for the description and If the parameter is insufficient, ask for the deficiency again. "
                                    + " 4 - Output The best function to fill in the parameters "
                                    + " 5 - If all parameters are perfectly filled, only the value of the function responds. "
                                    + " Use the only following format in korean:"
                                    + " Text: <request to summarize>"
                                    + " Keywords: <keywords>"
                                    + " Output JSON: <json with function and parameters)>"
                                    + " Are all parameters populated?: <Only True or False>'''"
                                    + "data=[{description:관리자를 등록한다., function:registerAuth(이름=name, 관리자키=authKey, 코드=code)},"
                                    + "{description:관리자를 수정한다., function:updateAuth(이름=name, 관리자키=authKey, 코드=code)},"
                                    + "{description:If you do not understand the request or do not find an appropriate description., function:idontknow()}]"},
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
                "messages": historyMsg,
                "temperature": 0
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
        if(LR == "left"){
            const text = data.message;

            // Function 추출
            const functionPattern = /"function"\s*:\s*"(\w+)"/;
            const functionMatch = text.match(functionPattern);
            const functionValue = functionMatch[1];

            // Parameters 추출
            const paramsPattern = /"parameters"\s*:\s*({[^{}]*})/;
            const paramsMatch = text.match(paramsPattern);
            const paramsStr = paramsMatch[1];
            const parameters = JSON.parse(paramsStr);

            // Are all parameters populated? 추출
            const areParamsPopulatedPattern = /Are all parameters populated\?:\s*(\w+)/;
            const areParamsPopulatedMatch = text.match(areParamsPopulatedPattern);
            const areParamsPopulated = areParamsPopulatedMatch[1];

            // 결과 출력
            console.log(`Function: ${functionValue}`);
            console.log(`Parameters: ${JSON.stringify(parameters)}`);
            console.log(`Are all parameters populated?: ${areParamsPopulated}`);

            if(areParamsPopulated == 'True'){
                console.log("True");
            }else if(areParamsPopulated == 'False'){
                console.log("False");
            }else{
                console.log("응답 예외 발생");
            }
            
            if(areParamsPopulated == 'True'){
                if(functionValue == 'registerAuth'){
                    console.log("parameters");
                    console.log(parameters);
                    if(parameters.이름 != null & parameters.관리자키 != null & parameters.코드 != null){
                        console.log(parameters);
                        if (confirm("관리자를 등록하시겠습니까?")) {
                            console.log("User clicked 'Yes'");
                            axios.post('https://plater.kr/api/manager', {
                                                                        "id": "0",                                            
                                                                        "name": parameters.이름,
                                                                        "authKey": parameters.관리자키,
                                                                        "code": parameters.코드})
                                        .then(function(response){
                                        console.log(response.data);
                                        alert("등록에에 성공하였습니다.");})
                                        .catch(function (error) {
                                            console.log(error);
                                            alert("등록에 실패하였습니다.");
                                          });
                          } else {
                            console.log("User clicked 'No'");
                          }
                          
                    }else{
                        console.log(parameters);
                    }
                    
                }else if(functionValue == 'updateAuth'){
                    console.log("parameters");
                    console.log(parameters);
                    if(parameters.이름 != null && parameters.관리자키 != null && parameters.코드 != null){
                        console.log(parameters);
                        if (confirm("관리자를 수정하시겠습니까?")) {
                            console.log("User clicked 'Yes'");
                            axios.patch('https://plater.kr/api/manager', {
                                                                        "id": "0",
                                                                        "name": parameters.이름,
                                                                        "authKey": parameters.관리자키,
                                                                        "code": parameters.코드})
                                .then(function(response){
                                    console.log(response.data);
                                    alert("수정에 성공하였습니다.");})
                                    .catch(function (error) {
                                        console.log(error);
                                        alert("수정에 실패하였습니다.");
                                        });
                          } else {
                            console.log("User clicked 'No'");
                          }
                          
                    }else{
                        console.log(parameters);
                    }
                }
            }
        }
    }
 
    return {
        'init': init
    };
})();
 
$(function(){
    Chat.init();
});