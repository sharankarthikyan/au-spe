const body = document.querySelector("body");

const canScroll = function (e) {
  const check = document.querySelector("#check");
  console.log(check);
  if (!check.checked) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
};
