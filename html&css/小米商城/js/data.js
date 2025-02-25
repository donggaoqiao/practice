var XmImg = ["X1.png", "X2.png", "X3.png", "X4.png", "X5.png", "X6.png"];
var XmName = ["Xiaomi Civi 12", "Xiaomi MIX Fold 2", "Xiaomi 12s Ultra 2", "Xiaomi 12S", "Xiaomi 12 Pro 天玑版"];
var XmRmb = ["2399元起", "8999元起", "5999元起", "4399元起", "3699元起", "2999元起"];

var RmImg = ["r1.png", "r2.png", "r3.png", "r4.png", "r5.png", "r6.png"];
var RmName = [
    "Redmi Note 12 5G",
    "Redmi Note 12 Pro",
    "Redmi Note 12 Pro+",
    "Redmi K50 至尊版",
    "Redmi Note 11T Pro+",
    "Redmi Note 11T Pro",
];
var RmRmb = [
    "1199元起",
    "1699元起",
    "2099元起",
    "2699元起",
    "1899元起",
    "1569元起",
];

var TvImg = ["d1.png", "d2.png", "d3.png", "d4.png", "d5.png", "d6.png"];
var TvName = [
    "Redmi智能电视X55 2022",
    "Redmi智能电视X65 2022",
    "小米电视6 65”  OLED",
    "小米电视 大师  77”  OLED",
    "小米透明电视",
    "小米电视 大师 65英寸OLED",
];
var TvRmb = [
    "1999元",
    "2699元",
    "6699元",
    "17999元",
    "49999元",
    "8999元",
];

var PcImg = ["pc1.png", "pc2.png", "pc2.png", "pc2.png", "pc3.png", "pc2.png"];
var PcName = [
    "Xiaomi Book Air 13",
    "Redmi G 游戏币 锐龙版 R5",
    "Redmi G Pro 游戏本 2022",
    "Redmi Pro 游戏本 锐龙版 R7",
    "Xiaomi Book Pro 14 锐龙版",
    "Redmi G 游戏本 2022",
];
var PcRmb = [
    "5999元",
    "6299元",
    "8999元",
    "8799元",
    "6399元",
    "7499元",
];

var PbImg = ["pb1.png", "pb2.png", "pb3.png", "pb4.png", "pb5.png"];
var PbName = [
    "Redmi Pad",
    "小米平板5 Pro 12.4",
    "小米平板5",
    "小米平板5 Pro 5G",
    "小米平板5 Pro",
];
var PbRmb = [
    "1099元",
    "2699元",
    "1699元",
    "3349元",
    "2099元",
];

var JjImg = ["kt1.png", "kt2.png", "jiqiren.png"];
var JjName = [
    "小米空调 1.5匹新1级能效",
    "新风空调 立式3匹",
    "米家扫拖机器人1T",

];
var JjRmb = [
    "1999元",
    "6999元",
    "999元",
];

var WifiImg = ["wifi1.png", "wifi2.png", "wifi3.png", "wifi4.png", "wifi5.png", "wifi6.png"];
var WifiName = [
    "Redmi 电竞路由器 AX5400",
    "小米路由器AX6000",
    "小米路由器AX9000",
    "Xiaomi HomeWIFI 三频 Mesh 路由器",
    "小米路由器4A 千兆版",
    "查看全部<br>小米路由器",
];
var WifiRmb = [
    "549元",
    "499元",
    "999元",
    "1399元",
    "129元",
];

var imgList = [];
var nameList = [];
var rmbList = [];

//给导航下拉菜单效果显示图片等信息的内容

function getData() {
    $(".navListCon").empty();
    // console.log("---------------------");
    for (var i = 0; i < imgList.length; i++) {
        var goodDiv = $("<div class='goodsDiv'></div>");
        $(".navListCon").append(goodDiv);
        //$(".navListGon").append("<div class = 'goodsDiv'></div>");
        var goodsImg = $("<img class = 'goodsImg' />");
        goodDiv.append(goodsImg);
        var goodsName = $("<p class = 'goodsName'></p>");
        goodDiv.append(goodsName);
        var goodsRmb = $("<p class='goodsRmb'></p>");
        goodDiv.append(goodsRmb);
    }
}

$(".navUl li").mouseenter(function () {
    var index = $(this).index();
    if (index == 0) {
        imgList = XmImg;
        nameList = XmName;
        rmbList = XmRmb;
    } else if (index == 1) {
        imgList = RmImg;
        nameList = RmName;
        rmbList = RmRmb;
    } else if (index == 2) {
        imgList = TvImg;
        nameList = TvName;
        rmbList = TvRmb;
    } else if (index == 3) {
        imgList = PcImg;
        nameList = PcName;
        rmbList = PcRmb;
    } else if (index == 4) {
        imgList = PbImg;
        nameList = PbName;
        rmbList = PbRmb;
    } else if (index == 5) {
        imgList = JjImg;
        nameList = JjName;
        rmbList = JjRmb;
    } else if (index == 6) {
        imgList = WifiImg;
        nameList = WifiName;
        rmbList = WifiRmb;
    }
    getData();
    for (var i = 0; i < imgList.length; i++) {
        var box = $(".goodsDiv").eq(i);
        box.children(".goodsImg").attr("src", "imgs/" + imgList[i]);
        box.children(".goodsName").html(nameList[i]);
        box.children(".goodsRmb").html(rmbList[i]);
    }
});



