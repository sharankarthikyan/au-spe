const body = document.querySelector('body');

const canScroll = function (e) {
  const check = document.querySelector('#check');

  if (check.checked) {
    // Disable scroll
    body.style.overflow = 'auto';
  } else {
    // Enable scroll
    body.style.overflow = 'hidden';
  }
};

const hideNav = function (e) {
  const check = document.querySelector('#check');
  check.checked = true;
  body.style.overflow = 'auto';
};
