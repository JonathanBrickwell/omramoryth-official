
(function preloaderCounter() {
    var count = setInterval(function() {
    var counterText = document.querySelector('.counter').innerHTML;
    var counter = document.querySelector('.counter');
    var preloader = document.querySelector('.preloader');    

        counter.innerHTML = ++counterText;

        if(counterText == 100) {
        clearInterval(count);
        counter.classList.add('hide');
        preloader.classList.add('active');
        }
    }, 10);
  })();