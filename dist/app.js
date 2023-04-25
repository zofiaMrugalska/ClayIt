const burgerMenu = document.querySelector(`.burgerMenu`);
const closeBurgerMenu = document.querySelector(`.cross`);
const menuResponsive = document.querySelector(`.menuResponsive`);

burgerMenu.addEventListener(`click`, () => {
  burgerMenu.classList.add(`hidden`);
  closeBurgerMenu.classList.remove(`hidden`);
  menuResponsive.classList.remove(`hidden`);
});

closeBurgerMenu.addEventListener(`click`, () => {
  burgerMenu.classList.remove(`hidden`);
  closeBurgerMenu.classList.add(`hidden`);
  menuResponsive.classList.add(`hidden`);
});

document.addEventListener("click", (event) => {
  if (
    !closeBurgerMenu.contains(event.target) &&
    !menuResponsive.contains(event.target) &&
    !burgerMenu.contains(event.target)
  ) {
    burgerMenu.classList.remove(`hidden`);
    closeBurgerMenu.classList.add(`hidden`);
    menuResponsive.classList.add(`hidden`);
  }
});
