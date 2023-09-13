$(function doMagic () {

	// Прокрутка вниз
	 $('.go').click(function () {
        elementClick = $(this).attr('href');        
        destination = $(elementClick).offset().top;
        $('body,html').animate({ scrollTop: destination }, 1100);
    });

	 // Всплывающее окно
	 $('.footer-btn, .nav-btn').click(function(e){
	 	e.preventDefault();
	 	$('#exampleModal').arcticmodal({
        closeOnOverlayClick: true,
        overlay: {
            css: {
                backgroundColor: 'rgba(19, 23, 49, 0.980)',
                backgroundImage: 'url(images/overlay.png)',
                backgroundRepeat: 'repeat',
                backgroundPosition: '50% 0',
                opacity: 0.96
            }
        }
});
	 	$('body').css();
	 });

	 // Menu opener hamburger

	 $('.menu-open').click(function(){
	 	$('.menu-collapse').toggleClass('d-none').css('order', '2');
	 	$('.menu').toggleClass('menu-opened');
	 });


    $('.menu a').each(function () { 
        var location = window.location.href; 
        var link = this.href;  
        if(location == link) { 
            $(this).addClass('active');
        }
    }); 
});