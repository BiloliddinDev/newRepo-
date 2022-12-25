const bar = document.querySelector(".header__burger");
const nav = document.querySelector(".header__filter");
const parda = document.querySelector(".parda");
bar.addEventListener("click", () => {
  nav.classList.toggle("bar");
  parda.classList.toggle("hiden");
});
