window.onload = function() {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    /*当音乐播放完时，图标自动停止转动*/
    audio.addEventListener("ended",function () {
        music.setAttribute("class","")
    },false);

    /*点击音乐图标，控制音乐播放效果*/
    music.addEventListener("touchstart",function(event) {
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
            /*  this.style.animationPlayState = "running";兼容不好，ipone6P以上才能用，安卓不行*/
            /*  this.style.webkitanimationPlayState = "running";ipone6以上能用，安卓不行*/
        }else {
            audio.pause();
            this.setAttribute("class","");
            /* this.style.animationPlayState = "paused";*/
            /* this.style.webkitanimationPlayState = "paused";*/
        }
    },false)

    /*点击屏幕换屏*/
    page1.addEventListener("touchstart",function(event){
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "none";
        /*自动跳转下一页*/
     /*   page3.style.top = "100%"
        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500);*/
    },false)

    page2.addEventListener("touchstart",function(event){
        page1.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "block";
    },false)

    page3.addEventListener("touchstart",function(event){
        page1.style.display = "block";
        page2.style.display = "none";
        page3.style.display = "none";
    },false)
}

