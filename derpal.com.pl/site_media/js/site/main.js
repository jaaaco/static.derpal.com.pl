$(document).ready(function(){

// scrollowanie dokumentu do góry
	
	$('.scroll_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
});