var ssgImg = ["sj1.png", "sj2.png", "sj3.png", "sj4.png",
    "sj5.png", "sj6.png", "sj7.png", "sj8.png",
    "sj9.png", "sj10.png", "sj11.png", "sj12.png",
    "sj13.png", "sj14.png", "sj15.png", "sj16.png",
    "sj17.png", "sj18.png", "sj19.png", "sj20.png",
    "sj21.png", "sj22.png", "sj23.png", "sj24.png",
];
var ssgName = ["Redmi Note 12 Pro+", "Xiaomi Civi 2", "Redmi Note 11T Pro系列", "Xiaomi 12 Pro",
    "Redmi Note 12 Pro", "Xiaomi MIX Fold 2", "Xiaomi Civi 1S", "Xiaomi 12",
    "Redmi Note 12 5G", "Redmi K50 至尊版", "黑鲨5 Pro", "Xiaomi 11 青春活力版",
    "Xiaomi 12S Pro", "Xiaomi 12S Ultra", "Redmi 10A", "Note 11 Pro系列",
    "Xiaomi 12S", "Xiaomi 12 Pro 天玑版", "Redmi K50", "Redmi Note 11 4G",
    "Redmi Note 11 5G", "Redmi Note 11T Pro系列", "K50 电竞版", "Xiaomi Civi"
];

var sswImg = ["ds1.png", "ds2.png", "ds3.png", "ds4.png",
    "ds5.png", "ds6.png", "ds7.png", "ds8.png",
    "ds9.png", "ds10.png", "ds11.png", "ds12.png",
    "ds13.png", "ds14.png", "ds15.png", "ds16.png",
    "ds17.png", "ds18.png", "ds19.png", "ds20.png",
    "ds21.png", "ds22.png", "ds23.png", "ds24.png",
];
var sswName = ["Redmi X65 2022款", "小米电视6至尊版", "小米电视ES75 2022款", "米家激光投影仪",
    "小米拍拍4K高清投屏器", "小米电视6至尊版", "金属全面屏电视", "Redmi MAX",
    "Redmi X55 2022款 ", "小米电视6至尊版 ", "小米电视 大师 OLED", "小米电视5",
    "小米电视6 55寸 OLED", "小米电视ES43 2022款", "小米电视 4A 60", "小米电视4A",
    "小米电视6 65寸 OLED", "小米电视ES55 2022款", "Redmi智能电视X55", "小米电视4S",
    "小米电视 大师 70寸 OLED", "小米电视ES65 2022款", "小米全面屏电视", "激光投影电视",
];

//左移菜单内容
var ssImg = [];
var ssName = [];

function tupian() {
    $(".leftaa").empty();
    for (var i = 0; i < ssImg.length; i++) {
        var doomDiv = $("<div class='doomDiv'></div>");
        $(".leftaa").append(doomDiv);
        var doomImg = $("<img class='doomImg' src='imgs/" + ssgImg[i] + "' />");
        doomDiv.append(doomImg);
        var doomName = $("<span class='doomName'>" + ssgName[i] + "</span>");
        doomDiv.append(doomName);
    }
}

$(".leftList li").mouseenter(function () {
    console.log("============")
    var index = $(this).index();
    if (index == 0) {
        ssImg = ssgImg;
        ssName = ssgName;
    } else if (index == 1) {
        ssImg = sswImg;
        ssName = sswName;
    } else if (index == 2) {

    }
    tupian();
    for (var i = 0; i < ssImg.length; i++) {
        var box = $(".doomDiv").eq(i);
        box.children(".doomImg").attr("src", "imgs/" + ssImg[i]);
        box.children(".doomName").text(ssName[i]);
    }
});

var smImg = ["gt2.png", "gt3.png", "gt4.png", "gt5.png",
    "gt6.png", "gt7.png", "gt8.png", "gt9.png"];

var smName = ["Redmi Note 12 5G", "Redmi Note 12 Pro", "Redmi Note 12 Pro+",
    "Redmi Note 11 5G", "Redmi K50", "Redmi Note 11T Pro", "Xiaomi 12S Pro",
    "Redmi K50 至尊版"];

var smTxt = [
    "三星 OLED 护眼屏｜骁龙 5G 芯|5000mAh 电量", " IMX766 防抖相机|OLED 柔性直屏|67W 闪充",
    "2亿超清防抖相机|OLED 柔性直屏", "5000mAh大电量", "2K直屏的狠旗舰", "天玑8100|真旗舰芯",
    "骁龙8+ 旗舰处理器 | 徕卡影像", "骁龙8+ |1.5K 高清直屏"];

var smRmb = ["1199", "1699", "2199", "1199", "2299", "1569", "4399", "2999"];

goodsStart();
function goodsStart() {
    for (var i = 0; i < smImg.length; i++) {
        var gDiv = $("<div class='gDiv'></div>");
        $(".goodsBox").append(gDiv);
        var gImg = $("<img class='gImg' src='imgs/" + smImg[i] + "' />");
        gDiv.append(gImg);
        var gName = $("<p class='gName'>" + smName[i] + "</p>");
        gDiv.append(gName);
        var gTxt = $("<p class='gTxt'>" + smTxt[i] + "</p>");
        gDiv.append(gTxt);
        var gRmb = $("<p class='gRmb'>" + smRmb[i] + "</p>");
        gDiv.append(gRmb);
    }
};

var jkImg = ["t1.png", "t2.png", "t3.png", "t4.png", "t5.png", "t6.png"];

var jkName = ["保障服务", "企业团购", "F码通道", "米粉卡", "以旧换新", "话费充值"];

adcStarat();
function adcStarat() {
    for (var i = 0; i < jkImg.length; i++) {
        var wDiv = $("<div class='wDiv'></div>");
        $(".adcBox").append(wDiv);
        var wImg = $("<img class='wImg' src='imgs/" + jkImg[i] + "' />");
        wDiv.append(wImg);
        var wName = $("<p class='wName'>" + jkName[i] + "</p>");
        wDiv.append(wName);
    }
}