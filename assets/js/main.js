
$(document).ready(function(){

  $('.navbar-toggle').click(function(){
   $('.ham').toggleClass('open');
});

  // Add smooth scrolling to all links
  $("a.smoothClick").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  $("#all").on("click", function(e){
    e.preventDefault();
    $(".projectHolder").show(300);
  });

  $("#casual").on("click", function(e){
    e.preventDefault();
    $(".projectHolder").hide(150);
    $(".casual").show(300);
  });

  $("#corp").on("click", function(e){
    e.preventDefault();
    $(".projectHolder").hide(150);
    $(".corp").show(300);
  });


  var offsetY= 0.63*($(".col-4")[0].offsetTop);
  console.log(offsetY);

  if($(window).scrollTop() > 0){
    $(".to-top").addClass("animated bounce").css("display", "flex");
  }

  $(window).scroll(function() {
    if($(window).scrollTop() > 40){
      $(".to-top").fadeIn(200).css("display", "flex");
    }
    else{
      $(".to-top").fadeOut(200).css("display", "none");
    }

    if($(window).scrollTop() > offsetY) {
      var counter=$(".counter");
      for(var i=0;i<counter.length;i++){
        counter[i].style.width= counter[i].dataset.width+"%";
      }
    }
    console.log($(window).scrollTop());
    if($(window).scrollTop() > ($("#lesson")[0].offsetTop)-500){
      $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 1000,
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
    }
});




});
