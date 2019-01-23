// Project Name - Global Functions
// Developer: Michael "Spell" Spellacy, UI Developer, @spellacy

// Google Analytics (Note: GA should load first in event other scripts fail)

var _gaq = _gaq || [];

_gaq.push(["_setAccount", "UA-49662613-1"]);
_gaq.push(["_trackPageview"]);

(function() {

	var ga = document.createElement("script");
	ga.async = true;
	ga.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
	(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(ga);

})();

// A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT License.*/

(function (m) {

	var l = m.document;

	if (!l.querySelector) {

		return;
	}

	var n = l.querySelector("meta[name=viewport]"), a = n && n.getAttribute("content"), k = a + ",maximum-scale=1", d = a + ",maximum-scale=10", g = true, j, i, h, c;

	if (!n) {

		return;

	}

	function f() {

		n.setAttribute("content", d);
		g = true;

	}

	function b() {

		n.setAttribute("content", k);
		g = false;

	}

	function e(o) {

		c = o.accelerationIncludingGravity;
		j = Math.abs(c.x);
		i = Math.abs(c.y);
		h = Math.abs(c.z);
		
		if (!m.orientation && (j > 7 || ((h > 6 && i < 8 || h < 8 && i > 6) && j > 5))) {

			if (g) {
			
				b();
			}

		} else {

			if (!g) {
		
				f();
			
			}
		
		}

	}

	m.addEventListener("orientationchange", f, false);
	m.addEventListener("devicemotion", e, false);

})(this);

// Non-touch Events

function isTouchDevice() {

	return !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints;

}

if(!isTouchDevice()){

	$("a.external").click(function(){

		this.target = "_blank";

	});

}

// Highlight Navigation

$("#nav-" + $("body").attr("class") + " > a").addClass("active");

// Global Events

$(".back-to-top a, a.back-to-top").click(function(){ // Add id of "top" or "page" to outer most wrapper

	$("html, body").animate({scrollTop: $($(this).attr('href') ).offset().top}, "slow");
 
	return false;

});

// Photo Gallery

$(".photo, #img-container a").magnificPopup({

	type: "image",
	disableOn: function() {

		if( $(window).width() < 778 ) {

			return false;

		}

		return true;

		}

	});



