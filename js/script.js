$(function () {
  $('.p-tabmenu__item').on('click', function () {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    $('.current').removeClass('current');
    const index = $(this).index();
    $('.p-infoList__unit').eq(index).addClass('current');
  });
});

$(function () {
  $('.p-storeList__ttl').on('click', function () {
    $(this).next().slideToggle(230);
    $(this).toggleClass('opened');
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    let w = $(window).width();
    let headerHight;
    if (w > 1146 ) {
      headerHight = 130;
    } else {
      headerHight = 30;
    }
    let speed = 550;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - headerHight;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});