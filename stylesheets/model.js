

$("#navbar").ready(function () {
	$('a').click(function () {
		$('.item.active').removeClass("active");
		$(this).addClass("active");
		$(this).css('color', 'green');
	});
});

$("div.four.column.wide a.item").click(function () {


	if (!this.classList.contains("active")) {
		document.getElementById('placeholder').style.display = "none";
	}

})


$('ul').on('click', 'li', function () {
	$(this).toggleClass("completed");
});

//click on X to delete 'todo'
$('ul').on('click', 'span', function (event) {
	$(this).parent().fadeOut(1000, function () {
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		//create a new 'li' and add to 'ul'
		$('ul').append('<li><span><i class="fa fa-trash"></i></span>' + todoText + '</li>');

	}
});

$('.fa-plus').click(function () {
	$("input[type='text']").fadeToggle();
});

function showInput() {
	var x = document.getElementById("inputGoal");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

$('.tabular.menu .item').tab();

$(document).ready(function () {
	$("#strengthButton").click(function () {
		if ($("#strengthSubButtons").css('display') == 'none'){
			document.getElementById('strengthSubButtons').style.display = 'inline-flex';
			document.getElementById('strengthChartHolder').style.display = 'block';
		} else {
			document.getElementById('strengthSubButtons').style.display = 'none';
			document.getElementById('strengthChartHolder').style.display = 'none';
		}
	});
});