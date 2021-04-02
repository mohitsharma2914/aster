const img_url= 'images/';
let warning_sign = [
    {
        id: 1,
        img_name : '1.png',
        text: 'Failure to thrive – not gaining weight and height as per the age norms'
    },
    {
        id: 2,
        img_name : '2.png',
        text: 'Infections warranting multiple hospitalizations'
    },
    {
        id: 3,
        img_name : '3.png',
        text: 'Requirement of intravenous antibiotics to clear infections'
    },
    {
        id: 4,
        img_name : '4.png',
        text: '2 or more episodes of pneumonia'
    },
    {
        id: 5,
        img_name : '5.png',
        text: 'Family history of death of children at young age due to immune deficiency'
    },
    {
        id: 6,
        img_name : '6.png',
        text: 'Repeated episodes of diarrhea'
    },
    {
        id: 7,
        img_name : '7.png',
        text: '2 or more episodes of sinus infections within a year'
    },
    {
        id: 8,
        img_name : '8.png',
        text: '2 or more episodes of ear discharge'
    },
    {
        id: 9,
        img_name : '9.png',
        text: 'Repeated skin infections'
    },
    {
        id: 10,
        img_name : '10.png',
        text: 'Repeated abscess formation (liver abscess, brain abscess)'
    },
]

// warning symptoms boxes
$(document).ready(function(){
    let html = '';
   for(let i=0; i<warning_sign.length;i++){
    html += `<div class="whiteBox" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="800">
        <div class='img-box'>
            <img alt=${"immune-"+ warning_sign[i].id} src=${img_url+ warning_sign[i].img_name} />
        </div>
        <p>${warning_sign[i].text} </p>
    </div>`
   }
   $('#box').html(html);
})



// Faqs

$(".accordion .accordion-head:first .ans").slideDown();
$(".accordion .accordion-head:first").addClass('active');
$(".accordion .title").click(function() {
    $(this).siblings('.ans').slideToggle();
    $(this).parent('.accordion-head').toggleClass('active');
    $(this).parent('.accordion-head').siblings('.accordion-head').find('.ans').slideUp();
    $(this).parent('.accordion-head').siblings('.accordion-head').removeClass('active');
}); 

//slider

const testmonials = [
    {
        img_name : 'testimonial.png',
        name: 'John Doe',
        designation: 'Software Engineer',
        compliment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        img_name : 'testimonial.png',
        name: 'John Doe',
        designation: 'Software Engineer',
        compliment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        img_name : 'testimonial.png',
        name: 'John Doe',
        designation: 'Software Engineer',
        compliment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        img_name : 'testimonial.png',
        name: 'John Doe',
        designation: 'Software Engineer',
        compliment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        img_name : 'testimonial.png',
        name: 'John Doe',
        designation: 'Software Engineer',
        compliment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    }
]

$(document).ready(function(){
    let html = '';
    for(let i=0; i<testmonials.length;i++){
        html += `<li class="testimonial">
        <div class="person-detail">
            <img src=${img_url + testmonials[i].img_name} alt='' />
            <div class="name">
                <h4>${testmonials[i].name}</h4>
                <p>${testmonials[i].designation}</p>
            </div>
        </div>
        <p class='desc'>${testmonials[i].compliment}</p>
    </li>`
    }
    $('#testimonials').html(html);
})

// slider testimonials
 $(document).ready(function(){
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $(".back"),
        nextArrow: $(".next"),
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
      });
})

// AOS Initiate
AOS.init({
    // disable: function() {
    //     var maxWidth = 767;
    //     return window.innerWidth < maxWidth;
    //   }  
    disable : 'tablet'
  });


//   Scroll to top


$('#backToTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
});

var input = document.getElementById('phone');
    input.addEventListener('keyup', function (event) {
      if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
        this.value = this.value.replace(/\D/g, "");

      }
    });

