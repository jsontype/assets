(function($) {

//hamburger
	 document.querySelector('.hamburger').addEventListener('click', (e) => {
		    e.currentTarget.classList.toggle('is-active');
	})
})(window.jQuery);