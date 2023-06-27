
    //------- font 2 --------//
    window.onload=function() {
        var E = document.getElementsByClassName("box-set");
        var m = E.length;
        var n = parseInt(Math.random()*m);
        for (var i=m-1;i>=0;i--) {
        var e = E[i];
        e.style.display='none';
        }
        E[n].style.display='';
        }
    
        //-----------------------//
    
    const short_range = {
        pc : {min: 60, max: 160},
        mobile : {min: 30, max: 80}
    }
    
    const short_text = [
        { 
            txt: '그때 우리가 여름의 남해로 달려간 건', 
            ref: '김금희, 「여름의 앤초비」, 현대식품문학',
            pc_size : 120,
            mobile_size : 55 
        },
        { 
            txt: '소리도 아닌 냄새가 공간을 울릴 수 있다면', 
            ref: '오은, 「감칠맛이 보상이라니」, 현대식품문학',
            pc_size : 100,
            mobile_size : 53 
        },
        { 
            txt: '10여 년의 세월이 훌쩍 지나도', 
            ref: '봉태규, 「비로소, 콩국수」, 현대식품문학',
            pc_size : 130,
            mobile_size : 60 
        },
        { 
            txt: '고요와 소란 사이, 무화과의 맛', 
            ref: '박준, 「고요와 소란 사이, 무화과의 맛」, 현대식품문학',
            pc_size : 130,
            mobile_size : 60
        },
        { 
            txt: '아침 안개가 자욱한 귤 밭을 걷는 꿈', 
            ref: '정세랑, 「애인은 제주도 사람이다」, 현대식품문학',
            pc_size : 120,
            mobile_size : 53 
        },
        { 
            txt: '오색 빛 찬란한 기쁨이 음표처럼 쏟아진다', 
            ref: '장우철, 「딸기의 자리」, 현대식품문학',
            pc_size : 100,
            mobile_size : 44 
        },
        { 
            txt: '턱이 시리도록 달고 좋았다', 
            ref: '요조, 「턱이 시리도록 달고 좋았다」, 현대식품문학',
            pc_size : 130,
            mobile_size : 60 
        }
    ];
    
    const long_range = {
        pc : {min: 30, max: 50},
        mobile : {min: 14, max: 22}
    }
    
    const long_text = [
        { 
            txt: '그해 여름의 앤초비를 회상하면 마음이 약해진다는 남편 말이 떠오르고 또 그곳에서 가장 좋지만 조용히 닫혀 있던 겨울의 방도 떠오른다. 추위는 온도의 개념이기는 하지만 어떻게 보면 ‘압력’으로 전달되는 것이고, 그래서 찬바다의 생명체들은 천천히 움직이게 되는 걸까 했던 내 생각도. 그러면 우리도 지금 그런 시간을 통과하는 것일까 싶었던 마음도.', 
            ref: '김금희, 「여름의 앤초비」, 현대식품문학',
            pc_size : 40,
            mobile_size : 18
        },
        { 
            txt: '맞아, 힘들고 마음 아플 때에도 밥은 먹어야 되잖아, 힘내서 다음을 준비해야 하잖아. 자기합리화로 심신을 무장하는 데는 그리 오랜 시간이 걸리지 않았다. 친구의 자취방에 들어서는데, 달큼한 간장 양념 냄새가 진동했다. “냄새부터 벌써 맛있다.” “오늘은 먹고 씩씩해지는 상으로 준비했어. 이른바 보상! 보물 같은 상이라는 뜻도 되고 고생에 대한 보상도 되고.”', 
            ref: '오은, 「감칠맛이 보상이라니」, 현대식품문학',
            pc_size : 40,
            mobile_size : 18 
        },
        
        { 
            txt: '섬세하지는 않지만, 마음을 다해 맷돌구멍에 삶은 콩을 꾹꾹 눌러 담던 그 손. 생경하다 여겼던 그 맛이 진심을 다해 만든 음식의 기억이었다니. 맛이란 세월과 경험을 통해 체감하게 된다. 세상 사람들이 말하는 소울푸드라는 게 이런 게 아닐까. 그때 혼이 날까 봐 무서워서 억지로 먹어 두길 잘했다. 할머니, 맛있게 잘 먹었습니다.', 
            ref: '봉태규, 「비로소, 콩국수」, 현대식품문학',
            pc_size : 40,
            mobile_size : 18
        },
        { 
            txt: '남도에서 일정을 마치고 다시 목포에서 서울로 올라오는 날, 그는 다시 역에 나와 배웅을 해주었습니다. 사람은 만날 수 있을 때 만나야 한다고. 이번에도 그의 손에는 무화과가 들려 있었는데 이것은 집에 계신 부모님을 드리라고 했습니다. 일부러 큰 것만 골랐다면서. 무화과는 한철에만 맛볼 수 있으니 먹을 수 있을 때 또 먹고 또 먹어두어야 한다면서.', 
            ref: '박준, 「고요와 소란 사이, 무화과의 맛」, 현대식품문학',
            pc_size : 40,
            mobile_size : 18 
        },
        { 
            txt: '그날 밤, 아침 안개가 자욱한 귤 밭을 걷는 꿈을 꾸었다. 가본 적 없는 곳이지만 애인의 귤 밭인 걸 알 수 있었다. 가지마다 보석 같은 귤들이 매달려 있었고 하나를 따면 손바닥이 묵직해졌다. 안개는 도시의 것처럼 독하지 않고 숨 쉬기가 편안했다. 커다란 바구니가 전혀 무거워지지 않는 걸 깨닫고도 한참 꿈속에 머물렀다.', 
            ref: '정세랑, 「애인은 제주도 사람이다」, 현대식품문학',
            pc_size : 40,
            mobile_size : 18 
        },
        { 
            txt: '만년설은 이름을 멋지게 지었다. 맛과 이름이 어우러져 자꾸 이미지가 되려 하니, 감각할 수 있는 기쁨이 조촐해지면서도 대범해진다. 다름 아닌 딸기 한 알로부터 시작되었다는 데서 더더욱. 딸기를 앞에 두고 딸기와 이어진 생각을 하다 보니 내일모레 승준이가 베를린에서 돌아온다는 게 생각난다.', 
            ref: '장우철, 「딸기의 자리」, 현대식품문학',
            pc_size : 40,
            mobile_size : 18 
        },
        { 
            txt: '수확을 코앞에 앞두던 때였는데 날씨가 협조적이지 않았다. 하늘은 계속 흐리고 비가 추적거렸다. 내 공연날 비가 올 때도 이만큼 속상하지는 않았는데. 하루종일 일이 손에 잡히질 않았다. 가끔 일손을 도왔을 뿐인 나조차도 궂은 날씨에 발이 절로 동동거려지는데 농부들의 마음은 오죽할까 싶었다. 그래도 농부의 마음은 끝내 건강할 것 같다는 뜬금없는 생각도 들었다.', 
            ref: '요조, 「턱이 시리도록 달고 좋았다」, 현대식품문학',
            pc_size : 40,
            mobile_size : 18 
        }
    ];
    
    const grid_glyphs = [
        {glyph:'　'}, {glyph:'ㅋ'}, {glyph:'ㅋ'}, {glyph:'G'}, {glyph:'%'}, 
        {glyph:'¶'}, {glyph:'{}'}, {glyph:'U'}, {glyph:'3'}, {glyph:'을'}, 
        {glyph:'↖'}, {glyph:'객'}, {glyph:'6'}, {glyph:'Z'}, {glyph:'대'}, 
        {glyph:'B'}, {glyph:'C'}, {glyph:'D'}, {glyph:'“'}, {glyph:'F'}, 
        {glyph:'행'}, {glyph:'H'}, {glyph:'`4'}, {glyph:'n'}, {glyph:'K'},
        {glyph:'0', ffs: 'zero'}, {glyph:'£'}, {glyph:'N'}, {glyph:'O'}, {glyph:'0', ffs: 'ss02'},
        {glyph:'복'}, {glyph:'₩'}, {glyph:'백'}, {glyph:'2', ffs: 'ss02'}, {glyph:'r'},
        {glyph:'V'}, {glyph:'#'}, {glyph:'@'}, {glyph:'『』'}, {glyph:'~'}, 
        {glyph:'a'}, {glyph:'상'}, {glyph:'c'}, {glyph:'고'}, {glyph:'e'},
        {glyph:'?'}, {glyph:'g'}, {glyph:'h'}, {glyph:'Q'}, {glyph:'화'},
        {glyph:'k'}, {glyph:'()'}, {glyph:'m'}, {glyph:'스'}, {glyph:'c'},
        {glyph:'8'}, {glyph:'M'}, {glyph:'b'}, {glyph:'S'}, {glyph:'t'},
        {glyph:'€'}, {glyph:'점'}, {glyph:'j'}, {glyph:'1', ffs:'ss02'}, {glyph:'3'},
        {glyph:'세'}, {glyph:'1', ffs:'pnum'}, {glyph:'↘'}, {glyph:'※'}, {glyph:'4'},
        {glyph:'5'}, {glyph:'롭'}, {glyph:'X'}, {glyph:'←'}, {glyph:'9'},
        {glyph:'0' ,ffs:'pnum'}, {glyph:'요'}, {glyph:'2', ffs:'pnum'}, {glyph:'₩'}, {glyph:'$'},
        {glyph:'%'}, {glyph:'&'}, {glyph:'을'}, {glyph:'?'}, {glyph:'[]'},
        {glyph:'P'}, {glyph:'게'}, {glyph:'「」'}, {glyph:'Y'}, {glyph:'하'},
        {glyph:'P'}, {glyph:'↑'}, {glyph:'A'}, {glyph:'»'}, {glyph:'풍'},
        {glyph:'0'}, {glyph:'V'}, {glyph:'↙'}
    ];
    
    let short_text_index = 0;
    let long_text_index = 0;
    
    const top_img_src = {
        pc: "./assets/media/gif/intro_web.gif",//"./assets/media/mp4/intro.mp4",
        mobile: "./assets/media/gif/intro.gif",
        loading: "./assets/media/jpg/intro.jpg"
    };
    
    const swiper = new Swiper('#mobile-swiper', {
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            }
        },
        centeredSlides: true,
        spaceBetween: 100
    });
    
    swiper.on('slideChange', function (_swiper) {
        //console.log(_swiper.slides[_swiper.activeIndex]);
        PickImage(_swiper.slides[_swiper.activeIndex]);
    });
    
    let favicon_num = 1;
    let max_favicon_num = 3;
    
    function SetDynamicFavicon(){
        setInterval(()=>{
            favicon_num++;
            if(favicon_num > max_favicon_num){
                favicon_num = 1;
            }
            document.getElementById('favicon').href = './favicon/favicon_0000' + favicon_num + '.png';
        }, 400);
    }
    
    function Initiate() {
        $('#preloader').delay(300).fadeOut(300);
    
        OnResize();
        window.addEventListener('resize', OnResize);
    
        //-------menu functions--------//
        //-- menu background change on scroll
        OnScroll();
        document.getElementById('mainpage').addEventListener('scroll', OnScroll);
    
        document.getElementById('menu-toggle').addEventListener('click', function(){
            if(document.getElementById('menubar').classList.contains('open')){
                document.getElementById('menubar').classList.remove('open');
            }else{
                document.getElementById('menubar').classList.add('open');
            }
        });
    
        document.getElementById('a-top').addEventListener('click', OnMenuClick);
        document.getElementById('a-intro').addEventListener('click', OnMenuClick);
        document.getElementById('a-write').addEventListener('click', OnMenuClick);
        document.getElementById('a-card').addEventListener('click', OnMenuClick);
        document.getElementById('a-download').addEventListener('click', OnMenuClick);
    
        //-------grid functions-------//
        InitGlyphGrid();
    
        //-------write functions--------//
        document.getElementById('short-text-family').addEventListener('change', function(){
            FamilyChange(this, document.getElementById('short-text'));
        });
    
        document.getElementById('short-text-size').addEventListener('change', function(){
            SizeChange(this, document.getElementById('short-text'));
        });
    
        ShortTextRefresh();
        document.getElementById('short-text-refresh').addEventListener('click', ShortTextRefresh);
    
        document.getElementById('long-text-family').addEventListener('change', function(){
            FamilyChange(this, document.getElementById('long-text'));
        });
    
        document.getElementById('long-text-size').addEventListener('change', function(){
            SizeChange(this, document.getElementById('long-text'));
        });
    
        LongTextRefresh();
        document.getElementById('long-text-refresh').addEventListener('click', LongTextRefresh);
    
        /*
        if(window.innerWidth <= 900){
            document.getElementById('short-text-size').value = 50;
            document.getElementById('long-text-size').value = 50;
            SizeChange(document.getElementById('short-text-size'), document.getElementById('short-text'));
            SizeChange(document.getElementById('long-text-size'), document.getElementById('long-text'));
        }
        */
    
        //-------card functions--------//
        const pick_imgs = document.getElementsByClassName('pick-img');
        for(let i=0; i<pick_imgs.length; i++){
            pick_imgs[i].addEventListener('click', PickImage);
        }
        PickImage(pick_imgs[0]);
    
        document.getElementById('empty-card').addEventListener('click', EmptyCard);
        document.getElementById('empty-card-mobile').addEventListener('click', EmptyCard);
        document.getElementById('save-card-img').addEventListener('click', SaveCardImg);
        document.getElementById('save-card-img-mobile').addEventListener('click', SaveCardImg);
    
        document.getElementById('empty-card-mobile').addEventListener('touchstart', CardBtnTouchStart);
        document.getElementById('empty-card-mobile').addEventListener('touchend', CardBtnTouchEnd);
        document.getElementById('save-card-img-mobile').addEventListener('touchstart', CardBtnTouchStart);
        document.getElementById('save-card-img-mobile').addEventListener('touchend', CardBtnTouchEnd);
    
        document.getElementById('download-btn-print').addEventListener('click', function(){
            console.log('print download button clicked');
            gtag("event", "print_font_download", {
                item_url: this.href,
            });
        });
    
        document.getElementById('download-btn-screen').addEventListener('click', function(){
            console.log('screen download button clicked');
            gtag("event", "screen_font_download", {
                item_url: this.href,
            });
        });
    
    
        function CardBtnTouchStart(){
            this.classList.add('active');
        }
    
        function CardBtnTouchEnd(){
            this.classList.remove('active');
        }
    
        document.getElementById('ios-image-layer').addEventListener('click', function(){
            $(this).fadeOut(200);
        })
    }
    
    function InitTopBackground(){
        LazyLoadImgs();
        //SetDynamicFavicon();
    
        const tmp_img = new Image();
        tmp_img.onload = function(){
            document.getElementById('top').style.backgroundImage = 
            'url(' + tmp_img.src + ')';
            $(document.getElementById('top')).fadeIn(300);
            Initiate();
        };
    
        if(window.innerWidth <= 900){
            tmp_img.src = top_img_src.mobile;
        }else{
            tmp_img.src = top_img_src.pc;
            // document.getElementById('top-video').classList.remove('pc');
            // document.getElementById('top-video').src = top_img_src.pc;
            // document.getElementById('top-video').poster = top_img_src.loading;
            // tmp_img.src = top_img_src.loading;
        }
    
        //--> when developing
        //Initiate();
    }
    
    //---------- scroll functions ---------//
        function OnMenuClick(){
            const scroll_target = document.getElementById(this.href.split('#')[1]).offsetTop;
            $('#mainpage').stop().animate({
                scrollTop: scroll_target
            }, 600);
        }
    
        function OnScroll(){
            if (document.getElementById('mainpage').scrollTop >= document.getElementById('intro').offsetTop) {
                document.getElementById('menubar').classList.add('i-bg');
            } else {
                document.getElementById('menubar').classList.remove('i-bg');
            }
    
            if (document.getElementById('mainpage').scrollTop >= document.getElementById('write').offsetTop) {
                document.getElementById('menubar').classList.add('w-bg');
            } else {
                document.getElementById('menubar').classList.remove('w-bg');
            }
    
            if (document.getElementById('mainpage').scrollTop >= document.getElementById('card').offsetTop) {
                document.getElementById('menubar').classList.add('c-bg');
            } else {
                document.getElementById('menubar').classList.remove('c-bg');
            }
    
            if (document.getElementById('mainpage').scrollTop >= document.getElementById('download').offsetTop) {
                document.getElementById('menubar').classList.add('d-bg');
            } else {
                document.getElementById('menubar').classList.remove('d-bg');
            }
    
            //--> check if whether class name with grey or white is within viewport
            let grey_els = document.getElementsByClassName('grey');
            let white_els = document.getElementsByClassName('white');
    
            let grey_count = 0;
            for(let i=0; i<grey_els.length; i++){
                let el_bbox = grey_els[i].getBoundingClientRect();
                if( document.getElementById('mainpage').scrollTop >= grey_els[i].offsetTop && 
                    document.getElementById('mainpage').scrollTop <= grey_els[i].offsetTop + el_bbox.height){
                    document.getElementById('menubar').classList.remove('white-bg');
                    document.getElementById('menubar').classList.add('grey-bg');
                    grey_count++;
                }
            }
    
            if(grey_count == 0){
                document.getElementById('menubar').classList.remove('grey-bg');
            }
    
            let white_count = 0;
            for(let i=0; i<white_els.length; i++){
                let el_bbox = white_els[i].getBoundingClientRect();
                if( document.getElementById('mainpage').scrollTop >= white_els[i].offsetTop && 
                    document.getElementById('mainpage').scrollTop <= white_els[i].offsetTop + el_bbox.height){
                    document.getElementById('menubar').classList.remove('grey-bg');
                    document.getElementById('menubar').classList.add('white-bg');
                    white_count++;
                }
            }
    
            if(white_count == 0){
                document.getElementById('menubar').classList.remove('white-bg');
            }
    
            let mobile_grey_els = document.getElementsByClassName('mobile-grey');
            let mobile_grey_count = 0;
            for(let i=0; i<mobile_grey_els.length; i++){
                let el_bbox = mobile_grey_els[i].getBoundingClientRect();
                if( document.getElementById('mainpage').scrollTop >= mobile_grey_els[i].offsetTop && 
                    document.getElementById('mainpage').scrollTop <= mobile_grey_els[i].offsetTop + el_bbox.height){
                    document.getElementById('menubar').classList.add('mobile-grey-bg');
                    mobile_grey_count++;
                }
            }
    
            if(mobile_grey_count == 0){
                document.getElementById('menubar').classList.remove('mobile-grey-bg');
            }
    
            let mobile_white_els = document.getElementsByClassName('mobile-white');
            let mobile_white_count = 0;
            for(let i=0; i<mobile_white_els.length; i++){
                let el_bbox = mobile_white_els[i].getBoundingClientRect();
                if( document.getElementById('mainpage').scrollTop >= mobile_white_els[i].offsetTop && 
                    document.getElementById('mainpage').scrollTop <= mobile_white_els[i].offsetTop + el_bbox.height){
                    document.getElementById('menubar').classList.add('mobile-white-bg');
                    mobile_white_count++;
                }
            }
    
            if(mobile_white_count == 0){
                document.getElementById('menubar').classList.remove('mobile-white-bg');
            }
    
            LazyLoadImgs();
            FocusInput();
        }
    
        function FocusInput(){
            if(window.innerWidth < 900 || matchMedia('(pointer:coarse)').matches){}else{
                let track_els = document.getElementsByClassName('scroll-track');
                for(let i=0; i<track_els.length; i++){
                    let el_bbox = track_els[i].getBoundingClientRect();
                    let focus_el = track_els[i].getElementsByClassName('scroll-focus')[0];
                    let offset = 0;
                    if( i==0 && track_els[i].getElementsByClassName('title')[0] &&
                        track_els[i].getElementsByClassName('desc')[0]){
                        offset += track_els[i].getElementsByClassName('title')[0].getBoundingClientRect().height;
                        offset += track_els[i].getElementsByClassName('desc')[0].getBoundingClientRect().height;
                    }
    
                    if( Math.abs(document.getElementById('mainpage').scrollTop - track_els[i].offsetTop + window.innerHeight * 0.3 - offset) < 50){
                        PlaceCaretAtEnd(focus_el);
                    }
                }
            }
    
            function PlaceCaretAtEnd(el) {
                el.spellcheck = false;
                el.focus();
                if (typeof window.getSelection != "undefined"
                    && typeof document.createRange != "undefined") {
                    var range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                } else if (typeof document.body.createTextRange != "undefined") {
                    var textRange = document.body.createTextRange();
                    textRange.moveToElementText(el);
                    textRange.collapse(false);
                    textRange.select();
                }
            }
        }
    
        function LazyLoadImgs(){
            let lazy_els = document.getElementsByClassName('lazy');
            for(let i=0; i<lazy_els.length; i++){
                const lazy_el = lazy_els[i];
                let el_bbox = lazy_el.getBoundingClientRect();
    
                if( document.getElementById('mainpage').scrollTop >= lazy_el.offsetTop - window.innerWidth * 0.5){
                    let src_urls = lazy_el.getAttribute('data-src').split(',');
                    let src_url = (src_urls.length >= 2)? src_urls[Math.floor(Math.random() * src_urls.length)] : src_urls[0];
                    if(lazy_el.classList.contains('pc')){
                        lazy_el.classList.remove('pc');
                        if(window.innerWidth <= 900){
                            lazy_el.parentElement.removeChild(lazy_el);
                            continue;
                        }
                    }else if(lazy_el.classList.contains('mobile')){
                        lazy_el.classList.remove('mobile');
                        if(window.innerWidth > 900){
                            lazy_el.parentElement.removeChild(lazy_el);
                            continue;
                        }
                    }
    
                    if(lazy_el.tagName == "VIDEO"){
                        lazy_el.src = src_url;
                    }else if(lazy_el.tagName == "DIV"){
                        let bck_img = new Image();
                        bck_img.onload = function(){
                            lazy_el.style.backgroundImage = 
                            'url(' + bck_img.src + ')';
                            $(lazy_el).fadeIn(300);
                        }
                        bck_img.src = src_url;
                    }else if(lazy_el.tagName == "IMG"){
                        lazy_el.src = src_url;
                    }
    
                    lazy_el.classList.remove('lazy');
                }
            }
        }
    
    //---------- grid functions ----------//
        function InitGlyphGrid(){
            const grid_container = document.getElementById('glyph-grid');
            for(let i=0; i<grid_glyphs.length; i++){
                let glyph_container = document.createElement('div');
                glyph_container.classList.add('glyph');
                if(grid_glyphs[i].ffs){
                    glyph_container.style.fontFeatureSettings = '"' + grid_glyphs[i].ffs + '"';
                }
                glyph_container.innerHTML = grid_glyphs[i].glyph;
    
                grid_container.appendChild(glyph_container);
            }
    
            AnimateGlyphGrid();
        }
    
        function AnimateGlyphGrid(){
            const glyphs = document.getElementsByClassName('glyph');
            for(let i=0; i<glyphs.length; i++){
                setTimeout(()=>{
                    if(glyphs[i].classList.contains('active')){
                        glyphs[i].classList.remove('active');
                    }else{
                        glyphs[i].classList.add('active');
                    }
                }, 70 * i);
            }
    
            setTimeout(()=> {
                AnimateGlyphGrid();
            }, 70 * (glyphs.length + 1));
        }
    
    
    //---------- card functions ----------//
    
        function EmptyCard(){
            console.log('empty card');
            document.getElementById('card-title').value = "";
            document.getElementById('card-content').value = "";
            document.getElementById('card-from').value = "";
        }
    
        function SaveCardImg(){
            console.log('save card image');
            gtag("event", "card_image_download", {});
            RenderCard(
                document.getElementById('capture-content'),
                document.getElementById('card-title'),
                document.getElementById('card-content'),
                document.getElementById('card-copyright'),
                document.getElementById('card-from')
            );
        }
    
        function RenderCard(_card, _card_title, _card_content, _copyright, _from){
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d', {alpha: false});
    
            const card = _card;
            const card_title = _card_title;
            const card_content = _card_content;
            const copyright = _copyright;
            const card_from = _from;
    
            const card_bbox = card.getBoundingClientRect();
            const card_title_bbox = card_title.getBoundingClientRect();
            const card_content_bbox = card_content.getBoundingClientRect();
            const copyright_bbox = copyright.getBoundingClientRect();
            const card_from_bbox = card_from.getBoundingClientRect();

    
            const pixel_density = 3.0;
    
            canvas.width = card_bbox.width * pixel_density;
            canvas.height = card_bbox.height * pixel_density;
    
            let card_style = card.currentStyle || window.getComputedStyle(card, false);
            card_bg_src = card_style.backgroundImage.slice(4, -1).replace(/"/g, "");
            let card_title_style = card_title.currentStyle || window.getComputedStyle(card_title, false);
            let card_content_style = card_content.currentStyle || window.getComputedStyle(card_content, false);
            let copyright_style = copyright.currentStyle || window.getComputedStyle(copyright, false);
            let card_from_style = copyright.currentStyle || window.getComputedStyle(card_from, false);
    
            const image = new Image();
            image.onload = function(){
                console.log(canvas.width, canvas.height, image.naturalWidth, image.naturalHeight);
                let cw = canvas.width;
                let ch = canvas.height;
                let iw = image.naturalWidth;
                let ih = image.naturalHeight;
    
                let img_x = cw * 0.5 - iw;
                let img_y = ch * 0.5 - ih;
                let img_w = iw;
                let img_h = ih;
    
                if(cw > ch){
                    img_h = img_h * cw / img_w;
                    img_w = cw;
    
                    if(ch > img_h){
                        img_w = img_w * ch / img_h;
                        img_h = ch;
                    }
                }else{
                    img_w = img_w * ch / img_h;
                    img_h = ch;
    
                    if(cw > img_w){
                        img_h = img_h * cw / img_w;
                        img_w = cw;
                    }
                }
    
                console.log(img_w, img_h);
    
                img_x = cw * 0.5 - img_w * 0.5;
                img_y = ch - img_h;//ch * 0.5 - img_h * 0.5;
    
                
                let text_top_offset = PxStrToNum(card_title_style.top) * pixel_density;
    
                ctx.drawImage(this, img_x, img_y, img_w, img_h);

                // card-title
                ctx.font = (parseInt(card_title_style.fontSize) * pixel_density) + "px happy-title";
                ctx.textBaseline = 'top';
                ctx.fillStyle = card_title_style.color;
                ctx.fillText(
                    card_title.value, 
                    (card_title_bbox.left - card_bbox.left) * pixel_density, 
                    (card_title_bbox.top - card_bbox.top) * pixel_density - text_top_offset
                );
    
                // card-content
                ctx.font = (parseInt(card_content_style.fontSize) * pixel_density) + "px happy-regular";
                ctx.textBaseline = 'top';
                ctx.fillStyle = card_content_style.color;
                let lines = GetLines(ctx, card_content.value, card_content_bbox.width * pixel_density);
                
                let line_height = PxStrToNum(card_content_style.lineHeight);
                console.log("line_height");
                console.log(line_height);
                console.log(card_content.value);
                for(let i=0; i<lines.length; i++){
                    ctx.fillText(
                        lines[i],
                        (card_content_bbox.left - card_bbox.left) * pixel_density, 
                        ((card_content_bbox.top - card_bbox.top) + (i * line_height)) * pixel_density - text_top_offset
                    );
                }

                // card-from                    
                ctx.font = (parseInt(card_from_style.fontSize) * pixel_density) + "px happy-title";
                ctx.textBaseline = 'top';
                ctx.fillStyle = card_from_style.color;
                ctx.textAlign = "right";
                ctx.fillText(
                    card_from.value, 
                    canvas.width - 80, 
                    (card_from_bbox.top - card_bbox.top) * pixel_density - text_top_offset
                );

                /*
                ctx.font = (parseInt(copyright_style.fontSize) * pixel_density) + "px happy-regular";
                ctx.textBaseline = 'top';
                ctx.fillStyle = copyright_style.color;
                ctx.fillText(
                    copyright.innerHTML, 
                    (copyright_bbox.left - card_bbox.left) * pixel_density, 
                    (copyright_bbox.top - card_bbox.top) * pixel_density
                );
                */
                
                OpenAndDownload(canvas);
            };
    
            image.src = card_bg_src;
    
            function PxStrToNum(_px_str){
                return _px_str.split('px')[0];
            }
    
            function GetLines(ctx, text, maxWidth) {
                console.log("GetLines Start");
                var words = text.split(" ");
                var lines = [];
                var currentLine = '';
    
                for (var i = 0; i < words.length; i++) {
                    var word = words[i];
                    var width = ctx.measureText(currentLine + " " + word).width;
                    
                    if(word.includes('\n')){
                        var split_word = word.split('\n');
    
                        if(currentLine == ""){
                            currentLine += split_word[0];
                        }else{
                            currentLine += " " + split_word[0];
                        }
    
                        for(var j=1; j<split_word.length; j++){
                            lines.push(currentLine);
                            currentLine = split_word[j];
                        }
                        
                        continue;
                    }
    
                    if (width < maxWidth) {
                        if(currentLine == ""){
                            currentLine += word;
                        }else{
                            currentLine += " " + word;
                        }
                    } else {
                        lines.push(currentLine);
                        currentLine = word;
                    }
                    console.log("111111111");
                }
                lines.push(currentLine);
                return lines;
            }
        }
    
        function OpenAndDownload(canvas){
            console.log(canvas);
            const card_capture_src = canvas.toDataURL();
    
            let card_capture = new Image();
            card_capture.src = card_capture_src;  
            card_capture.style.objectFit = 'contain';  
    
            let card_capture_wrapper = document.createElement('div');
            card_capture_wrapper.style.display = "flex";
            card_capture_wrapper.style.justifyContent = "center";
            card_capture_wrapper.style.position = "fixed";
            card_capture_wrapper.style.top = "0";
            card_capture_wrapper.style.left = "0";
            card_capture_wrapper.style.width = "100%";
            card_capture_wrapper.style.height = "100%";
            card_capture_wrapper.style.backgroundColor = "#F4EEEA";
            card_capture_wrapper.appendChild(card_capture);       
            
            let w = window.open("");
            if(w){
                w.focus();
                w.document.write(card_capture_wrapper.outerHTML);
                w.document.title = 'Happiness Card';
            }else{
                console.log('for some reason window not defined. open on a new layer');
            }
    
            if(!IOS()){
                console.log('not ios. download image');
                let downloader = document.createElement('a');
                downloader.href = card_capture_src;
                downloader.download = 'Happiness Card';
                downloader.click();
            }else{
                console.log('IOS. open on a new layer');
                document.getElementById('ios-image-layer').appendChild(card_capture);
                $(document.getElementById('ios-image-layer')).fadeIn(200);
            }
        }
    
        function IOS() {
            return [
                    'iPad Simulator',
                    'iPhone Simulator',
                    'iPod Simulator',
                    'iPad',
                    'iPhone',
                    'iPod'
                ].includes(navigator.platform)
                // iPad on iOS 13 detection
                ||
                (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        }
    
        function PickImage(_pick_target){
            const img = new Image();
            const card = document.getElementById('capture-content');
            const pick_target = _pick_target;
    
    
            img.onload = function(){
                if(!pick_target.classList){
                    $(card).fadeOut(200, function(){
                        card.style.backgroundImage = 
                            "url('" + img.src + "')";
                        $(card).fadeIn(200);
                    });
                }else{
                    card.style.backgroundImage = 
                            "url('" + img.src + "')";
                }
            };
    
            document.getElementById('capture-content').addEventListener('click', EmptyCardOnFocus);
    
            if(pick_target.classList){
                img.src = pick_target.getAttribute('target');
                document.getElementById('card-title').value = pick_target.getAttribute('title-txt').replaceAll('<br>','\r\n');
                document.getElementById('card-content').value = pick_target.getAttribute('content-txt').replaceAll('<br>','\r\n');
                document.getElementById('card-from').value = "테스트 드림";
            }else{
                img.src = this.getAttribute('target');
                document.getElementById('card-title').value = this.getAttribute('title-txt').replaceAll('<br>','\r\n');
                document.getElementById('card-content').value = this.getAttribute('content-txt').replaceAll('<br>','\r\n');
                document.getElementById('card-from').value = "테스트 드림";
            }
    
            function EmptyCardOnFocus(e){
                if(!e.target.classList.contains('swiper-pagination-bullet')){
                    console.log('empty card');
                    document.getElementById('card-title').value = "";
                    document.getElementById('card-content').value = "";
                    document.getElementById('card-from').value = "";
                    document.getElementById('capture-content').removeEventListener('click', EmptyCardOnFocus);
                }
            }
        }
    
    //---------- write functions ----------//
        function ShortTextRefresh(){
            console.log('short text refresh');
            document.getElementById('short-text').innerHTML = short_text[short_text_index].txt;
            document.getElementById('short-text-footnote').innerHTML = short_text[short_text_index].ref;
            SizeChange(
                document.getElementById('short-text-size'),
                document.getElementById('short-text'),
                (window.innerWidth <= 900)? short_text[short_text_index].mobile_size : short_text[short_text_index].pc_size
            );
    
            short_text_index++;
            if(short_text_index >= short_text.length){
                short_text_index = 0;
            }
        }
    
        function LongTextRefresh(){
            console.log('long text refresh');
            document.getElementById('long-text').innerHTML = long_text[long_text_index].txt;
            document.getElementById('long-text-footnote').innerHTML = long_text[long_text_index].ref;
            SizeChange(
                document.getElementById('long-text-size'),
                document.getElementById('long-text'),
                (window.innerWidth <= 900)? long_text[long_text_index].mobile_size : long_text[long_text_index].pc_size
            );
    
            long_text_index++;
            if(long_text_index >= long_text.length){
                long_text_index = 0;
            }
        }
    
        function SizeChange(slider, target, set_slider_val){
            let scale = 0;
            if(set_slider_val){
                let slider_val = 0;
                if(slider == document.getElementById('short-text-size')){
                    if(window.innerWidth <= 900){
                        slider_val = 100 * (set_slider_val - short_range.mobile.min) / (short_range.mobile.max - short_range.mobile.min);
                    }else{
                        slider_val = 100 * (set_slider_val - short_range.pc.min) / (short_range.pc.max - short_range.pc.min);
                    }
                }else if(slider == document.getElementById('long-text-size')){
                    if(window.innerWidth <= 900){
                        slider_val = 100 * (set_slider_val - long_range.mobile.min) / (long_range.mobile.max - long_range.mobile.min);
                    }else{
                        slider_val = 100 * (set_slider_val - long_range.pc.min) / (long_range.pc.max - long_range.pc.min);
                    }
                }
    
                slider.value = slider_val; 
                scale = slider.value / slider.max;
            }else{
                scale = slider.value / slider.max;
                let font_size = 0;
            }
    
            if(slider == document.getElementById('short-text-size')){
                if(window.innerWidth <= 900){
                    font_size = scale * (short_range.mobile.max - short_range.mobile.min) + short_range.mobile.min;
                }else{
                    font_size = scale * (short_range.pc.max - short_range.pc.min) + short_range.pc.min;
                }
            }else if(slider == document.getElementById('long-text-size')){
                if(window.innerWidth <= 900){
                    font_size = scale * (long_range.mobile.max - long_range.mobile.min) + long_range.mobile.min;
                }else{
                    font_size = scale * (long_range.pc.max - long_range.pc.min) + long_range.pc.min;
                }
            }
    
            if(font_size != 0){
                target.style.fontSize = (font_size) + 'px';
                console.log(font_size);
            }else{
                console.log('something wrong with slider');
            }
        }
    
        function FamilyChange(slider, target){
            let regular_strt = {wght: 400, opsz: 400};
            let regular_end = {wght: 400, opsz: 900};
            let bold = {wght: 900, opsz: 400};
            let title = {wght: 900, opsz: 900};
    
            let ratio = slider.value / slider.max;
            let opsz = 0;
            let wght = 0;
    
            if(0 <= ratio && ratio < 0.25){
                let inter_val = ratio / 0.25;
                wght = (1.0 - inter_val) * regular_strt.wght + inter_val * regular_end.wght;
                opsz = (1.0 - inter_val) * regular_strt.opsz + inter_val * regular_end.opsz;
            }else if(0.25 <= ratio && ratio < 0.5){
                let inter_val = (ratio - 0.25) / 0.25;
                wght = (1.0 - inter_val) * regular_end.wght + inter_val * bold.wght;
                opsz = (1.0 - inter_val) * regular_end.opsz + inter_val * bold.opsz;
            }else if(0.5 <= ratio && ratio <= 1.0){
                let inter_val = (ratio - 0.5) / 0.5;
                wght = (1.0 - inter_val) * bold.wght + inter_val * title.wght;
                opsz = (1.0 - inter_val) * bold.opsz + inter_val * title.opsz;
            }
    
            target.style.fontVariationSettings = 
            "'wght' " + wght + ",'opsz' " + opsz;
        }
    
    
    function OnResize(){
        SetVH();
        const youtube_iframe = document.getElementById("youtube_iframe");
        let youtube_iframe_bbox = youtube_iframe.getBoundingClientRect();
        youtube_iframe.style.height = (youtube_iframe_bbox.width * youtube_iframe.height / youtube_iframe.width) + "px";
    }
    
    function SetVH(){
        let vh = window.innerHeight * 0.01;
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }

    // 카카오톡 API를 초기화합니다.
    Kakao.init('7d708efc50fd833e4e4d8b46867afaf0');

    // 카카오톡으로 이미지를 보내는 함수입니다.
    function sendImageToFriends() {
        // 이미지 URL
        var imageUrl = 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg';

        // 카카오톡 링크 생성
        Kakao.Link.sendDefault({
          objectType: 'feed',
          content: {
            title: '',
            link: {
              mobileWebUrl: 'https://example.com',
              webUrl: 'https://example.com',
            },
            imageUrl: imageUrl,
          },
          buttons: [
            {
              title: '앱에서 보기',
              link: {
                mobileWebUrl: 'https://example.com',
                webUrl: 'https://example.com',
              },
            },
          ],
        });
      }
    
    console.log('manager script');
    window.addEventListener('load', InitTopBackground);