/**
 * Created by mc815 on 07/11/2016.
 */
$(".BBB_news").click(function() {
    $(this).addClass("active");
});

$(".BBB_main").not(":first").hide();


$('.qweqw').on('click', function(){
	console.log('QWER');

});


$(".BBB_news").click(function() {
    $(".BBB_news").removeClass("active").eq($(this).index()).addClass("active");
    $(".BBB_main div").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
