'use strict';

(function () {
  var greetingBlock = document.querySelector('.animation-greetings');

  var greetingBlockAnimation = function () {
    headerBack.classList.remove('animation-greetings');
    greetingBlock.classList.toggle('page-header__greeting-wrapper');
  }

  var headerBack = document.querySelector('.animation-header-background');

  var headerBackAnimation = function () {
    headerBack.classList.remove('animation-header-background');
    headerBack.classList.add('page-header__wrapper');
  }

  window.addEventListener('load', greetingBlockAnimation);
  window.addEventListener('load', headerBackAnimation);

  var goalHTML = document.querySelector('.my-goals__tech-skill-animation-html');
  var goalCSS = document.querySelector('.my-goals__tech-skill-animation-css');
  var goalJS = document.querySelector('.my-goals__tech-skill-animation-js');
  var goalAJ = document.querySelector('.my-goals__tech-skill-animation-aj');
  var goalPP = document.querySelector('.my-goals__tech-skill-animation-pp');

  function goalsAnimation () {
    var scrolled = window.pageYOffset;
    var coords = document.querySelector('.page-header').clientHeight +
                document.querySelector('.page-main__linear-wrapper').clientHeight +
                document.querySelector('.experience').clientHeight;;

    if (scrolled > coords) {
      goalHTML.classList.remove('my-goals__tech-skill-animation-html');
      goalCSS.classList.remove('my-goals__tech-skill-animation-css');
      goalJS.classList.remove('my-goals__tech-skill-animation-js');
      goalAJ.classList.remove('my-goals__tech-skill-animation-aj');
      goalPP.classList.remove('my-goals__tech-skill-animation-pp');

      goalHTML.classList.add('my-goals__tech-skill-visual-already--html');
      goalCSS.classList.add('my-goals__tech-skill-visual-already--css');
      goalJS.classList.add('my-goals__tech-skill-visual-already--js');
      goalAJ.classList.add('my-goals__tech-skill-visual-already--ajax');
      goalPP.classList.add('my-goals__tech-skill-visual-already--pp');
    }
  }

  window.addEventListener('scroll', goalsAnimation);
})();
