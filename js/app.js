// (function(){

  //Toggle active class in navigation bar (and style it)
  $('.menu-item').on('click', function(){

    if( $('.menu-item').hasClass('active') ){
      $('.menu-item').removeClass('active');
    }

    $(this).toggleClass('active');
  });

  //Animate hamburger and toggle showing of sub-navigation menu
  $('.hamburgler').click(function(e){
		e.preventDefault();
		$(this).toggleClass('no-hamburgler');

    if( $(this).hasClass('no-hamburgler') ){
      $('.sub-menu').css({"width":"100%","right":"0%"});
    } else{
      $('.sub-menu').css({"width":"0%","right":"-100%"});
    }
	});

  //Hide navigation menu on window resize if it was left shown at a 'mobile' width
  $(window).resize(function() {

    if ( $(window).width() >= 768 ){
      $('.hamburgler').removeClass('no-hamburgler');
      $('.sub-menu').css({"width":"0%","right":"-100%"});
    }
  });



  //Open menu toggle item on mouse over
  $('.dropdown-toggle').on('mouseenter', function(){

    $('.dropdown-menu').toggleClass('show');
    $(this).css({"color":"#f27126"});
    // $('.fa-caret-down').css{("transition":"rotate(180)")};

    //animate arrow with a css transition class (add arrow next to it as a span and rotate it 180 deg.)
    $('.fa-caret-down').addClass('caret-hover');

  });

  $('.dropdown-menu').on('mouseleave', function(){

    $(this).toggleClass('show');
    $('.dropdown-toggle').css({"color":"rgba(0,0,0,0.5)"});

    //reverse animate arrow with a css transition class
    $('.fa-caret-down').removeClass('caret-hover');

    //IF MOUSE OVER OTHER MENU-ITEM REMOVE HOVER STYLE

  });


  // //BEGIN FIRST ALIGN HAMBURGER CODE
  //
  // //**** Navigation events ****
  // $('.hamburger').click(function(){
  //
  //   $(this).toggleClass('is-active');
  //
  //   if($('.hamburger').hasClass('is-active')){
  //
  //     //Animate in sub-navigation events
  //     $('.breadcrumb').hide();
  //     $('.top-container nav').removeClass('nav-shadow');
  //     $('.sub-nav').toggleClass('show-nav');
  //
  //   } else {
  //     //Animate out sub-navigation events
  //     $('.top-container nav').addClass('nav-shadow');
  //     $('.sub-nav').removeClass('show-nav');
  //     $('.breadcrumb').show();
  //
  //   }
  //
  // });
  //
  // //**** Sub-navigation events ****
  //

    //Use forEach() to initialize

  // //Initialize sub-navigation
  // $('.homeMenu').hide();
  // $('.latestNewsMenu').hide();
  // $('.servicesMenu').hide();
  // $('.industriesMenu').hide();
  // $('.careersMenu').hide();
  // $('.aboutMenu').hide();
  //
  // //Click handlers for each sub-navigation menu list item
  // $('.home').click(function(){
  //   $('.sub-nav-list-elements a').removeClass('activeSubNav');
  //   $(this).addClass('activeSubNav');
  //   //Add hover effects to all nav elements
  //
  //   //Remove hover effect from THIS element
  //
  //   //Dynamically style page for "latest news" menu
  //   $('.servicesMenu').hide();
  //   $('.industriesMenu').hide();
  //   $('.careersMenu').hide();
  //   $('.aboutMenu').hide();
  //   $('.latestNewsMenu').hide();
  //   $('.homeMenu').show();
  //
  // });
  //
  // $('.latestNews').click(function(){
  //   $('.sub-nav-list-elements a').removeClass('activeSubNav');
  //   $(this).addClass('activeSubNav');
  //   //Add hover effects to all nav elements
  //
  //   //Remove hover effect from THIS element
  //
  //   //Dynamically style page for "latest news" menu
  //   $('.homeMenu').hide();
  //   $('.servicesMenu').hide();
  //   $('.industriesMenu').hide();
  //   $('.careersMenu').hide();
  //   $('.aboutMenu').hide();
  //   $('.latestNewsMenu').show();
  //
  // });
  //
  // $('.services').click(function(){
  //   $('.sub-nav-list-elements a').removeClass('activeSubNav');
  //   $(this).addClass('activeSubNav');
  //
  //   //Dynamically style page for "services" menu
  //
  //   //Remove hover effect from THIS element
  //
  //   //Dynamically style page for "latest news" menu
  //   $('.homeMenu').hide();
  //   $('.industriesMenu').hide();
  //   $('.careersMenu').hide();
  //   $('.aboutMenu').hide();
  //   $('.latestNewsMenu').hide();
  //   $('.servicesMenu').show();
  // });
  //
  // $('.industries').click(function(){
  //   $('.sub-nav-list-elements a').removeClass('activeSubNav');
  //   $(this).addClass('activeSubNav');
  //
  //   //Dynamically style page for "industries" menu
  //
  //   //Remove hover effect from THIS element
  //
  //   //Dynamically style page for "latest news" menu
  //   $('.homeMenu').hide();
  //   $('.careersMenu').hide();
  //   $('.aboutMenu').hide();
  //   $('.latestNewsMenu').hide();
  //   $('.servicesMenu').hide();
  //   $('.industriesMenu').show();
  // });
  //
  // $('.careers').click(function(){
  //   $('.sub-nav-list-elements a').removeClass('activeSubNav');
  //   $(this).addClass('activeSubNav');
  //
  //   //Dynamically style page for "careers" menu
  //
  //   //Remove hover effect from THIS element
  //
  //   //Dynamically style page for "latest news" menu
  //   $('.homeMenu').hide();
  //   $('.aboutMenu').hide();
  //   $('.latestNewsMenu').hide();
  //   $('.servicesMenu').hide();
  //   $('.industriesMenu').hide();
  //   $('.careersMenu').show();
  // });
  //
  // $('.about').click(function(){
  //   $('.sub-nav-list-elements a').removeClass('activeSubNav');
  //   $(this).addClass('activeSubNav');
  //
  //   //Dynamically style page for "about" menu
  //
  //   //Remove hover effect from THIS element
  //
  //   //Dynamically style page for "latest news" menu
  //   $('.homeMenu').hide();
  //   $('.latestNewsMenu').hide();
  //   $('.servicesMenu').hide();
  //   $('.industriesMenu').hide();
  //   $('.careersMenu').hide();
  //   $('.aboutMenu').show();
  // });
  // //END FIRST ALIGN HAMBURGER CODE



  //Manage navigation placement when alert is closed
  $('#ucfAlert').on('closed.bs.alert', function() {
    $('#nav-container').css({"margin-bottom":"14px"});
  });


  //Array to populate "Forging Elite" tagline (Final element gets new style)
  const eliteArr = [
    "Confidence",
    "Nakedness",
    "Happiness",
    "Mentality",
    "Health",
    "Fitness"
  ];


  let counter = 0;

  setInterval(function(){

    if (counter < eliteArr.length){
      $('.lightTextDynamic').text("");
      $('.lightTextDynamic').text(eliteArr[counter]);
    }

    if(eliteArr[counter] === "Fitness"){
      $('.lightTextDynamic').css({"color": "#fff"});
    }

    counter++;

  }, 1350);

// })();
