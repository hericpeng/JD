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

//= require jquery_ujs
//= require turbolinks
//= require bootstrap/alert
//= require bootstrap-sprockets
//= require bootstrap/dropdown
//= require wow.min
//= require_tree .

$(document).ready(function() {
    new WOW().init();
})


$(window).scroll(function() {
    if ($(this).scrollTop() > 125) {
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
