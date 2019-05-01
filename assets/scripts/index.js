$(document).ready(function() {
	var myWidth = window.innerWidth - 50;
	$("#book").booklet({
		closed: true,
		autoCenter: true,
		height: window.innerHeight,
		width: myWidth
	})
	$(document).on("keydown", function(e) {
		if (e.which == 37 || e.which == 39) {
			$("#ayy").hide();
			$("#crown").hide();
			$("#roof").hide();
			$("#sweat").hide();
			$("#fire").hide();
			/*$("#send").show();
			$("#text").css("left", "600px");
			$("#moana").css("right", "900px");
			$("#typing").hide();
			$("#banana").hide();
			$("#snapchat").css("top", "-300px");*/
			$(".angle").addClass("hidden");
			$(".ground").addClass("hidden");
			$(".empty").addClass("hidden");
			$(".shadow").addClass("hidden");
			$("#finally").hide();
			$("#facebook").hide();
		}
	})
	$("#ayy-button").click(function() {
		$("#ayy").fadeIn();
	})
	$("#crown-button").click(function() {
		$("#crown").fadeIn();
	})
	$("#roof-button").click(function() {
		$("#roof").fadeIn();
	})
	$("#sweat-button").click(function() {
		$("#sweat").fadeIn();
	})
	$("#fire-button").click(function() {
		$("#fire").fadeIn();
	})
	$("#send").click(function() {
		$("#send").fadeOut();
		$("#text").animate({left: "0"});
		$("#typing").delay(1000).fadeIn();
		$("#moana").delay(4000).animate({right: "0"});
		$("#snapchat").delay(6000).animate({top: "0"});
	})
	$("#sender").click(function() {
		$("#banana").fadeIn();
	})
	$(".one").click(function() {
		$(".angle").removeClass("hidden");
		if (!($(".ground").hasClass("hidden")) && !($(".shadow").hasClass("hidden")) && !($(".empty").hasClass("hidden"))) {
			$("#finally").show();
		}
	})
	$(".two").click(function() {
		$(".ground").removeClass("hidden");
		if (!($(".angle").hasClass("hidden")) && !($(".shadow").hasClass("hidden")) && !($(".empty").hasClass("hidden"))) {
			$("#finally").show();
		}
	})
	$(".three").click(function() {
		$(".shadow").removeClass("hidden");
		if (!($(".angle").hasClass("hidden")) && !($(".ground").hasClass("hidden")) && !($(".empty").hasClass("hidden"))) {
			$("#finally").show();
		}
	})
	$(".four").click(function() {
		$(".empty").removeClass("hidden");
		if (!($(".angle").hasClass("hidden")) && !($(".shadow").hasClass("hidden")) && !($(".ground").hasClass("hidden"))) {
			$("#finally").fadeIn();
		}
	})
	$("#finally").click(function() {
		$("#facebook").fadeIn();
	})
})