// TODO: Separate carat menu hover effects from nav bar and from calendar filter
// TODO: Hide menu on mouseleave of menu
// TODO: Bind event handlers to calendar dropdown menu
  // On mouse leave of dropdown menu, menu items should hide

// TODO: Carat in both navigation and in calendar dropdown rotate on mouseover. Each should rotate on actions related to the element.
  // Duplicate carat class with a new for the calendar dropdown animation class (to be toggled)

// TODO: When calendar menu is open && user mouseleave the menu dropdown header, the carat changes, which is incorrect
  // Carat should only rotate on hide (pointing down) or on show (pointing up) of menu items

// (function(){

  'use strict';

  // Viewport width delaration to eliminate responsive bug on quick resize with open mobile menu
  const $window = $(window);

  //Filter helper classes
  const $crossfit = $('.class-crossfit');
  const $oly = $('.class-oly');
  const $openGym = $('.class-openGym');
  const $conditioning = $('.class-conditioning');
  const $showAll = $('#showAll');

  //Add formated current date to top of calendar message
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleString('en-US', dateOptions);
  $('#currentDate').append(date);

  const numbericDateOptions = { weekday: 'long', month: 'short', day: 'numeric' }
  const numericDate = new Date().toLocaleString('en-US', numbericDateOptions)

  const eachDateText = document.getElementsByClassName('numericDate');
  for(let i = 0; i < eachDateText.length; i++){
    eachDateText[i].innerText = numericDate;
  }
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
  //Manipulate SVG size in sub-navigation
  $window.resize(function() {

    if ( $window.width() >= 768 ) {
      $('.hamburgler').removeClass('no-hamburgler');
      $('.sub-menu').css({"width":"0%", "right":"-100%"});
    }

    // if ( $window.width() <= 530 ) {
    //   $('.noCrownLogo').attr({'width': '300', 'height': '92.14'});
    //   // width="500" height="153.57"
    // }
    //
    // if ( $window.width() > 530 ) {
    //   $('.noCrownLogo').attr({'width': '500', 'height': '153.57'});
    // }
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

  //Open NAV menu toggle item on mouse over

  // TODO: MAKE NAV SPECIFIC VERSION DROPDOWN CODE HERE
  $('.dropdown-toggle').on('mouseenter', function(){

    $('.dropdown-menu').toggleClass('show');
    $(this).css({"color":"#f27126"});
    // $('.fa-caret-down').css{("transition":"rotate(180)")};

    //animate arrow with a css transition class (add arrow next to it as a span and rotate it 180 deg.)
    $('.fa-caret-down').addClass('caret-hover');

  });

  // TODO: MAKE CALENDAR VERSION OF NAV DROPDOWN CODE HERE
  $('.calendar-dropdown-toggle').on('mouseenter', function(){

    $('.calendar-dropdown-menu').toggleClass('show');
    $(this).css({"color":"#f27126"});
    // $('.fa-caret-down').css{("transition":"rotate(180)")};

    //animate arrow with a css transition class (add arrow next to it as a span and rotate it 180 deg.)
    $('.calendar-caret').addClass('caret-hover');

  });

  $('.dropdown-menu').on('mouseleave', function(){
    $(this).toggleClass('show');
    $('.dropdown-toggle').css({"color":"rgba(0,0,0,0.5)"});
    $('.fa-caret-down').removeClass('caret-hover');
  });

  //Open CALENDAR menu toggle item on mouse over

  // Reset drop down on load
  $('.calendar-dropdown-menu').hide();

  $('.calendar-dropdown-toggle').on('mouseenter', function(){

    // $('.dropdown-menu-calendar').toggleClass('show');
    $('.calendar-dropdown-menu').show();
    $(this).css({"color":"#f27126"});
    // $('.fa-caret-down').css{("transition":"rotate(180)")};

    //animate arrow with a css transition class (add arrow next to it as a span and rotate it 180 deg.)
    $('.calendar-fa-caret-down').addClass('calendar-caret-hover');

  });


  $('.calendar-dropdown-toggle').on('mouseleave', function(){
    $('.calendar-dropdown-menu').hide();
    // TODO: Menu hides properly but animation does not work during hide
    $('.calendar-fa-caret-down').removeClass('calendar-caret-hover');
  });

  // TODO: THIS IS WORKING WHEN MOUSELEAVE MENU ITEM - NOT WHEN MOUSE LEAVES MENU BUTTON
  $('.calendar-dropdown-menu').on('mouseleave', function(){
    $('.dropdown-menu-calendar').hide();
    $('.calendar-fa-caret-down').removeClass('calendar-caret-hover');
  });

  // Hide menu on mouseleave of menu
  $('.dropdown-menu-calendar').on('mouseleave', function(){
    $(this).hide();
    $('.dropdown-toggle-calendar').css({"color":"rgba(0,0,0,0.5)"});
    $('.calendar-fa-caret-down').removeClass('calendar-caret-hover');
  });

  /*************************************
  ******** FORMAT WORKOUT AREA *********
  *************************************/

  const workOutText = document.getElementsByClassName('workoutText');

  for(let i = 0; i < workOutText.length; i++){
    document.getElementsByClassName('workoutText')[i].innerText = document.getElementsByClassName('workoutText')[i].innerText.split(' ').slice(0,25).join(' ').concat('...');
  }

  // let $workoutTextPrimary = $('#workoutTextPrimary').text().split(' ').slice(0,25).join(' ').concat('...');
  // document.getElementById('workoutTextPrimary').innerHTML = $workoutTextPrimary;
  //
  // let $workoutTextSecondary = $('#workoutTextSecondary').text().split(' ').slice(0,25).join(' ').concat('...');
  // document.getElementById('workoutTextSecondary').innerHTML = $workoutTextSecondary;



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
    $('#calendarContainer').css({"height":"422vh"});

    $crossfit.show();
    $('#crossfit').removeClass('filtered');

    $oly.show();
    $('#oly').removeClass('filtered');

    $openGym.show();
    $('#openGym').removeClass('filtered');

    $conditioning.show();
    $('#conditioning').removeClass('filtered');

    $showAll.hasClass('filtered');

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

    // If Oly clicked
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

    // If Open Gym clicked
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

    // If Conditioning clicked
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

    } else if ( $('#showAll').hasClass('filtered') ){
      $crossfit.show();
      $oly.show();
      $openGym.show();
      $conditioning.show();

      //Reset page HEIGHT
      $('#calendarContainer').css({"height":"422vh"});

      console.log('Show all');

    } else {
      // Close filter dropdown menu
      $('.calendar-dropdown-menu').hide();
      $('.calendar-dropdown-item').removeClass('filtered');

      //Adjust page HEIGHT
      $('#calendarContainer').css({"height":"422vh"});

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
    "Motivation",
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
