/******************************************************************
	
	
	@ Item          Legendary // One Page Parallax HTML Template 
	@ Author		Avanzare
	@ Website		http://themeforest.net/user/avanzare 
	

 ******************************************************************/
 
 
 /******************************************************************


	------------------------
	-- TABLE OF CONTENTS --
	------------------------
	
	--  1. Foundation
	--  2. Portfolio
	--  3. Google Analytics
	--  4. Mobile Detect
 
 
 ******************************************************************/




/** 1. FOUNDATION
*******************************************************************/

jQuery( window ).load(function() {
	"use strict";
	
	
		
	$("#page-loader").addClass("hide-this");
	$('#cycle').cycle('prev');
	
	setTimeout(function() {	
	
		$(".hero .background-content.page-enter-animated").addClass("show");
		
		setTimeout(function() {
			
			// Only call sliderRevolution if it exists
			if (typeof sliderRevolution === 'function') {
				sliderRevolution();
			}
			
		}, 200);
		
		setTimeout(function() {
		
			$(".hero .front-content.page-enter-animated").addClass("show");
			
		}, 540);
	
	}, 1000);
					
	
	
});



// LOAD SCRIPT
function loadScript(url, callback) {

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);

}



jQuery( document ).ready(function() {
	"use strict";


	// ONE PAGE NAVIGATION
	$(".navigation-main .navigation-items").onePageNav({
		currentClass: "current",
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: ":not(.external)",
		easing: "swing"
	});
	
	
	
	// DETECT TOP LEAVE AND SHOW ON BODY
	$(document).scroll(function() {
	
		if ($(this).scrollTop() > 1 ){  
		
			$("body").addClass("top-leave");
		
		} else {
		
			$("body").removeClass("top-leave");
		
		}
	
	});
	
	
	
	// BUTTON SCROLL TOP
	$(".scroll-top").on("click", function() {
		
		var scrollDone = false,
		button = $(this);
		button.addClass("active");
		
		$("html, body").animate(
		
			{ 
				scrollTop: "0" 
			},
			
			{
			complete : function() {
				
				if (!scrollDone) {
					
					scrollDone = true;
					button.removeClass("active");
					
				}
				
			}
			}
			
		);
		
	});
	
	
	
	// ANIMATE CONTENT WHEN ENTER VIEWPORT
	if (option_animate_content_on_scroll == "on") {
		
		window.sr = ScrollReveal();
		sr.reveal(".scroll-animated-from-bottom", { 
			duration: 500,
			delay: 0,
			origin: "bottom",
			rotate: { x: 0, y: 0, z: 0 },
			opacity: 0,
			distance: "80px",
			viewFactor: 0.3,
			scale: 1,
		});
	
	}
	
	
	
	// STICKY NAVIGATION
	if (option_navigation_mode == "sticky") {
		
		// ADD IDENTITY CLASS
		$(".navigation-main").addClass("sticky-navigation");
		
		// STICKY NAVIGATION INIT
		$(".navigation-main.sticky-navigation").sticky({topSpacing:0});
	
	}
	
	
	
	// POPUP NAVIGATION
	if (option_navigation_mode == "popup") {
		
		// ADD IDENTITY CLASS
		$(".navigation-main").addClass("popup-navigation");
		
		// SHOW POP NAVIGATION AFTER TOPLEAVE + SPACING ( HERO HEIGHT )
		$(document).scroll(function() {
			
		  if ($(this).scrollTop() > $(window).height() ){  
		  
			  $(".navigation-main.popup-navigation").addClass("show");
			  
		  } else {
			  
			  $(".navigation-main.popup-navigation").removeClass("show");
			
		  }
			
		});
	
	}



	// PARALLAX SCROLLING
	if (option_parallax_scrolling == "off") {
		
		dzsprx_init(".dzsparallaxer",{mode_scroll: "spt",});
		
	}




/** 2.  PORTFOLIO 
*******************************************************************/
	
     // DEFAULT SLIDER ( Cube Plugin )
	 $(".default-slider-1").cubeportfolio({
        layoutMode: "slider",
        drag: true,
        auto: false,
		autoPauseOnHover: true,
        showNavigation: false,
        showPagination: true,
        rewindNav: false,
        scrollByPage: false,
		singlePageDelegate: null,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: "opacity",
        displayType: "fadeIn",
        displayTypeSpeed: 500,
    });
	
	
	
	 // DEFAULT CAROUSEL ( Cube Plugin )
	 $(".default-carousel-1").cubeportfolio({
        layoutMode: "slider",
        drag: true,
        auto: true,
        showNavigation: false,
        showPagination: true,
        rewindNav: false,
        scrollByPage: false,
        gridAdjustment: "responsive",
        mediaQueries: [{
             width: 900,
            cols: 3
        }, {
            width: 600,
            cols: 2
		}],
        gapHorizontal: 0,
        gapVertical: 40,
        caption: "opacity",
        displayType: "fadeIn",
        displayTypeSpeed: 100,
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: false,
        lightboxTitleSrc: "data-title",
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: false,
		singlePageAnimation: "fade",
        singlePageStickyNavigation: true,
        singlePageCallback: function(url, element) {
            var t = this;
            $.ajax({
                    url: url,
                    type: "GET",
                    dataType: "html",
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage("AJAX Error! Please refresh the page!");
                });
        },
    });
	
	
	// PHANTOM WRAPPER ( Cube Plugin )
    $(".phantom-wrapper-popups").cubeportfolio({
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: false,
        lightboxTitleSrc: "data-title",
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: false,
		singlePageAnimation: "fade",
        singlePageStickyNavigation: false,
        singlePageCallback: function(url, element) {
            var t = this;
            $.ajax({
                    url: url,
                    type: "GET",
                    dataType: "html",
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage("AJAX Error! Please refresh the page!");
                });
        },
		
    });
	
	
	
    // FUNCTION SHOW POPUP
	function showPopupIntro() { 
		  
		setTimeout(function(){
			
			var windowHeight = $(window).height(),
				introHeight = $(".popup .container-intro").outerHeight(),
				marginValue =(windowHeight - introHeight) / 2;
			  
			$(".popup").addClass("active");	 
			 
			if ( windowHeight >= introHeight) {
				 
				$(".popup.active").css("margin-top",marginValue).css("margin-bottom",marginValue/61.8*38.2);
			
			}
			
		}, 300);
		
	} 
	
	
	
	// AFTER SINGLE PAGE IS LOADED
	$(".cbp").on("updateSinglePageComplete.cbp", function() {
		
		var $elems = $(".popup").find("img, iframe"),
		    elemsCount = $elems.length,
		    loadedCount = 0;
		
		$elems.on("load", function () {
		
			loadedCount++;
			
			if (loadedCount === elemsCount) {
			
				$(window).on("resize", function(){
				
					showPopupIntro();
				
				});
				
				showPopupIntro();
				
				setTimeout(function(){
				
					$(".popup-close-button").addClass("active");
				
				}, 300);
			
			}
		
		});	  
		
		
		if ($(".popup").find(".intro-video").length) {
		
			$(window).on("resize", function(){
			
				showPopupIntro();
			
			});
			
			showPopupIntro();
			
			setTimeout(function(){
			
				$(".popup-close-button").addClass("active");
			
			}, 300);
			
		}
	
	});
	
	
	
	// KILL KEYBOARD CONTROL ON POPUPS
	$(".cbp").on("initComplete.cbp", function() {
		
		$(document).off("keydown.cbp");
		
	});
	
	
	
	// OPEN/CLOSE POPUP DESCRIPTION ON BUTTON CLICK
	$("body").on("click",".popup .button-description", function() {
		
		if ($(".popup .button-description").hasClass("active")) {
			
			$(".popup .container-info").removeClass("active");
			$(".popup .button-description").removeClass("active");
			$(".popup .allow-push-by-menu").removeClass("active");
		  
		} else {
			
			$(".popup .button-description").addClass("active");
		    $(".popup .container-info").addClass("active");
			$(".popup .allow-push-by-menu").addClass("active");
			
		}
		
	});
	
	
	
	// CLOSE POPUP DESCRIPTION WHEN OTHER CONTENT IS CLICKED
	$("body").on("mousedown",".container-intro", function() {
		
		if ($(".popup .button-description").hasClass("active")) {
			
			$(".popup .container-info").removeClass("active");
			$(".popup .button-description").removeClass("active");
			$(".popup .allow-push-by-menu").removeClass("active");
		  
		}
		
	});
	
	
	
	// ADD CUSTOM BUTTON TO LIGHTBOX ( CUBE PORTFOLIO )
    $(document).on("click","a.cbp-lightbox",function() {
		
		setTimeout(function(){
				
			$( ".cbp-popup-lightbox .cbp-popup-content" ).append('<div id="popup-close-button-1" class="popup-close-button" data-action="close"><span class="ti-back-left" data-action="close"></span></div>');
			
			setTimeout(function(){
				
				$( ".cbp-popup-lightbox-img" ).attr("data-action" , "");
				$( ".cbp-popup-lightbox" ).attr("data-action" , "");
				$( ".popup-close-button" ).addClass("active");
				
				// CHECK IF ELEMENT EXISTS TO PREVENT ERRORS
				if ($(".cbp-popup-lightbox video").length) {
					
					$(".cbp-popup-lightbox video")[0].play();
					
				}
			
			}, 500);
		
		}, 100);
					
		$(".cbp-popup-lightbox video").removeAttr("controls");
		
	});
	
	
	
});




/**	3. GOOGLE ANALYTICS
 *****************************************************/	
	
if ( option_analytics_tracking == "on" ) {

	var _gaq = _gaq || [];

	function loadtracking() {
			window._gaq.push(['_setAccount', option_analytics_tracking_id]);
			window._gaq.push(['_trackPageview']);

			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
	}

	loadtracking();

}




/** 4.  MOBILE DETECT
*******************************************************************/

(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);