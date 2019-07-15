$(document).ready(function () {
    // console.log("YE");
    var isStop = false, isBind = false;

    //番茄鐘頁
    var timer2 = "25:00";
    $(".play_btn").click(function () {
        if ($(".play_btn").attr("src") === "images/play_white.svg") {
            $(".play_btn").attr("src", "images/pause_circle.svg");
            // $(".play_btn").attr("src", "images/pause_circle.svg");
            isStop = false;
            if (!isBind) {
                isBind = true;
                var interval = setInterval(function () {

                    if (!isStop) {
                        var timer = timer2.split(':');
                        //by parsing integer, I avoid all extra string processing
                        var minutes = parseInt(timer[0], 10);
                        var seconds = parseInt(timer[1], 10);
                        --seconds;
                        minutes = (seconds < 0) ? --minutes : minutes;
                        if (minutes < 0) clearInterval(interval);
                        seconds = (seconds < 0) ? 59 : seconds;
                        seconds = (seconds < 10) ? '0' + seconds : seconds;
                        //minutes = (minutes < 10) ?  minutes : minutes;
                        $('.f_time').text(minutes + ':' + seconds);
                        timer2 = minutes + ':' + seconds;
                    }
                }, 1000);
            }
            $(".cd").css("animation", "count_color 5s infinite");
        } else {
            isStop = true;
            $(".play_btn").attr("src", "images/play_white.svg");
            $(".cd").css("animation", "none");
        }

    });


    //休息頁
    var timer3 = "05:00";
    $(".play_btn_b").click(function () {
        if ($(".play_btn_b").attr("src") === "images/play_white.svg") {
            $(".play_btn_b").attr("src", "images/pause_circle.svg");
            // $(".play_btn").attr("src", "images/pause_circle.svg");
            isStop = false;
            if (!isBind) {
                isBind = true;
                var interval = setInterval(function () {

                    if (!isStop) {
                        var timer = timer3.split(':');
                        //by parsing integer, I avoid all extra string processing
                        var minutes = parseInt(timer[0], 10);
                        var seconds = parseInt(timer[1], 10);
                        --seconds;
                        minutes = (seconds < 0) ? --minutes : minutes;
                        if (minutes < 0) clearInterval(interval);
                        seconds = (seconds < 0) ? 59 : seconds;
                        seconds = (seconds < 10) ? '0' + seconds : seconds;
                        //minutes = (minutes < 10) ?  minutes : minutes;
                        $('.f_time_b').text(minutes + ':' + seconds);
                        timer3 = minutes + ':' + seconds;
                    }
                }, 1000);

            }
            $(".cd_b").css("animation", "count_color_b 5s infinite");
           
    
        } else {
            isStop = true;
            $(".play_btn_b").attr("src", "images/play_white.svg");
            $(".cd_b").css("animation", "none");
        }

       
    });



    $(".open_todo img").click(function () {
        if ($(".open_todo img").attr("src") === "images/eject_white_up.png") {
            $(".open_todo img").attr("src", "images/eject_white_down.png");
            $(".todo_ul").slideUp();
        }else {
            $(".open_todo img").attr("src", "images/eject_white_up.png");
            $(".todo_ul").slideDown();
        }

    });

    $(".open_done img").click(function () {
        if ($(".open_done img").attr("src") === "images/eject_white_up.png") {
            $(".open_done img").attr("src", "images/eject_white_down.png");
            $(".todo_down_ul").slideUp();
        }else {
            $(".open_done img").attr("src", "images/eject_white_up.png");
            $(".todo_down_ul").slideDown();
        }

    });

    $(".music_btn").click(function(){
        $(this).addClass("audio_active").parents("li").siblings().children(".music_btn").removeClass("audio_active");
      
    })

});