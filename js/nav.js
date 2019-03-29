 
			$(document).ready(function() {
				//responsive menu toggle
				$("#menutoggle").click(function() {
					$('.xs-menu').toggleClass('displaynone');

					});
				//add active class on menu
				$('ul li').click(function(e) {
					e.preventDefault();
					$('li').removeClass('active');
					$(this).addClass('active');
				});
			//drop down menu	
					$(".drop-down").hover(function() {
						$('.mega-menu').addClass('display-on');
					});
					$(".drop-down").mouseleave(function() {
						$('.mega-menu').removeClass('display-on');
					});

					// Drop-down-list navigate
					$('#fingerFood li').on('click', function() {
						$('html,body').animate({
							scrollTop: $('.beer').offset().top
						},
						'slow'
						);
					});

					$('#sideFood li').on('click', function() {
						$('html,body').animate({
							scrollTop: $('.bread').offset().top
						},
						'slow'
						);
					});

					$('#juiceFood li').on('click', function() {
						$('html,body').animate({
							scrollTop: $('.featured').offset().top
						},
						'slow'
						);
					});

					$('#saladFood li').on('click', function() {
						$('html,body').animate({
							scrollTop: $('.salads').offset().top
						},
						'slow'
						);
					});
					
			
			});

	 