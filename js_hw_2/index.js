$(document).ready(function(){
  $('.slider').slick({

    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:'.prev_arrow',
    nextArrow:'.next_arrow',
    dots: true,
    centerPadding: '60px',
    responsive:[
      {
        breakpoint: 1079,
        settings: {
          arrows: false,

          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,

          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,

          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});



/*
const menu = document.querySelectorAll('a.link')
const activeMenu = document.querySelector('.dots')

function myFunction(event) {
    console.log(event)
    activeMenu.classList.add('active')
}

for (const element of menu) {
    element.addEventListener('click', myFunction)
}*/

/*
$(".link").on('click', function (event) {
    $('.navigation .navigation__item .dots.active').removeClass('active');
    $(this).children('.link').addClass('active');
});a
*/

const menu = document.querySelector('.navigation')
menu.addEventListener('click',function(event){
    debugger;
    const active = document.querySelector('.dots.active')
    if(active){
        active.classList.remove('active')
        event.target.parentElement.querySelector('.dots').classList.add('active')
        /*event.target.previousElementSibling.classList.add('active') аналогично верхней строчке*/
    }

})
