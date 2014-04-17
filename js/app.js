$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('#ready').addClass("selected");
	}).mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('#ready').removeClass("selected");
		$('#fireball').removeClass("selected");
	}).mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('#ready').removeClass("selected");
		$('.ryu-throwing').show();
		$('#fireball').addClass("selected");
		$('.hadouken').finish().show().animate(
			{'left': '800px'}, 
			700, function () {
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
	}).mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});

	$(document).keydown(function(event) {
 		if(event.which == 88) {
 			$("body [class*='selected']").removeClass("selected");
 			$('.ryu-cool').show();
 			$('#victory').addClass("selected");
 			$('.ryu-still').hide();
 			$('.ryu-ready').hide();
		}
	}).keyup(function(event){
		if(event.which == 88) {
 			$('.ryu-cool').hide();
 			$('.ryu-throwing').hide();
 			$('.ryu-ready').hide();
 			$('.ryu-still').show();
 			$('#victory').removeClass("selected");
		}
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}