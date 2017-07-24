// オプションを指定してSkipprの実行
$("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'slide',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'block',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : false,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 5000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
});


$(function() {
    $('li a img').hover(
        function () {$(this).stop().animate({'marginTop':'-33px'}, 300);},
        function () {$(this).stop().animate({'marginTop':'0px'}, 300);}
    );
});



$(function(){
    $(".menu").click(function(){
        $(".menu1").toggleClass("menuclick1")
    });
    $(".menu").click(function(){
        $(".menu2").toggleClass("menuclick2")
    });
    $(".menu").click(function(){
        $(".menu3").toggleClass("menuclick3")
    }); 
});

jQuery(function($){
            $('.menu').click(function(){
             if ($('#menu').css('display') == 'none') {
            $('#menu').slideDown('fast');
            } else {
             $('#menu').slideUp('fast');
             }
            });
        });

$(function(){
    $('.button').hover(
        function(){$(this).fadeTo('normal', 0.7);},
        function(){$(this).fadeTo('normal', 1.0);}
    );
});
