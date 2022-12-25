let btn = document.querySelector(".fa-eye-slash");
let inputSenha = document.querySelector("#senha");
let check__card = document.querySelector(".check__card");
let header__login = document.querySelector(".header__login");
btn.addEventListener("click", () => {
  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
    btn.setAttribute("class", "far fa-eye");
  } else {
    inputSenha.setAttribute("type", "password");
    btn.setAttribute("class", "far fa-eye-slash");
  }
});

header__login.addEventListener("click", () => {
  check__card.classList.add("hiden");
});
