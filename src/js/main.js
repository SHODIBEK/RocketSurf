import './vendor';
import './helpers';
// import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
// import {actualYear} from './modules/actualYear';
import header from './components/header';
// import lazyLoading from './modules/lazyLoading';
// import scrollToAnchor from './modules/scrollToAnchor';
import rotate from './components/rotate';

import './modules/animation';

ieFix();
vhFix();
// actualYear();
// scrollToAnchor.init();

header.init();
// lazyLoading.init();

const headerFixed = () => {
	const header = $('.header');
	const headerHeight = header.outerHeight();
	const top = $(window).scrollTop();

	if(top > headerHeight) {
		header.addClass('header--fixed');
	} else {
		header.removeClass('header--fixed');
	}
};


$(window).scroll(function() {
  headerFixed()
})