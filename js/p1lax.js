$(document).ready(function(){
	

//--------------------------------- Hover animation for clients --------------------------------//
		
		$('.peopleImg ul').css({opacity:0});
		$('.peopleImg').hover( function(){ 
			$(this).find("img").animate({ opacity: 0.75 }, 'fast');
			$(this).children('ul').animate({ opacity: 1 }, 'fast');
		}, function(){ 
			$(this).find("img").animate({ opacity: 1 }, 'slow'); 
			$(this).children('ul').animate({ opacity: 0 }, 'slow');
		});



//--------------------------------- End hover animation for clients--------------------------------//

});




