window.addEventListener("scroll", function () {
  const containerNav = document.getElementById("containernav");
  const containerHero = document.getElementById("containerhero");

  const containerHeroPosition = containerHero.getBoundingClientRect();

  if (containerHeroPosition.bottom <= 0) {
    containerNav.classList.add("scrolled");
  } else {
    containerNav.classList.remove("scrolled");
  }
});
