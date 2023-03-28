    const tab = document.querySelector(".tab");

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const button_1 = document.querySelector('#hbtn');
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  button_1.classList.toggle('hidden');

   var dots = document.querySelectorAll('.dots');
  dots.forEach(function(dot) {
    dot.classList.toggle('hidden');
  });

     var dots1 = document.querySelectorAll('.dots-1');
  dots1.forEach(function(dot) {
    dot.classList.toggle('hidden');
  });
}

function closeMenu() {
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger');
  const lines = document.querySelectorAll('.line');
  const button_1 = document.querySelector('#hbtn');
  button_1.classList.remove('hidden');
  hamburger.classList.remove('active')
  menu.classList.remove('active');
  lines.forEach(line => line.classList.remove('active'));

     var dots = document.querySelectorAll('.dots');
  dots.forEach(function(dot) {
    dot.classList.remove('hidden');
  });

     var dots1 = document.querySelectorAll('.dots-1');
  dots1.forEach(function(dot) {
    dot.classList.remove('hidden');
  });
    const button = document.querySelectorAll('.homeButton');
    button.classList.remove('hidden');

}

