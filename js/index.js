//navbar
    
$(".openNav").click(function(){
    $("#left-menu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closeBtn").click(function(){
    $("#left-menu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})

$("#leftMenu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})
//accordion
$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


//countDown
const targetDate = new Date('2024-08-01T23:59:59').getTime();
const countdownInterval = setInterval(updateCountdown, 1000);
function updateCountdown(){
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
}

//counter for characters

$('#message').on('input', function() {
    var currentChars = $(this).val().length;
    console.log(currentChars);
    var maxChars = 100;

    console.log(maxChars);
    var remainingChars = maxChars - currentChars;
    // Update the counter text
    $('#chars').text(remainingChars);
    if(remainingChars <= 0){
        $('#chars').text("you reached max chars avilable");
    }
  });