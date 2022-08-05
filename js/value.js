/* 화면 로딩 시 silder 값 반영 */
$(document).ready(function () {
  // console.log($("#simul-con li .slider").length);
  for (var i = 0; i < $("#simul-con li .slider").length; i++) {
    var n_this = $("#simul-con li .slider")[i];
    var val = (n_this.value / n_this.max) * 100;
    //console.log(val);
    $("#simul-con li .slider")
      .eq(i)
      .css(
        "background",
        "linear-gradient(to right, #00d1ff 0%, #00d1ff " +
          val +
          "%, #003662 " +
          val +
          "%, #003662 100%)"
      );
  }
});
/* 슬라이더 채우기 왼쪽 배경 변경 */
$("#simul-con li .slider").on("input", function () {
  var index = $("#simul-con li .slider").index(this);
  $("#simul-con .con-re-num").eq(index).text(this.value);
  var val = (this.value / this.max) * 100;
  $(this).css(
    "background",
    "linear-gradient(to right, #00d1ff 0%, #00d1ff " +
      val +
      "%, #003662 " +
      val +
      "%, #003662 100%)"
  );
});

/* 설정 + 버튼 (0 ~ 100) */
$(".control-box .con-plus").on("click", function () {
  var index = $(".control-box .con-plus").index(this);
  //console.log(index);

  var c_num = parseInt($(".control-box .con-item .con-num").eq(index).text());
  /* 현재 지수 */
  if (c_num < 100) {
    $(".control-box .con-item .con-num")
      .eq(index)
      .text(++c_num);
  }
});

/* 설정 - 버튼 (0 ~ 100) */
$(".control-box .con-minus").on("click", function () {
  var index = $(".control-box .con-minus").index(this);
  //console.log(index);

  var c_num = parseInt($(".control-box .con-item .con-num").eq(index).text());
  /* 현재 지수 */
  if (c_num > 0) {
    $(".control-box .con-item .con-num")
      .eq(index)
      .text(--c_num);
  }
});

/* drop option 선택 */
$(document).ready(function () {
  $("#section02 .selectClass .level").click(function () {
    $("#section02 .selectClass .level ul.drop-opt").toggle(0, 0, 0);
  });
});
/* drop option 선택 */
$(document).ready(function () {
  $("#section02 .selectClass .class").click(function () {
    $("#section02 .selectClass .class ul.drop-opt").toggle(0, 0, 0);
  });
});
/* 학년 선택 */
$("#section02 .selectClass .level li").click(function () {
  var index = $("#section02 .selectClass .level li").index(this);
  //console.log(index);
  $("#section02 .selectClass .level .drop-content").text($(this).text());
});
/* 반 선택 */
$("#section02 .selectClass .class li").click(function () {
  var index = $("#section02 .selectClass .class li").index(this);
  //console.log(index);
  $("#section02 .selectClass .class .drop-content").text($(this).text());
});

/* % 따른 그래프 수정 */
/* drop option 선택 */
$(document).ready(function () {
  var per = parseInt($(".dustState .fine .pie-info .air-state-num").text());
  console.log(per);
  $(".dustState .fine circle").css("stroke-dashoffset", 100 - per);
  /* 색 변화 감지 */
  if (per <= 25) {
    $(".dustState .fine .pie-info .air-state").text("좋음");
    $(".dustState .fine .pie-info .air-state-num").addClass("font-blue");
    $("#myGradient1 stop").addClass("grad-blue-1");
    $("#myGradient1 .deep").addClass("grad-blue-2");
    $("#myGradient1").css("gradientTransform", "rotate(180) rotate(-180)");
  } else if (per <= 50) {
    $(".dustState .fine .pie-info .air-state").text("보통");
    $(".dustState .fine .pie-info .air-state-num").addClass("font-green");
    $("#myGradient1 stop").addClass("grad-green-1");
    $("#myGradient1 .deep").addClass("grad-green-2");
    $("#myGradient1").css("gradientTransform", "rotate(180) rotate(-180)");
  } else if (per <= 75) {
    $(".dustState .fine .pie-info .air-state").text("나쁨");
    $(".dustState .fine .pie-info .air-state-num").addClass("font-orange");
    $("#myGradient1 stop").addClass("grad-orange-1");
    $("#myGradient1 .deep").addClass("grad-orange-2");
    $("#myGradient1").css("gradientTransform", "rotate(180) rotate(-120)");
  } else if (per <= 100) {
    $(".dustState .fine .pie-info .air-state").text("매우나쁨");
    $(".dustState .fine .pie-info .air-state-num").addClass("font-red");
    $("#myGradient1 stop").addClass("grad-red-1");
    $("#myGradient1 .deep").addClass("grad-red-2");
    $("#myGradient1").css("gradientTransform", "rotate(180) rotate(-120)");
  }
});

$(document).ready(function () {
  var per = parseInt(
    $(".dustState .ultra-fine .pie-info .air-state-num").text()
  );
  console.log(per);
  $(".dustState .ultra-fine circle").css("stroke-dashoffset", 100 - per);
  /* 색 변화 감지 */
  if (per <= 25) {
    $(".dustState .ultra-fine .pie-info .air-state").text("좋음");
    $(".dustState .ultra-fine .pie-info .air-state-num").addClass("font-blue");
    $("#myGradient2 stop").addClass("grad-blue-1");
    $("#myGradient2 .deep").addClass("grad-blue-2");
    $("#myGradient2").css("gradientTransform", "rotate(180) rotate(-180)");
  } else if (per <= 50) {
    $(".dustState .ultra-fine .pie-info .air-state").text("보통");
    $(".dustState .ultra-fine .pie-info .air-state-num").addClass("font-green");
    $("#myGradient2 stop").addClass("grad-green-1");
    $("#myGradient2 .deep").addClass("grad-green-2");
    $("#myGradient2").css("gradientTransform", "rotate(180) rotate(-180)");
  } else if (per <= 75) {
    $(".dustState .ultra-fine .pie-info .air-state").text("나쁨");
    $(".dustState .ultra-fine .pie-info .air-state-num").addClass(
      "font-orange"
    );
    $("#myGradient2 stop").addClass("grad-orange-1");
    $("#myGradient2 .deep").addClass("grad-orange-2");
    $("#myGradient2").css("gradientTransform", "rotate(180) rotate(-120)");
  } else if (per <= 100) {
    $(".dustState .ultra-fine .pie-info .air-state").text("매우나쁨");
    $(".dustState .ultra-fine .pie-info .air-state-num").addClass("font-red");
    $("#myGradient2 stop").addClass("grad-red-1");
    $("#myGradient2 .deep").addClass("grad-red-2");
    $("#myGradient2").css("gradientTransform", "rotate(180) rotate(-120)");
  }
});
