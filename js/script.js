$(".class-main").click(function(){
	$(".secondul", this).toggleClass("dropdown");
	$(this).toggleClass("clicked");
});
$(".search").focus();