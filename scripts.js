(function () {
  var APP_URL = 'https://app.octolens.com';
  var BTN_ID = 'octolens-go-to-app';

  function ensureButton() {
    if (document.getElementById(BTN_ID)) return;

    var btn = document.createElement('a');
    btn.id = BTN_ID;
    btn.href = APP_URL;
    btn.target = '_blank';
    btn.rel = 'noopener';
    btn.innerHTML =
      '<span>Go to App</span>' +
      '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<path d="M3 3h6v6M3 9l6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';
    document.body.appendChild(btn);
  }

  function init() {
    ensureButton();
    new MutationObserver(ensureButton).observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
