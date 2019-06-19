$(".tab_item").not(":first").hide();
$(".wrapper_blog .tab").click(function() {
	$(".wrapper_blog .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");