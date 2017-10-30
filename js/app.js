// (function(){

  // function applyActiveStyle() {
  //   if( $('nav-item').hasClass('active')){
  //     $('nav-link').css("color", "#f27126");
  //   }
  // }
  //
  // applyActiveStyle();

  $('.menu-item').on('click', function(){

    if( $('.menu-item').hasClass('active') ){
      $('.menu-item').removeClass('active');
    }

    $(this).toggleClass('active');
  });
  //Toggle active class in navigation bar (and style it)


  $('#ucfAlert').on('closed.bs.alert', function() {
    $('#nav-container').css({"margin-bottom":"14px"});
  });
// })();


const eliteArr = [
  "Friendships",
  "Confidence",
  "Nakedness",
  "Happiness",
  "Mentality",
  "Health"
];

let clickCount = 0;

$('#heroContainer').on('click', function(){

  if(clickCount !== 0){
    $('#goals').remove(eliteArr[clickCount - 1]);
  }

  if (clickCount < eliteArr.length){
    $('#goals').append(eliteArr[clickCount]);
  }
  clickCount++;

});


function test(){
  // let index = Math.floor( Math.random() * eliteArr.length );
  for ( let i = 0; i < eliteArr.length; i++ ){
    // let index = Math.floor( Math.random() * eliteArr.length );
    // console.log(`JS is hooked up: ${eliteArr[index]}`);

    console.log(eliteArr[i].append().delay(1000));

    // if (eliteArr.indexOf(index) !== -1) {


      // eliteArr.splice(index, 1);


    // }
    //append() eliteArr[index] to lightTextDynamic with delay() and animation()

  }

  console.log("Fitness");


}

test();
