// Menú hamburguesa
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('header nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Cerrar al hacer clic en un enlace
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
