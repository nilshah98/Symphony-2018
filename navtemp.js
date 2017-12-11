var elem = document.querySelector('#nav-bg'),
    toggleBtn = document.querySelector('#toggle-btn'),
    elemH = elem.getBoundingClientRect().height,
    elemW = elem.getBoundingClientRect().width;

var open = false;
var scale = void 0,
    offsetX = void 0,
    offsetY = void 0;

var calculateValues = function calculateValues() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  //const cssStyles = getComputedStyle(elem);
  //const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
  var offsetValue = Number(getComputedStyle(elem).getPropertyValue('--offset-value'));

  //  Offsets to center the circle
  offsetX = w / 2 - elemW / 2 - offsetValue;
  offsetY = h / 2 - elemH / 2 - offsetValue;

  // Good old pythagoras
  var radius = Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2));
  scale = radius / (elemW / 2) / 2 + .1; // Add '.1' to compensate for Safari sub pixel blur issue
  return scale;
};

var openMenu = function openMenu() {
  elem.style.setProperty("--translate-x", offsetX + 'px');
  elem.style.setProperty("--translate-y", '-' + offsetY + 'px');
  elem.style.setProperty("--scale", scale);
};
var closeMenu = function closeMenu() {
  elem.style.setProperty("--scale", 1);
  elem.style.setProperty("--translate-x", 0);
  elem.style.setProperty("--translate-y", 0);
};
var animateMenu = function animateMenu() {
  open ? openMenu() : closeMenu();
};

var toggleMenu = function toggleMenu() {
  open = !open;
  animateMenu();
  toggleBtn.classList.toggle('shown');
};

var resizeHandler = function resizeHandler() {
  window.requestAnimationFrame(function () {
    calculateValues();
    animateMenu();
  });
};

calculateValues();

//toggleBtn.onclick = toggleMenu;
toggleBtn.addEventListener('click', toggleMenu, false);
window.addEventListener("resize", resizeHandler, false);