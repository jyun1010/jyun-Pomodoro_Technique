$(document).ready(function () {

    // var isStop = false, isBind = false;

    //番茄鐘頁

    $(".play_btn").click(function () {
        if ($(".play_btn").attr("src") === "images/play_white.svg") {
            $(".play_btn").attr("src", "images/pause_circle.svg");
           
            $(".cd").css("animation", "count_color 5s infinite");
        } else {
      
            $(".play_btn").attr("src", "images/play_white.svg");
            $(".cd").css("animation", "none");
        }

    });


    //休息頁

    $(".play_btn_b").click(function () {
        if ($(".play_btn_b").attr("src") === "images/play_white.svg") {
            $(".play_btn_b").attr("src", "images/pause_circle.svg");
            $(".cd_b").css("animation", "count_color_b 5s infinite");

        } else {
        
            $(".play_btn_b").attr("src", "images/play_white.svg");
            $(".cd_b").css("animation", "none");
        }


    });



    $(".open_todo img").click(function () {
        if ($(".open_todo img").attr("src") === "images/eject_white_up.png") {
            $(".open_todo img").attr("src", "images/eject_white_down.png");
            $(".todo_ul").slideUp();
        } else {
            $(".open_todo img").attr("src", "images/eject_white_up.png");
            $(".todo_ul").slideDown();
        }

    });

    $(".open_done img").click(function () {
        if ($(".open_done img").attr("src") === "images/eject_white_up.png") {
            $(".open_done img").attr("src", "images/eject_white_down.png");
            $(".todo_down_ul").slideUp();
        } else {
            $(".open_done img").attr("src", "images/eject_white_up.png");
            $(".todo_down_ul").slideDown();
        }

    });

    $(".music_btn").click(function () {
        $(this).addClass("audio_active").parents("li").siblings().children(".music_btn").removeClass("audio_active");

    })

});