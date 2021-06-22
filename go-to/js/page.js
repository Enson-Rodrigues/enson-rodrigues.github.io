
function equalHeight(abc){
	var temp, initialHeight;
	initialHeight = 0;

	$(abc).each(function(){
		temp = $(this).innerHeight();
			
			console.log(temp);
		if(temp > initialHeight) {
			initialHeight = temp;
		}
	});
	$(abc).innerHeight(initialHeight);
		console.log(initialHeight);
}




$(document).ready(function() {
	equalHeight(".innerIconImage h2");

	// $('.parallax-window').parallax({imageSrc: '/images/heroBg0.png'});
	// Sticky Nav
	// var everyScroll = $("#check").scrollTop();
	// console.log(everyScroll);
	
	// var res = $("#check").position().top;
	// // var res = $("#check").offset().top;
	// // if(res )
	// console.log("position top: "+res);


	// var res = $(window).scroll();
	// console.log(res);


})
    var res = $("#check").offset().top;

$(window).scroll(function() {
    var height = $(window).scrollTop();
    //console.log("Current height: "+height);

    // var res = $("#check").offset().top;
    console.log("position top: "+res);

    if(height >= res) {
    	$("#check").addClass( "fixed" );
    } else {
    	$("#check").removeClass( "fixed" );
    }
});

 

