
// function abc() {
// 	$("#h2").html("Hello World!")
// }



$('.button').click(function(){
	// $('h2').css("color","red");
	// $('h2').css("font-size","50px");
	// $('h2').css("background","black");

	$('h2').css({
		"color": "red",
		"font-size": "10px",
		"background": "#00f"
	});

});

$('.another').click(function(){
	$('.box').toggleClass('black');

});
$('.navbar-nav li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
});



$('.right').click(function(){

	$('.pot').animate({
		left: "+=50px",
		top: "+=30px",
		width: "+=20px",
		height: "+=20px"
	},500);
});
$('.left').click(function(){

	$('.pot').animate({
		left: "-=50px",
		top: "+=30px"
	},500);
});


