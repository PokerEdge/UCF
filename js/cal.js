//////////////////////////
// CALENDAR SPECIFIC JS //
//////////////////////////

/***************************
 * BEGIN CALENDAR FILTER JS *
 ***************************/

'use strict';

//Filter helper classes
const $crossfit = $('.class-crossfit');
const $oly = $('.class-oly');
const $openGym = $('.class-openGym');
const $conditioning = $('.class-conditioning');
const $showAll = $('#showAll'); 




// TODO: MAKE CALENDAR VERSION OF NAV DROPDOWN CODE HERE
$calendarDropdownToggle.on('mouseenter', function(){

    $calendarDropdownMenu .toggleClass('show');
    $(this).css({"color":"#f27126"});
    // $('.fa-caret-down').css{("transition":"rotate(180)")};

    //animate arrow with a css transition class (add arrow next to it as a span and rotate it 180 deg.)
    $calendarCaret.addClass('caret-hover');

});

//Open CALENDAR menu toggle item on mouse over

// Reset drop down on load
$calendarDropdownMenu.hide();

// TODO: INCREASE PAGE HEGIHT
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

// TODO: reset page height
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
    const $calendarContainer = $('#calendarContainer');
    // TODO: Refactor to avoid using vh units
    // $('#calendarContainer').css({"height":"422vh"});
    $calendarContainer.css({"height":"3884px"});

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
    // $calendarContainer.css({"height":"238vh"});
    $calendarContainer.css({"height":"2450px"});

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
    // $calendarContainer.css({"height":"238vh"});
    $calendarContainer.css({"height":"2425px"});

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
    // $calendarContainer.css({"height":"238vh"});
    $calendarContainer.css({"height":"2475px"});

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
    // $calendarContainer.css({"height":"230vh"});
    $calendarContainer.css({"height":"2325px"});

    console.log( "Conditioning" );

    resetCalendarStyle();
    filterStyleCalendar();

    } else if ( $showAll.hasClass('filtered') ){

    // Close filter dropdown menu
    $calendarDropdownMenu.hide();

    $crossfit.show();
    $oly.show();
    $openGym.show();
    $conditioning.show();

    //Reset page HEIGHT
    // TODO: Stlye height in CSS such that container flows around calendar
    // $calendarContainer.css({"height":"324vh"});
    $calendarContainer.css({"height":"3475px"});

    console.log('Show all');

    resetCalendarStyle();
    filterStyleCalendar();

    } else {
    // Close filter dropdown menu
    $calendarDropdownMenu.hide();
    $calendarDropdownItem.removeClass('filtered');

    //Adjust page HEIGHT
    // $calendarContainer.css({"height":"422vh"});
    $calendarContainer.css({"height":"3475px"});

    console.log("Default");

    resetCalendarStyle();
    filterStyleCalendar();
    }
});

/**************************
* END CALENDAR FILTER JS *
**************************/

