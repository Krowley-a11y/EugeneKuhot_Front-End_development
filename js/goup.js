(function () {

  var scrollBtn = document.getElementById('scrollTop');

  window.onscroll = function () {

    if (document.body.scrollTop > document.documentElement.clientHeight) {
      scrollBtn.style.opacity = "1";
    } else {
      scrollBtn.style.opacity = "0";
    }
  };

  var timeOut;

  var goUp = function () {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
      window.scrollBy(0, -5000);
      timeout = setTimeout('goUp()', 20)
    } else clearTimeout(timeOut);
  }

  scrollBtn.addEventListener('click', goUp);

})();
