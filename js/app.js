// (function(){

  const $window = $(window);
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

  //Open contact links in new tab or window on click
  $('.contact-link').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(e) {
           e.preventDefault();
           e.stopPropagation();
           window.open(this.href, '_blank');
       });
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
