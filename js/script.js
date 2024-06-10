var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');
        applyListeners();
    };
    var applyListeners = function applyListeners() {
        menu.addEventListener('click', function () {
            return toggleClass(body, 'nav-active');
        });
    };
    var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };
    init();
}();



document.addEventListener('DOMContentLoaded', function () {
    // typing animation
    function writeText(content, elem) {
      var contentArray = content.split("");
      var current = 0;
      var intervalId = setInterval(function () {
        if (current < contentArray.length) {
          elem.textContent += contentArray[current++];
        } else {
          clearInterval(intervalId);
        }
      }, 80);
    }
  
    // input text for typing animation
    var holder = document.querySelector('#two-title');
    writeText("FRONT-END DEVELOPER", holder);
  });

  window.addEventListener('scroll', function() {
    var header = document.querySelector('.cd-header');
    if (window.scrollY > 50) { // puedes ajustar este valor
        header.style.backgroundColor = 'black';
    } else {
        header.style.backgroundColor = 'transparent'; // color original
    }
});



window.onload = function() {
    var skillbars = document.querySelectorAll('.skillbar');

    skillbars.forEach(function(skillbar) {
        var percent = skillbar.getAttribute('data-percent');
        var bar = skillbar.querySelector('.skillbar-bar');

        bar.style.width = percent;
    });
};  


