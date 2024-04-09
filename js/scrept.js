$('.purecounter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:1,
      mouseDrag:false,
      touchDrag:false,
      animateOut: 'fadeOut',
    });

      $('.left_departments_info ul li a').click(function () {
        $('.left_departments_info ul li a').removeClass('active')
        $(this).addClass("active");
      });
  });