// ************Header***********
// Menu dropdown
$('.nav__item').hover(function(){
    $(this).find('.menu__dropdown').toggleClass('active')
})


// Work macy

const workMacy = document.querySelector('#work__macy');
var macyInstance = Macy({
    container: workMacy,
    margin: {
        x: 10,
        y: 36  
      }
  });

// Modal work
$('.modal__close-btn').click(function(){
    $('.modal__work').removeClass('active')
})