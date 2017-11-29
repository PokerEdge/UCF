// (function(){

  'use strict';

  // Viewport width delaration to eliminate responsive bug on quick resize with open mobile menu
  const $window = $(window);

  //Filter helper classes
  const $crossfit = $('.class-crossfit');
  const $oly = $('.class-oly');
  const $openGym = $('.class-openGym');
  const $conditioning = $('.class-conditioning');

  //Add formated current date to top of calendar message
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleString('en-US', options);
  $('#currentDate').append(date);

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
  $window.resize(function() {

    if ( $window.width() >= 768 ){
      $('.hamburgler').removeClass('no-hamburgler');
      $('.sub-menu').css({"width":"0%", "right":"-100%"});
    }
  });

  // Open contact links in new tab or window on click
  const $contactLink = $('.contact-link');

  $contactLink.each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(e) {
           e.preventDefault();
           e.stopPropagation();
           window.open(this.href, '_blank');
       });
    }
  });

  const $getStarted = $('.get-started');

  // Open get started links in new tab or window on click
  $getStarted.each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(e) {
           e.preventDefault();
           e.stopPropagation();
           window.open(this.href, '_blank');
       });
    }
  });

  /*************************************
  **** MANAGE DROPDOWN MENU ACTIONS ****
  *************************************/

  //IF MOUSE OVER OTHER MENU-ITEM REMOVE HOVER STYLE
  $('.menu-item').on('mouseover', function(){
    $('.dropdown-menu').removeClass('show');
    $('.fa-caret-down').removeClass('caret-hover');
    $('.dropdown-toggle').css({"color": "rgba(0, 0, 0, 0.5)"});
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
    $('.fa-caret-down').removeClass('caret-hover');
  });

  //CALENDAR PAGE DROPDOWN
  //Open menu toggle item on mouse over
  $('.calendar-dropdown-toggle').on('click', function(){

    $('.calendar-dropdown-menu').show();
    // $(this).css({"color":"#f27126"});

    //MANAGE THESE CLASS NAMES TO KEEP CARET ANIMATION INDEPEDENT FROM NAV CARET
    $('.calendar-caret').addClass('caret-hover');
  });

  $('.calendar-dropdown-menu').on('mouseleave', function(){

    //MAKE DISPLAY NONE A HELPER CLASS
    $(this).hide();
    //
    $('.calendar-dropdown-toggle').css({"color":"rgba(0,0,0,0.5)"});

    //reverse animate arrow with a css transition class
    $('.calendar-caret').removeClass('caret-hover');

    //IF MOUSE OVER OTHER MENU-ITEM REMOVE HOVER STYLE

  });


  //HIDING CLASS NAME OF PARTICULAR TYPE TESTING FOR FILTERING FUNCTIONALITY

  // $crossfit.hide();
  // $oly.hide();
  // $openGym.hide();
  // $conditioning.hide();
  // $oly.hide();

  $('.dropdown-item').on('click', function(){

    if(){
      // $crossfit.hide();
      // $oly.hide();
      // $openGym.hide();
      // $conditioning.hide();
    } else if() {
      // $crossfit.hide();
      // $oly.hide();
      // $openGym.hide();
      // $conditioning.hide();
    } else if() {
      // $crossfit.hide();
      // $oly.hide();
      // $openGym.hide();
      // $conditioning.hide();
    } else if(){
      // $crossfit.hide();
      // $oly.hide();
      // $openGym.hide();
      // $conditioning.hide();
    }

  });
  // HIDE CALENDAR DROPDOWN WHEN LINK IS CLICKED
    // TAKE FILTER ACTION TO HIDE ALL BUT CLICKED LINK ITEM IN DROPDOWN


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
