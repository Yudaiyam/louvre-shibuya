$(window).bind('load', function () {
"use strict";
	$("#nav-icon3").click(function(){
		$("#gnavi").stop(1,1).toggleClass('open');
		$("body").stop(1,1).toggleClass('overflow');
        $("#main").stop(1,1).toggleClass('open');
	});
	$("#gnavi").find("li ul li a").click(function(){
	  $("#gnavi").stop(1,1).toggleClass('open'); 
	});
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$("#gnavi ul li.sub01 ul").slideUp("fast");
		$("#gnavi ul li.sub01 a").removeClass("open");
	});
    $("#icon_close").click(function(){
		$("#main").stop(1,1).removeClass('open');
        $("#gnavi").stop(1,1).removeClass('open');
		$('#nav-icon3').toggleClass('open');
        
	});
    $("#gnavi ul li ul li a").click(function(){
		$('#nav-icon3').toggleClass('open');
	});	
});

/*===============FIX MENU==================*/
$(window).bind('scroll ', function () {
	"use strict";
	var top;
	if ($(window).width() >= 751) {
		top = $("#main").position().top + 90;
		if ($(this).scrollTop() >= top) {
			$("#gnavi").addClass('gnavi_fix');
             $(".under #main").css("margin-top",64);
		} else {
			$("#gnavi").removeClass('gnavi_fix');
             $(".under #main").css("margin-top",0);
		}
	}
});


/*==================menu sp==============*/
$(window).bind('load',function(){
	"use strict";	
	var gnavi = $("#gnavi>ul>li.sub01>a");
	$(gnavi).click(function(){
        if($(window).width() < 751){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$(this).next("ul").slideToggle('open');
		}
		else{
			$(this).removeClass('open');
			$(this).addClass('open');
			$(this).next("ul").slideToggle('open');
		}
        }
	});
	$('#icon_close').click(function(){
		$(gnavi).removeClass('open');
		$(gnavi).next("ul").slideUp('open');
	});
	
});


/* footer_bn
------------------------------------------------------------------ */
// $(document).ready(function(){
//     $("#box_contact_sp").hide();
//     $(window).on("scroll", function() {
//  	   w_width = $(window).width();
//         if ($(this).scrollTop() > 600 && w_width < 751 ) {
//          $('#box_contact_sp').slideDown("fast");
//         } else {
//             $('#box_contact_sp').slideUp("fast");
//         }
                 
//     });
// });	

$(document).ready(function(){
	$(".box_fixed_sp").removeClass("active");
	$(window).on("scroll load resize", function () {
		if ($(this).width() <= 750) {
			if ($(this).scrollTop() > 100) {
				$(".box_fixed_sp").addClass("active");
			} else {
				$(".box_fixed_sp").removeClass("active");
			}
		}

	});
});