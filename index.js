var audio = new Audio();
var song = ['ss.mp3', 'Minion Kung Fu Sound Effect.mp3'];
audio.volume = 0.1 ;
var currentSong = 0; 
var count = 0;
var x = 1000;
var y;
var audio2 = new Audio();
var sec = $('#sec').text();
var cursor = $('.cursorimg');
var x;
$('.inp').val(count);
audio.src = song[currentSong];

window.onload = function() {
  	audio2.src = 'mo.mp3';
	audio2.volume = 0.1 ;
	
 };





$('.new-game').on('click',function(){
	location.reload(true);
});

$('.block').on('click', function(){
	cursor.addClass('an');
	if($(this).children(".minion").hasClass('active')){
		  currentSong++;
    if(currentSong>1){
			currentSong=1;
		}
		count++;
    
    if(count >=20 && count <=50){
      x=800;
    }
    if(count >=51 && count <=80){
      x=600;
    }
    if(count >=81 && count <=100){
      x=500;
    }
    if(count >=101 ){
      x=400;
    }
    
    

		$(".minion").removeClass('active');
  		
  		sec = 11;

  		$('.inp').val(count);
  		if(count>0){
  			cursor.addClass('an');
  			audio.src=song[currentSong];
  			audio.play();
  		}
  		setTimeout(() => {
  		  cursor.removeClass('an');

  		}, 300);
	}else{
		$('.inp').val(count);
		setTimeout(() => {
  		  cursor.removeClass('an');

  		}, 300);
	currentSong=0;
	audio.src=song[currentSong];
	audio.play();
	}
	
 });

document.addEventListener('mousemove', e => {
  cursor.attr("style", "top:"+e.pageY+"px; left: "+(parseInt(e.pageX)+1) +"px;");
});

$('.volume-on').on('click', function(){

  var r = setInterval(() => {
    var random = Math.floor(Math.random() * (8 - 0 + 1)) + 1;
    $(".block").children().eq(random).addClass('active')
    setTimeout(() => {
      $(".block").children().eq(random).removeClass('active')
    }, x);
    console.log(x);
}, 2000);

  $(this).css({
    background: 'rgb(33, 221, 117)',    
    color: '#000',
    transform: 'scale(1.2)'
  });
  $('.volume-on').addClass('prevent-click');
  audio2.play();
  audio2.volume = 0.1;



    setInterval(function(){

    sec--;
  if(sec==0){
      $(".block").children().eq(random).removeClass('active')
     $('.game-over').css({
       display: 'block',
     });
  }
  if(sec == -1){
      $('.new-game').css({
        background: 'red',
        transform: 'scale(1.1)'
      });
      $('.volume-on').css({
        transform: 'scale(1)'
      });

      sec = 0;

      clearInterval(r);
      audio2.volume = 0;
    }
  if(sec <= 11 && sec >=8){
    $('.sec').css({
      color: 'green',
    });
  }
  if(sec <= 7 && sec >= 5){
    $('.sec').css({
      color: 'yellow',
    });
  }
  if(sec <= 4 && sec >= 0){
    $('.sec').css({
      color: 'red',
    });
  }
    
  if(sec < 10){
      $('#sec').text('0' + sec);
    }else{
        $('#sec').text(sec);
    }
  },1000);
});