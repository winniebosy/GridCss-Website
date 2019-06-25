  

  $(document).ready(function(){ //prevents jquery from running before the doc finishes loading
    $('a[href="#]') . on('click', function(e) {e.preventDefault
    
     var target = this.hash,
     $target = $(target);
     $('html', 'body').stop().animate({
         'scrollTop' : $target.offset().top},
         900, 'swing' , function () {
             window.location.harsh = target;

        
     });
    
    });

  });