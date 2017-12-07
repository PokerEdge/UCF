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
  //Open or close menu toggle item on click
  $('.calendar-dropdown-toggle').on('click', function(){
    // CLOSE TOGGLE IF OPEN... IF NOT OPEN, OPEN.

    // if ( $('.calendar-dropdown-menu').hasClass('show') ){
    //   $('.calendar-dropdown-menu').removeClass('show');
    // }
    //
    // if ( !$('.calendar-dropdown-menu').hasClass('show') ){
    //   $('.calendar-dropdown-menu').addClass('show');
    // }

    $('.calendar-dropdown-menu').show();

    $('.calendar-caret').addClass('caret-hover');
  });

  $('.calendar-dropdown-menu').on('mouseleave', function(){

    //MAKE DISPLAY NONE A HELPER CLASS
    $(this).hide(250);
    //
    $('.calendar-dropdown-toggle').css({"color":"rgba(0,0,0,0.5)"});

    //reverse animate arrow with a css transition class
    $('.calendar-caret').removeClass('caret-hover');

    //IF MOUSE OVER OTHER MENU-ITEM REMOVE HOVER STYLE

  });


//CREATE CLICK FUNCTIONALITY FOR NAV DROPDOWN LINKS

  //HIDING CLASS NAME OF PARTICULAR TYPE TESTING FOR FILTERING FUNCTIONALITY

  // $crossfit.hide();
  // $oly.hide();
  // $openGym.hide();
  // $conditioning.hide();
  // $oly.hide();

  $('.calendar-dropdown-item').on('click', function(){

    //remove classes to start
      //add class to menu item then check for case that menu-item has class
        //if menu-item has class, then hide all but the class name corresponding
        //to the id of the menu-item


    //Resets for filters
    $('#calendarContainer').css({"height":"420vh"});

    $crossfit.show();
    $('#crossfit').removeClass('filtered');

    $oly.show();
    $('#oly').removeClass('filtered');

    $openGym.show();
    $('#openGym').removeClass('filtered');

    $conditioning.show();
    $('#conditioning').removeClass('filtered');

    $(this).addClass('filtered');

    //USE SWITCH STATEMENT

    //EXAMPLE SWITCH STATEMENT
    // function checkFruit() {
    //   var text;
    //   var fruits = document.getElementById("myInput").value;
    //
    //   switch(fruits) {
    //     case "Banana":
    //       text = "Banana is good!";
    //       break;
    //     case "Orange":
    //       text = "I am not a fan of orange.";
    //       break;
    //     case "Apple":
    //       text = "How you like them apples?";
    //       break;
    //     default:
    //       text = "I have never heard of that fruit.";
    //   }
    //   document.getElementById("demo").innerHTML = text;
    // }


    // If Crossfit clicked
    if( $('#crossfit').hasClass('filtered') ){

      // $crossfit.hide();
      $oly.hide();
      $openGym.hide();
      $conditioning.hide();

      // Close filter dropdown menu
      $('.calendar-dropdown-menu').hide();

      //Adjust page HEIGHT
      $('#calendarContainer').css({"height":"280vh"});

      console.log( "Crossfit" );

    } else if( $('#oly').hasClass('filtered') ) {

      $crossfit.hide();
      // $oly.hide();
      $openGym.hide();
      $conditioning.hide();

      // Close filter dropdown menu
      $('.calendar-dropdown-menu').hide();

      //Adjust page HEIGHT
      $('#calendarContainer').css({"height":"264vh"});

      console.log( "Oly" );

    } else if( $('#openGym').hasClass('filtered') ) {

      $crossfit.hide();
      $oly.hide();
      // $openGym.hide();
      $conditioning.hide();

      // Close filter dropdown menu
      $('.calendar-dropdown-menu').hide();

      //Adjust page HEIGHT
      $('#calendarContainer').css({"height":"290vh"});

      console.log( "Open Gym" );

    } else if( $('#conditioning').hasClass('filtered') ){

      $crossfit.hide();
      $oly.hide();
      $openGym.hide();
      // $conditioning.hide();

      // Close filter dropdown menu
      $('.calendar-dropdown-menu').hide();

      //Adjust page HEIGHT
      $('#calendarContainer').css({"height":"244vh"});

      console.log( "Conditioning" );

    } else {
      // Close filter dropdown menu
      $('.calendar-dropdown-menu').hide();
      $('.calendar-dropdown-item').removeClass('filtered');

      //Adjust page HEIGHT
      $('#calendarContainer').css({"height":"420vh"});

      console.log("Default");

    }

    //STYLE UNOCCUPIED TABLE CELLS AFTER FILTERING

  //   const $tableCells = $('.users td');
  //   const tableArr = [];
  //
  //   // for(let i = 0; i < $tableCells.length; i++){
  //   //
  //   //   // tableArr.push($tableCells:nth-child(3));
  //   //
  //   //   // if(!){
  //   //   //
  //   //   // }
  //   //   // console.log(i);
  //   // }
  //
  //   console.log ( $('users td') );
  //
  });


  //TEXT OF ENTIRE CALENDAR
  //$('.users tbody').children().children().text();


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
