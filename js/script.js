
$(function(){
// ----------------------------서브 메뉴 창
    $(".drop_box, .sub").hide();

    $(".gnb>ul>li>a, .drop_box, .sub").mouseover(function(){
        $(".drop_box, .sub").stop().slideDown();
    });

    $(" .gnb>ul>li>a, .sub, .drop_box").mouseout(function(){
        $(".drop_box , .sub").stop().slideUp();
    });



// ----------------------------- 승차권 예매 , 발권 조회 창
    $(".a-box2>li").hide();

    $(".a-box2>li:first").show();

    $(".a-box1>li a").click(function(ev){
        ev.preventDefault();  //a테그 사용 클릭시 위아래로 깔짝깔짝 움직이는거 안하게 하는 return false랑 같은 의미

        $(".a-box1>li a").removeClass("on");
        $(this).addClass("on");

        $(".a-box2>li").hide();
        $($(this).attr("href")).show(); //attr(속성이라는 뜻 어트리브트?)a=href,img=src 
        // return false;

    });

    $(".a-box2 .a-box_r li ").click(function(){
        $(".a-box2 .a-box_r li").removeClass("on2");
        $(this).addClass("on2");
    });


// ------------------------------------------- 비회원 창

    $("#no").hide();
    // $(".bx").hide();


    $(".box-t .move2-1 a").click(function(ev){
        ev.preventDefault();

        $(".box-t2").hide();
        $("#no").hide();
        $($(this).attr("href")).show();
    
        
    });


// ----------------------------------------- 발권조회 예매 맴버쉽, 이메일 , 전화번호 환변 창 변환
    // $(".a-box2 .box-t .linebox1-1 li").hide();

    $(".bx").hide();
    $(".box-m1").show();


    $("#ti li a").click(function(ev){
        ev.preventDefault(); 

        $(".b-box>div").hide();
        $($(this).attr("href")).show();

        $(".a-box2 .box-t2 .linebox1-1 li a").removeClass("on2-2");
        $(this).addClass("on2-2");
    });
    

// ---------------------------------------고객센터 슬라이드
    $(".as-s").hide();

    let toggle = (function () {
        let isOpen = false; // 닫힘 상태로 시작
        return function () {
            if (!isOpen) {
                $(".as-s").show();
                $(".as-s").animate({ right : "0" });
                $(".quick").animate({ right : "400px" });
            }
            else {
                $(".as-s").animate({ right : "-380px"});
                $(".quick").animate({ right : "8px"});
                $(".as-s").hide("200");
            };
            isOpen = !isOpen;
        };
    })();

    $(".quick").click(toggle);

//  ------------------------------------------------------------



});


//슬라이드형식으로 밀리는 움직이는 버튼
function moveSlider(index) {
        const slider = document.querySelector(".move");
        const buttons = document.querySelectorAll(".move-1");
        slider.style.left = `${index * 33.33}%`;
        buttons.forEach((button, i) => {
            if(i === index) {
                button.classList.add("on1");
            } else {
                button.classList.remove("on1");
            }
        })
}


function moveSlider2(index) {
    const slider = document.querySelector(".move2");
    const buttons = document.querySelectorAll(".move2-1");
    slider.style.left = `${index * 50}%`;
    buttons.forEach((button, i) => {
        if(i === index) {
            button.classList.add("on1-1");
        } else {
            button.classList.remove("on1-1");
        }
    })
}



// --------------------------- 퀵메뉴


$(".top").hide();

$(window).scroll(function(){
    let valueTop = $(this).scrollTop();

    if(valueTop > 500){
        $(".top").fadeIn();
    } else {
        $(".top").fadeOut();
    }
});

$(".top").click(function(){
    // ev.preventDefault();

    $("html, body").animate({scrollTop : 0});
    return false;
});

// -------------------------------------


