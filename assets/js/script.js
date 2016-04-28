$(document).ready(function(){
//worked side	
	$("#worked").click(function(){
		$(".title").fadeOut();
		$(".sc_right").addClass("sc_old_right");
		$(".sc_left").addClass("sc_new_left");
		$(".home").addClass("home_left");
		$(".work_container").css("display", "block");


	});
	$(".sc_right").hover(function(){
		if($(".sc_right").hasClass("sc_old_right")){
			$(".sc_left").css("left","-50px");
			$(".home").css("left","-50px");

		}
	}, function(){
		$(".sc_left").css("left","0px");
		$(".home").css("left","0px");

	});

	$(".sc_right").click(function(){
		if($(".sc_right").hasClass("sc_old_right")){
			$(".title").fadeIn();
			$(".sc_right").removeClass("sc_old_right");
			$(".sc_left").removeClass("sc_new_left");
			$(".home").removeClass("home_left");
			$(".work_container").css("display", "none");

		}
	});
//played side
	$("#played").click(function(){
		$(".title").fadeOut();
		$(".sc_right").addClass("sc_new_right");
		$(".sc_left").addClass("sc_old_left");
		$(".home").addClass("home_right");
		$(".play_container").css("display", "block");

	});

	$(".sc_left").hover(function(){
		if($(".sc_left").hasClass("sc_old_left")){
			$(".sc_right").css("right","-50px");
			$(".home").css("right","-50px");
		}
	}, function(){
		$(".sc_right").css("right","0px");
		$(".home").css("right","0px");

	});

	$(".sc_left").click(function(){
		if($(".sc_left").hasClass("sc_old_left")){
			$(".title").fadeIn();
			$(".sc_left").removeClass("sc_old_left");
			$(".sc_right").removeClass("sc_new_right");
			$(".home").removeClass("home_right");
			$(".play_container").css("display", "none");

		}
	});
	
});