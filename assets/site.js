// Shared page behaviour: reveal animations and the darkening top bar.

  (function(){
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var items = document.querySelectorAll('.reveal');
    if(reduce || !('IntersectionObserver' in window)){
      items.forEach(function(el){ el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
      }, {threshold:0.12});
      items.forEach(function(el){ io.observe(el); });
    }
    var bar = document.querySelector('header.bar');
    window.addEventListener('scroll', function(){
      bar.style.background = window.scrollY > 40 ? '#08293Af2' : '#08293Acc';
    }, {passive:true});
  })();
