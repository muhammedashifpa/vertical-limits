$(document).on('ready', function () {


    $(window).resize(function() {
        if ($(window).width() > 992) {
            $('.course-list').removeClass('course-slick');
            $('.course-list').addClass('course-grid');
        } else {
            $('.course-list').removeClass('course-grid');
            $('.course-list').addClass('course-slick');
        }
    }).resize();

    $(".regular").slick({
    //   dots: true,
    //   infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      speed: 300,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      
    });
    $(".course-slick").slick({
    //   dots: true,
    //   infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
      speed: 300,
      responsive: [
        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      
    });

    // $(".variable").slick({
    //   dots: true,
    //   infinite: true,
    //   variableWidth: true
    // });
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true
    });
  });