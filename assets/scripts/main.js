var hamburger = document.querySelector('.target-burger');
var mainNavigation = document.getElementById('main-nav')

var toggleActiveMenuClass = function(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};

hamburger.addEventListener('click', function(event) {
  toggleActiveMenuClass(event.target, 'toggled');
  toggleActiveMenuClass(mainNavigation, 'expanded');
  event.preventDefault();
});