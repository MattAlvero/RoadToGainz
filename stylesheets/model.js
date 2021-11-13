
$("#navbar").ready(function () {
	$('a').click(function () {
		$('.item.active').removeClass("active");
		$(this).addClass("active");
		$(this).style.color = "green";
	});
});

$(document).ready(function () {
	$('a').click(function () {
		$('.item.active').removeClass("active");
		$(this).addClass("active");
	});

});