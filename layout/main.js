/* ========================
* ====== Bar ========
=========================== */
// $("html, body, .main").css({
//     height: $(window).height()
// });

/* ========================
* ====== Menu ========
=========================== */
$('.main').scroll($.debounce( 1000, true, function(){
    $('.menu').addClass('show');
} ) );
$('.main').scroll($.debounce( 1000, function(){
    $('.menu').removeClass('show');
} ) );

$('.main').scroll(function(event) {
	var scrollPos = $(document).scrollTop();
	console.log(scrollPos);
	$('.menu a').each(function() {
		var curLink = $(this);
		var refElement = $(curLink.attr('href'));

		// if (refElement.position().top <= scrollPos + 60) {
		if (refElement.position().top <= scrollPos) {
			$('.menu a').removeClass('active');
			curLink.addClass('active');

		} else {
			curLink.removeClass('active');
		}
	});
});
