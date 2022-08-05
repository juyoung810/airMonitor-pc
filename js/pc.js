/* 토글 스위치따라 text 변경 */
$('#switch1').click(function handleSwClick() {
  if ($(this).is(':checked')) {
    $('.airControl .control-box li.last .con-num').text('ON')
    $('.airControl .control-box li.last .con-num').css('color', '#ffffff')
  } else {
    $('.airControl .control-box li.last .con-num').text('OFF')
    $('.airControl .control-box li.last .con-num').css('color', '#183882')
  }
})

/* 시뮬레이션 페이지 변경 */
$(document).ready(function () {
  $('#section03 .content01 a').click(function (e) {
    e.preventDefault()
    $('#wrap #container main').load($(this).attr('href'))
  })
})

/* 홈 페이지로 돌아가기 (resize 마치면 코드 실행되도록)*/
$(document).ready(function () {
  $('header a').click(function (e) {
    e.preventDefault()
    //$("body").load($(this).attr("href"));
    window.location.reload()
  })
})
