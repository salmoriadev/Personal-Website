const mobileNavigation = document.querySelector(".mobile-nav");

if (mobileNavigation) {
  mobileNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      mobileNavigation.open = false;
    }
  });
}
