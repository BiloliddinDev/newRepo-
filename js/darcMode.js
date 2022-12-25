const darc = document.querySelector(".header__darcmode");
const light = document.querySelector(".header__light");
const body = document.querySelector("body");

const modaelocal = localStorage.getItem("mode");
const toggelbtn = () => {
  darc.classList.toggle("darc-mode");
  light.classList.toggle("hiden");
  darc.classList.toggle("none");
};
