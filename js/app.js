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

    // if ( $window.width() <= 530 ) {
    //   $('.noCrownLogo').attr({'width': '300', 'height': '92.14'});
    //   // width="500" height="153.57"
    // }
    //
    // if ( $window.width() > 530 ) {
    //   $('.noCrownLogo').attr({'width': '500', 'height': '153.57'});
    // }
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

 const $dropdownMenu = $('.dropdown-menu');
 const $dropdownToggle = $('.dropdown-toggle');
 const $faCaretDown = $('.fa-caret-down');


   /***************************
   * BEGIN CALENDAR FILTER JS *
   ***************************/
 
 const $calendarDropdownToggle = $('.calendar-dropdown-toggle');
 const $calendarCaret = $('.calendar-caret');
 const $calendarDropdownMenu = $('.calendar-dropdown-menu');
 const $calendarFaCaretDown = $('.calendar-fa-caret-down');
 const $calendarDropdownItem = $('.calendar-dropdown-item')
 
  
  //IF MOUSE OVER OTHER MENU-ITEM REMOVE HOVER STYLE
  $menuItem.on('mouseover', function(){
    $dropdownMenu.removeClass('show');
    $faCaretDown.removeClass('caret-hover');
    $dropdownToggle.css({"color": "rgba(0, 0, 0, 0.5)"});
  });

  //Open NAV menu toggle item on mouse over

  // TODO: MAKE NAV/CALENDAR MENU SPECIFIC VERSION DROPDOWN CODE HERE

  $dropdownToggle.on('mouseenter', function(){

    $dropdownMenu.toggleClass('show');
    
    //animate arrow with a css transition class (add arrow next to it as a span and rotate it 180 deg.)
    $faCaretDown.addClass('caret-hover');

    $(this).css({"color":"#f27126"});
  });

  // TODO: MAKE CALENDAR VERSION OF NAV DROPDOWN CODE HERE
  $calendarDropdownToggle.on('mouseenter', function(){

    $calendarDropdownMenu .toggleClass('show');
    $(this).css({"color":"#f27126"});
    // $('.fa-caret-down').css{("transition":"rotate(180)")};

    //animate arrow with a css transition class (add arrow next to it as a span and rotate it 180 deg.)
    $calendarCaret.addClass('caret-hover');

  });

  $dropdownMenu.on('mouseleave', function(){
    $(this).toggleClass('show');
    $dropdownToggle.css({"color":"rgba(0,0,0,0.5)"});
    $faCaretDown.removeClass('caret-hover');
  });

  //Open CALENDAR menu toggle item on mouse over

  // Reset drop down on load
  $calendarDropdownMenu.hide();

  // TODO: IS THIS REDUNDANT CODE?
  $calendarDropdownToggle.on('mouseenter', function(){

    // $('.dropdown-menu-calendar').toggleClass('show');
    $calendarDropdownMenu.show();
    $(this).css({"color":"#f27126"});
    // $('.fa-caret-down').css{("transition":"rotate(180)")};

    //animate arrow with a css transition class (add arrow next to it as a span and rotate it 180 deg.)
    $calendarFaCaretDown.addClass('calendar-caret-hover');

  });


  $calendarDropdownToggle.on('mouseleave', function(){
    // $calendarDropdownMenu.hide();
    
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




  //CALENDAR PAGE DROPDOWN
  //Open or close menu toggle item on click
  $calendarDropdownToggle.on('click', function(){
    // CLOSE TOGGLE IF OPEN... IF NOT OPEN, OPEN.

    // if ( $('.calendar-dropdown-menu').hasClass('show') ){
    //   $('.calendar-dropdown-menu').removeClass('show');
    // }
    //
    // if ( !$('.calendar-dropdown-menu').hasClass('show') ){
    //   $('.calendar-dropdown-menu').addClass('show');
    // }

    $calendarDropdownMenu.show();

    $calendarCaret.addClass('caret-hover');
  });

  
  $calendarDropdownMenu.on('mouseleave', function(){

    //MAKE DISPLAY NONE A HELPER CLASS
    $(this).hide(250);
    
    $calendarDropdownToggle.css({"color":"rgba(0,0,0,0.5)"});

    //reverse animate arrow with a css transition class
    $calendarCaret.removeClass('caret-hover');

    //IF MOUSE OVER OTHER MENU-ITEM REMOVE HOVER STYLE

  });


//CREATE CLICK FUNCTIONALITY FOR NAV DROPDOWN LINKS

  //HIDING CLASS NAME OF PARTICULAR TYPE TESTING FOR FILTERING FUNCTIONALITY

  // $crossfit.hide();
  // $oly.hide();
  // $openGym.hide();
  // $conditioning.hide();
  // $oly.hide();

  $calendarDropdownItem.on('click', function(){

    //remove classes to start
      //add class to menu item then check for case that menu-item has class
        //if menu-item has class, then hide all but the class name corresponding
        //to the id of the menu-item


    //Resets for filters
    // TODO: Refactor to avoid using vh units
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

    const $calendarContainer = $('#calendarContainer');

    // FILTER STYLES DYNAMICALLY - NEED TO REFRESH CALENDAR
    function resetCalendarStyle() {
      const $td = $('td');

      $td.each(function(index) {
        
        if($td.innerText !== ''){
          if(index % 8 !== 0){
            $td[index].style.background = '#f27126';
          }
        }
      });
    }

    function filterStyleCalendar(){
      
      const $tr = $('tr'); 
      const $td = $('td'); 

      $tr.each(function(trIndex) {

        if(trIndex % 2 === 0) {
          // console.log('zero row index');
          for(let i = 0; i < 8; i++) {
            if($td[i + trIndex * 8].innerText === ''){
              $td[i + trIndex * 8].style.background = "rgb(245,245,245)";
            }
            // if($td[i + trIndex * 8].innerText !== ''){
            //   $td[i + trIndex * 8].style.background = "#f27126";
            // }
            $td[i + trIndex * 8].style.borderBottom = "3px solid white";
          }  
        } else if (trIndex % 2 === 1) {
          for(let i = 0; i < 8; i++) {
            if($td[i + trIndex * 8].innerText === ''){
              $td[i + trIndex * 8].style.background = "rgba(202,202,202,0.7)";  
            }
            $td[i + trIndex * 8].style.borderBottom = "3px solid white";
          }
        }
      });
    }
    
    // If Crossfit clicked
    if( $('#crossfit').hasClass('filtered') ){

      // $crossfit.hide();
      $oly.hide();
      $openGym.hide();
      $conditioning.hide();

      // Close filter dropdown menu
      $calendarDropdownMenu.hide();

      //Adjust page HEIGHT
      $calendarContainer.css({"height":"280vh"});

      console.log( "Crossfit" );
      
      resetCalendarStyle();
      filterStyleCalendar();

    // If Oly clicked
    } else if( $('#oly').hasClass('filtered') ) {

      $crossfit.hide();
      $openGym.hide();
      $conditioning.hide();
      // $oly.hide();

      // Close filter dropdown menu
      $calendarDropdownMenu.hide();

      //Adjust page HEIGHT
      $calendarContainer.css({"height":"264vh"});

      console.log( "Oly" );

      resetCalendarStyle();
      filterStyleCalendar();
      

    // If Open Gym clicked
    } else if( $('#openGym').hasClass('filtered') ) {

      $crossfit.hide();
      $oly.hide();
      // $openGym.hide();
      $conditioning.hide();

      // Close filter dropdown menu
      $calendarDropdownMenu.hide();

      //Adjust page HEIGHT
      $calendarContainer.css({"height":"290vh"});

      console.log( "Open Gym" );

      resetCalendarStyle();
      filterStyleCalendar();

    // If Conditioning clicked
    } else if( $('#conditioning').hasClass('filtered') ){

      $crossfit.hide();
      $oly.hide();
      $openGym.hide();
      // $conditioning.hide();

      // Close filter dropdown menu
      $calendarDropdownMenu.hide();

      //Adjust page HEIGHT
      $calendarContainer.css({"height":"244vh"});

      console.log( "Conditioning" );

      resetCalendarStyle();
      filterStyleCalendar();

    } else if ( $showAll.hasClass('filtered') ){
      $crossfit.show();
      $oly.show();
      $openGym.show();
      $conditioning.show();

      //Reset page HEIGHT
      // TODO: Stlye height in CSS such that container flows around calendar
      $calendarContainer.css({"height":"422vh"});
      console.log('Show all');
      resetCalendarStyle();
      filterStyleCalendar();

    } else {
      // Close filter dropdown menu
      $calendarDropdownMenu.hide();
      $calendarDropdownItem.removeClass('filtered');

      //Adjust page HEIGHT
      $calendarContainer.css({"height":"422vh"});

      console.log("Default");
      resetCalendarStyle();
      filterStyleCalendar();
    }
  });

  /**************************
   * END CALENDAR FILTER JS *
   **************************/

  const $pageLink = $('.page-link');
  // Pagination active style application
  $pageLink.on('click', function(){
    if( $(this).hasClass('page-previous') || $(this).hasClass('page-next') ) {
      // TODO: check if next button
        // Check if there is a next page
          // Fire next page function if there is a previous page


      // TODO: check if previous button
        // Check if there is a previous page
          // Fire previous page function if there is a previous page


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

// })();
