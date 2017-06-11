// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap/alert
//= require bootstrap-sprockets
//= require bootstrap/dropdown
//= require wow.min
//= require_tree .
//= require turbolinks

$(document).ready(function() {
    new WOW().init();
})

// navbar变动效果======
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#navbar').addClass('show_move')
    } else {
        $('#navbar').removeClass('show_move')
    }
})


//======提示消息自动消失=======
$(document).on('turbolinks:load', function() {
    // 收起通知
    slideUpAlert();
});

// 收起通知信息
function slideUpAlert() {
    // 消息停留2000毫秒（2秒），消失动画时间250毫秒
    $(".alert").delay(2000).slideUp(250, function() {
        $(this).remove();
    });
}

//======商品页面"+ -"按钮=======
$(document).on('turbolinks:load', function() {
  /*增加数量*/
  $("#quantity-plus").click(function(e) {
    var num = parseInt($("#quantity-input").val()) + 1;
    $("#quantity-minus").removeClass("disabled");
    $("#quantity-input").val(num);
    e.preventDefault();
  });

  /*减少数量*/
  $("#quantity-minus").click(function(e) {
    var num = parseInt($("#quantity-input").val());
    if (num > 1) {
      $("#quantity-input").val(num -= 1);
      $("#quantity-plus").removeClass("disabled");
    }
    if (num <= 1) {
      $("#quantity-minus").addClass("disabled");
    }
    e.preventDefault();
  });
});

//======快速回到页面顶端功能=======
$(window).scroll(function () {
  if ($(this).scrollTop() > 700) {
    $(".goTop").fadeIn(100);
  } else {
    $(".goTop").fadeOut(200);
  }

    $(".goTop").click(
    function() {
      $('html,body').animate({scrollTop: 0}, 300);
    });
})
//======快速回到页面顶端功能=======


// // 下拉时显示「顶部导航栏」和「侧边栏」
// var $header = $('.header')
// var $sidebar = $('#sidebar')
// var $category_sidebar = $('.category_sidebar')
// var $lp_navbar = $('.lp-navbar')
//
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 500) {
//     $sidebar.fadeIn()
//     $category_sidebar.fadeIn() // 慢慢地显示侧边栏
//   } else {
//     $sidebar.fadeOut()
//     $category_sidebar.fadeOut() // 慢慢地隐藏侧边栏
//   }
//
//   if ($(this).scrollTop() > 120) {
//     if ($header.is(':animated')) {
//       return false
//     }
//     $('.header_placeholder').show() // 显示「用来占位」的header
//     $header.addClass('header_fixed') // 让导航栏固定在顶部
//     $header.stop().animate({top: 0}, 600) // 在600ms内，慢慢地出来
//   } else {
//     $('.header_placeholder').hide()
//     $header.removeClass('header_fixed')
//     $header.css({top: -80})
//   }
// })
