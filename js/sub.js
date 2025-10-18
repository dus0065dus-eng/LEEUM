AOS.init({});

const space_list = new Swiper(".space_list", {
    slidesPerView: 1.7,
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        800: {
            slidesPerView: 3.2,
        },
        600: {
            slidesPerView: 2,
        },
    },
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
});


const publication_list = new Swiper(".publication_list", {
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

const program_list = new Swiper(".program_list", {
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

const memory02_list = new Swiper(".memory02_list", {
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
    /*     autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }, */
    speed: 1000,
});



$(".memory_tab button").eq(0).addClass("active");

$(".memory_tab button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".memory_sub_con>div").eq(num).fadeIn().siblings().hide();
});


$(".memory_con .memory_sub_con .memory02_list ul li .view, .memory_con .memory_sub_con .memory02_list ul li dl ").hide();
$(".memory02_list ul li").click(function () {
    $(this).find("dl,.view").fadeIn();
    $(this).siblings().find("dl,.view").fadeOut();
});



































