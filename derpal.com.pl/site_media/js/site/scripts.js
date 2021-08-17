$(document).ready(function(){
 
	$('.banner-box .image').slideUp(0);
	
	$('.banner-box').mouseenter(function(){
		$('.image',this).stop().slideDown(250);
	}).mouseleave(function(){
		$('.image',this).stop().slideUp(250);
	});
	
	if ($.browser.msie) {$('.wysiwyg img, .section_item img').css('box-shadow','none').css('outline','2px solid #E2E2E2');}
	
});
