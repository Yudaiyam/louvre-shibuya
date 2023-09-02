// anchor in page
$(window).bind('load',function(){
	"use strict";
	$(function(){
		$('a[href^="#"]').click(function(){
			if ( $( $(this).attr('href') ).length ) {
				var p = $( $(this).attr('href') ).offset();
				if($(window).width() > 750){
					$('html,body').animate({ scrollTop: p.top -90}, 400);
				}
				else {
					$('html,body').animate({ scrollTop: p.top -60}, 400);
				}
			}
			return false;
		});
	});
});

// anchor top page #
$(window).bind('load',function(){
	"use strict";
 var hash = location.hash;
 if(hash){
	  var p1 = $(hash).offset();
	if($(window).width() > 750){
		
					$('html,body').animate({ scrollTop: p1.top -70}, 400);
				}
				else {
					$('html,body').animate({ scrollTop: p1.top -60}, 400);
			}
	}

});
//totop
$(document).ready(function() {
	"use strict";
	$(window).scroll(function () {
	 if ($(this).scrollTop() > 600) {
	 $("#toTop, .box_fix_pc").addClass("show");
	 } else {
	 $("#toTop, .box_fix_pc").removeClass("show");
	 }
	});
});



