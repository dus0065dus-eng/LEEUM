$('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationTooltips: ['LEEUM', 'Exhibition', "collection", "study"],
    showActiveTooltip: true,
    responsiveWidth: 1200,
    onLeave: function (origin, destination, direction, trigger) {
        if (destination === 5) {
            $("#header, #fp-nav").fadeOut();
        } else {
            $("#header,#fp-nav").fadeIn();
        };
    },
});


if (sessionStorage.getItem('introShown')) {
    // 이미 보여준 경우: 즉시 숨김
    $("#intro").hide();
} else {
    // 첫 방문해서 클릭한 경우: 2초에 걸쳐 서서히 사라지게 함
    $("#intro .leeum_index").click(function () {
        $("#intro").fadeOut(2000);
    });
    // sessionStorage에 방문 기록 저장
    sessionStorage.setItem('introShown', 'true');
}


$(".Exhibition .e_box2 .view").hide();
$(".Exhibition .e_box2").click(function () {
    $(this).toggleClass("active");
    $(".Exhibition .e_box2 .view").fadeToggle();
});

$(".Exhibition .e_box1 .view").hide();
$(".Exhibition .e_box1").click(function () {
    $(this).toggleClass("active");
    $(".Exhibition .e_box1 .view").fadeToggle();
});


const study01_list = new Swiper(".study01_list", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    breakpoints: {
        1500: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
});

const study02_list = new Swiper(".study02_list", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    breakpoints: {
        1500: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
});


$(".study_tab button").eq(0).addClass("active");

$(".study_tab button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".study_con .swiper").eq(num).fadeIn().siblings().hide();
});

$(".study01_list ul li dl,.study01_list ul li .view").hide();
$(".study01_list ul li").click(function () {
    $(this).find("dl,.view").fadeIn();
    $(this).siblings().find("dl,.view").fadeOut();
});

$(".study02_list ul li dl,.study02_list ul li .view").hide();
$(".study02_list ul li").click(function () {
    $(this).find("dl,.view").fadeIn();
    $(this).siblings().find("dl,.view").fadeOut();
});









































































