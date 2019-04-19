$(document).ready(function() {
    var slideNow = 1;
    var slideNowB = 1;
    var slideCount = $('#slidewrapper').children().length;
    var slideCountB = $('#sms-slidewrapper').children().length;
    var translateWidth = 0;
    var slideInterval = 5000;
    var switchInterval = setInterval(nextSlide, slideInterval);
    var navBtnId = 0;
    var allButtons = $('#nav-btns').find('li');
  
    function addActive(currentIndex, children) {
  
      function firstActive(children) {
          $(children).each(function(idx, item) {
            idx === 0 ? $(item).addClass('active') : null;
          });
        }
  
      $(children).each(function(index, item) {
        if (currentIndex === 4) {
          firstActive(children)
        }
        if (currentIndex === index) {
          $(item).addClass('active');
        } else {
          $(item).removeClass('active');
        }
      });
    }
  
    function nextQuestion() {
        translateWidth = -$('#sms-viewport').width() * slideNowB;
        $('#sms-slidewrapper').css({
            transform: 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNowB++;
    };
  
    function nextSlide() {
      addActive(slideNow, allButtons);
      if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
      } else {
        translateWidth = -$('#viewport').width() * slideNow;
        $('#slidewrapper').css({
          transform: 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
      }
    }
  
    function prevSlide() {
      addActive(slideNow, allButtons);
      if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
          transform: 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = slideCount;
      } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
          transform: 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
      }
    }

    // Select
    $('.slct').click(function(){
        var dropBlock = $(this).parent().find('.drop');
        if( dropBlock.is(':hidden') ) {
            dropBlock.slideDown();
            $(this).addClass('active');
            $('.drop').find('li').click(function(){
                var selectResult = $(this).html();
                $(this).parent().parent().find('input').val(selectResult);
                $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
                dropBlock.slideUp();
            });
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp();
        }
        return false;
    });


    $('.checkboxes').find('.check').click(function(){
        if( $(this).find('input').is(':checked') ) {
            $(this).removeClass('active-ch');
            $(this).find('input').removeAttr('checked');
        } else {
            $(this).addClass('active-ch');
            $(this).find('input').attr('checked', true);
        }
    });

  
    $('.slide-nav-btn').click(function() {
      navBtnId = $(this).index();
      addActive(slideNow, allButtons);
      if (navBtnId + 1 != slideNow) {
        translateWidth = -$('#viewport').width() * navBtnId;
        $('#slidewrapper').css({
          transform: 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = navBtnId + 1;
      }
    });

    $('.close').click(function() {
        $('.sms').addClass('hidden');
    });

    $('#btn-form-slide-1').click(function() {
        nextQuestion();
    });

    $('#btn-form-slide-2').click(function() {
        nextQuestion();
    });

    $('#btn-form-slide-3').click(function() {
        nextQuestion();
    });

    $('#btn-form-slide-4').click(function() {
        nextQuestion();
    });
  
    $('#next-btn').click(function() {
      nextSlide();
    });
  
    $('#prev-btn').click(function() {
      prevSlide();
    });
  
    $('#viewport').hover(
      function() {
        clearInterval(switchInterval);
      },
      function() {
        switchInterval = setInterval(nextSlide, slideInterval);
      }
    );
  });