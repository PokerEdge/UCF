// (function(){

  'use strict';

  // Viewport width delaration to eliminate responsive bug on quick resize with open mobile menu
  const $window = $(window);

  const $hamburgler = $('.hamburgler');
  const $subMenu = $('.sub-menu');
  const $menuItem = $('.menu-item');

  // Open contact links in new tab or window on click
  const $contactLink = $('.contact-link');

  // Open get started links in new tab or window on click
  const $getStarted = $('.get-started');

  //Add formated current date to top of calendar message
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleString('en-US', dateOptions);
  $('#currentDate').append(date);

  const numericDateOptions = { weekday: 'long', month: 'short', day: 'numeric' }
  const numericDate = new Date().toLocaleString('en-US', numericDateOptions)

  const eachDateText = document.getElementsByClassName('numericDate');
  for(let i = 0; i < eachDateText.length; i++){
    eachDateText[i].innerText = numericDate;
  }

  const $dropdownMenu = $('.dropdown-menu');
  const $dropdownToggle = $('.dropdown-toggle');
  const $faCaretDown = $('.fa-caret-down');

  const $calendarDropdownToggle = $('.calendar-dropdown-toggle');
  const $calendarDropdownMenu = $('.calendar-dropdown-menu');
  const $calendarCaret = $('.calendar-caret');
  const $calendarFaCaretDown = $('.calendar-fa-caret-down');
  const $calendarDropdownItem = $('.calendar-dropdown-item');

  const $pageLink = $('.page-link');
  //Toggle active class in navigation bar (and style it)
  $menuItem.on('click', function(){

    if( $menuItem.hasClass('active') ){
      $menuItem.removeClass('active');
    }

    $(this).toggleClass('active');
  });

  //Animate hamburger and toggle showing of sub-navigation menu
  $hamburgler.click(function(e){
		e.preventDefault();
		$(this).toggleClass('no-hamburgler');

    if( $(this).hasClass('no-hamburgler') ){
      $subMenu.css({"width":"100%","right":"0%"});
    } else{
      $subMenu.css({"width":"0%","right":"-100%"});
    }
	});

  //Hide navigation menu on window resize if it was left shown at a 'mobile' width
  //Manipulate SVG size in sub-navigation
  $window.resize(function() {

    if ( $window.width() >= 768 ) {
      $hamburgler.removeClass('no-hamburgler');
      $subMenu.css({"width":"0%", "right":"-100%"});
    }
  });

  //IF MOUSE OVER OTHER MENU-ITEM REMOVE HOVER STYLE
  $menuItem.on('mouseover', function(){
    $dropdownMenu.removeClass('show');
    $faCaretDown.removeClass('caret-hover');
    $dropdownToggle.css({"color": "rgba(0, 0, 0, 0.5)"});
  });

  //Open NAV menu toggle item on mouse over
  $dropdownToggle.on('mouseenter', function(){

    $dropdownMenu.toggleClass('show');
    $faCaretDown.addClass('caret-hover');
    $(this).css({"color":"#f27126"});
  });

  $dropdownMenu.on('mouseleave', function(){
    $(this).toggleClass('show');
    $dropdownToggle.css({"color":"rgba(0,0,0,0.5)"});
    $faCaretDown.removeClass('caret-hover');
  });

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

  // Pagination active style application
  $pageLink.on('click', function(){
    if( $(this).hasClass('page-previous') || $(this).hasClass('page-next') ) {

    } else {
      $pageLink.removeClass('active');
      $(this).addClass('active');
    }
  });



  //Manage navigation placement when alert is closed
  $('#ucfAlert').on('closed.bs.alert', function() {
    $('#nav-container').css({"margin-bottom":"14px"});
  });

  const archiveListItemTitle = document.getElementsByClassName('archiveListItemTitle');

  for(let i = 0; i < archiveListItemTitle.length; i++){
    document.getElementsByClassName('archiveListItemTitle')[i].innerText = document.getElementsByClassName('archiveListItemTitle')[i].innerText.split(' ').slice(0,5).join(' ').concat('...');
  }

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
    const $lightTextDynamic = $('.lightTextDynamic');

    if (counter < eliteArr.length){
      $lightTextDynamic.text("");
      $lightTextDynamic.text(eliteArr[counter]);
    }

    if(eliteArr[counter] === "Fitness"){
      $lightTextDynamic.css({"color": "#fff"});
    }

    counter++;

  }, 1350);

  // Formats "Crossfit workout of the day" area of home page to max at 25 words
 const workOutText = document.getElementsByClassName('workoutText');

 for(let i = 0; i < workOutText.length; i++){
   document.getElementsByClassName('workoutText')[i].innerText = document.getElementsByClassName('workoutText')[i].innerText.split(' ').slice(0,25).join(' ').concat('...');
 }

 // TODO: MAKE CALENDAR VERSION OF NAV DROPDOWN CODE HERE
$calendarDropdownToggle.on('mouseenter', function(){

  $calendarDropdownMenu .toggleClass('show');
  $(this).css({"color":"#f27126"});
  $calendarCaret.addClass('calendar-caret-hover');
});

// Reset drop down on load
$calendarDropdownMenu.hide();

//Open CALENDAR menu toggle item on mouse over
$calendarDropdownToggle.on('mouseenter', function(){

  $calendarDropdownMenu.show();
  $(this).css({"color":"#f27126"});
  $calendarFaCaretDown.addClass('calendar-caret-hover');
});


$calendarDropdownToggle.on('mouseleave', function(){
  
  // TODO: Menu hides properly but animation does not work during hide
  $calendarFaCaretDown.removeClass('calendar-caret-hover');
});

// TODO: THIS IS WORKING WHEN MOUSELEAVE MENU ITEM - NOT WHEN MOUSE LEAVES MENU BUTTON
$calendarDropdownMenu.on('mouseleave', function(){
  $('.dropdown-menu-calendar').hide();
  $calendarFaCaretDown.removeClass('calendar-caret-hover');
});

// Hide menu on mouseleave of menu
$('.dropdown-menu-calendar').on('mouseleave', function(){
  $(this).hide();
  $('.dropdown-toggle-calendar').css({"color":"rgba(0,0,0,0.5)"});
  $calendarFaCaretDown.removeClass('calendar-caret-hover');
});

//Open or close menu toggle item on click
$calendarDropdownToggle.on('click', function(){

  $calendarDropdownMenu.show();
  $calendarCaret.addClass('calendar-caret-hover');
});

//Close menu toggle item on mouse leave
$calendarDropdownMenu.on('mouseleave', function(){

  $(this).hide(250);
  
  $calendarDropdownToggle.css({"color":"rgba(0,0,0,0.5)"});
  $calendarCaret.removeClass('calendar-caret-hover');

});

// })();
