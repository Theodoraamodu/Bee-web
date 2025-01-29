document.addEventListener('DOMContentLoaded', function() {
    var fact1Btn = document.getElementById('fact1Btn');
    var fact2Btn = document.getElementById('fact2Btn');
    var fact3Btn = document.getElementById('fact3Btn');
    var fact4Btn = document.getElementById('fact4Btn');
  
    var fact1 = document.getElementById('fact1');
    var fact2 = document.getElementById('fact2');
    var fact3 = document.getElementById('fact3');
    var fact4 = document.getElementById('fact4');
  
    function showFact(fact) {
      fact.style.display = 'block';
      fact.style.animation = 'popUp 0.5s ease forwards';
      setTimeout(function() {
        fact.style.animation = '';
      }, 500);
    }
  
    function hideAllFacts() {
      fact1.style.display = 'none';
      fact2.style.display = 'none';
      fact3.style.display = 'none';
      fact4.style.display = 'none';
    }
  
    fact1Btn.addEventListener('click', function() {
      hideAllFacts(); // Hide all facts first
      showFact(fact1);
    });
  
    fact2Btn.addEventListener('click', function() {
      hideAllFacts(); // Hide all facts first
      showFact(fact2);
    });
  
    fact3Btn.addEventListener('click', function() {
      hideAllFacts(); // Hide all facts first
      showFact(fact3);
    });
  
    fact4Btn.addEventListener('click', function() {
      hideAllFacts(); // Hide all facts first
      showFact(fact4);
    });
  
    document.addEventListener('click', function(event) {
      if (!event.target.matches('#fact1Btn') && !event.target.matches('#fact2Btn') &&
          !event.target.matches('#fact3Btn') && !event.target.matches('#fact4Btn')) {
        hideAllFacts();
      }
    });
  });
  




  let slideIndex = [1,1,1,1];
  let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);
  showSlides(1, 3);
  
  
  function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
  }
  
  function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1; }
    if (n < 1) { slideIndex[no] = x.length; }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}