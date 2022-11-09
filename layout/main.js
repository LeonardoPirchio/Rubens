/* ========================
* ====== Bar ========
=========================== */
// $("html, body, main").css({
//     height: $(window).height()
// });

/* ========================
* ====== Menu ========
=========================== */
$(window).scroll($.debounce( 1000, true, function(){
    $('#menu').addClass('show');
} ) );
$(window).scroll($.debounce( 1000, function(){
    $('#menu').removeClass('show');
} ) );

$(window).scroll(function(event) {
	var scrollPos = $(document).scrollTop();
	console.log(scrollPos);
	$('#menu a').each(function() {
		var curLink = $(this);
		var refElement = $(curLink.attr('href'));

		if (refElement.position().top <= scrollPos + 60) {
			$('#menu a').removeClass('active');
			curLink.addClass('active');

		} else {
			curLink.removeClass('active');
		}
	});
});
