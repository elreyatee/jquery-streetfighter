$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	}).mousedown(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
   		//console.log('mousedown');
   		// play hadouken sound
   		// show hadouken and animate it to the right of the screen
 	}).mouseup(function() {
 		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
    	//console.log('mouseup');
    	// ryu goes back to his ready position
 	});

	/*$(".ryu").on("mouseenter", function() {
		$(this).find(".ryu-still").hide();
		$(this).find(".ryu-ready").show();
	}).on("mouseleave", function(){
		$(this).find(".ryu-still").show();
		$(this).find(".ryu-ready").hide();

	});*/
});