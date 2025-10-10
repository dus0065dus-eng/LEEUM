
$(".mgnb_wrap").hide();
$("#header .btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
});
$(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
});

$("#header .search").hide();
$("#header .btn_search").click(function () {
    $(this).toggleClass("active");
    $("#header .search").fadeToggle();
    $("#header").toggleClass("active");
});

$("#header .gnb>li").mouseenter(function () {
    $("#header").addClass("active").stop();
});

$("#header .gnb>li").mouseleave(function () {
    $("#header").removeClass("active");
});















































