/* ========================
* ====== Navegador ========
=========================== */
// const navSlide = () => {
//     const burger = document.querySelector('#burger');
//     const navegador = document.querySelector('#navegador');
//     const navLinks = document.querySelectorAll('#navegador li');

//     burger.addEventListener('click', () => {
//         burger.classList.toggle('burLigado');
//         navegador.classList.toggle('navLigado');

//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             } else {
//                 link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//             }
//         });

//         $('#navegador a').click(function() {
//             $(burger).removeClass('burLigado');
//             $(navegador).removeClass('navLigado');

//             navLinks.forEach((link, index) => {
//                 link.style.animation = '';
//             });
//         });
//     });
// }

// navSlide();

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
