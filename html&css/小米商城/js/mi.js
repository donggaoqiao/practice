$(".car").mouseenter(function () {
    $(".carlist").stop().slideDown(200);
    $(".car img").attr("src", "imgs/点购物车.png");
    $(".car span").css("color", "#ff6700");
    $(".car").css("background", "#fff");
}).mouseleave(function () {
    $(".carlist").stop().slideUp(200);
    setTimeout(function () {
        $(".car img").attr("src", "imgs/购物车空.png");
        $(".car span").css("color", "#b0b0b0");
        $(".car").css("background", "#424242");
    })
})
$(".app").mouseenter(function () {
    $(".appBox").stop().slideDown(400);

}).mouseleave(function () {
    $(".appBox").stop().slideUp(400);
})

$(".navUl li").mouseenter(function () {
    var index = $(this).index();
    if (index < 7) {
        $(".navList").stop().slideDown(400);
    } else {
        $(".navList").stop().slideUp(400);
    }

}).mouseleave(() => {
    $(".navList").stop().slideUp(200);
})

$(".navList").mouseenter(() => {
    $(".navList").stop().slideDown(200);
}).mouseleave(() => {
    $(".navList").stop().slideUp(200);
})

var index = 0;
var nextIndex = 0;
var timer;
function animationPlay() {
    // $(".carouseBox img").eq(index).fadeOut(500);
    // $(".carouseBox img").eq(nextIndex).fadeIn(500);
    if (index < nextIndex) {
        $(".carouseBox img").eq(index).stop().animate({ left: "-1226px" }, 500);
        $(".carouseBox img")
            .eq(nextIndex)
            .stop()
            .css("left", "1226px")
            .animate({ left: "0px" }, 500);
    } else if (index > nextIndex) {
        $(".carouseBox img").eq(index).stop().animate({ left: "1226px" }, 500);
        $(".carouseBox img")
            .eq(nextIndex)
            .stop()
            .css("left", "-1226px")
            .animate({ left: "0px" }, 500);
    }
    $(".carouseBoxList li")
        .eq(nextIndex)
        .stop()
        .addClass("one")
        .siblings()
        .removeClass("one");
}
autoPlay();
function autoPlay() {
    timer = setInterval(function () {
        if (nextIndex >= 3) {
            nextIndex = 0;
            index = -1;
        } else {
            nextIndex++;
        }
        animationPlay();
        index = nextIndex;
    }, 2000);
}

$(".carouseBoxList li").click(function () {
    clearInterval(timer);
    nextIndex = $(this).index();
    animationPlay();
    index = nextIndex;
    autoPlay();
})

$(".leftBtn").click(function () {
    if (nextIndex > 0) {
        nextIndex--;
    } else {
        nextIndex = 3;
        index = 4;
        $(".carouseBox img")
        .eq(0)
        .css("left", "0px")
        .stop()
        .animate({ left: "1226px" }, 500);
    }
    animationPlay();
    index = nextIndex;
    clearInterval(timer);
    autoPlay();
})

$(".rightBtn").click(function () {
    if (nextIndex < 3) {
        nextIndex++;
    } else {
        nextIndex = 0;
        index = -1;
    }
    animationPlay();
    index = nextIndex;
    clearInterval(timer);
    autoPlay();
})

//导航左移菜单
$(".leftList li").mouseenter(()=>{
    //获取当前下标
    var index=$(".leftList li").index();    //.leftList li可以用this代替
    if(index<10){
        $(".leftss").stop().slideDown(0);
    }else{
        $(".leftss").stop().slideUp(0);
    }
})
.mouseleave(()=>{
    $(".leftss").stop().slideUp(0);
})
//鼠标穿过div
$(".leftss").mouseenter(()=>{
    $(".leftss").stop().slideDown(0);
})
.mouseleave(()=>{
    $(".leftss").stop().slideUp(0);
})

// $(".adpBox").mouseenter(()=>{
//     $(".adpBox").stop().slideDown(0);
// })
// .mouseleave(()=>{
//     $(".adpBox").stop().slideUp(0);
// })
