const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
let wrapper = document.querySelector(".choose__wrapper");
const Api = "../data.json";

async function MyFun() {
  const request = await fetch(Api);
  const data = await request.json();
  data.map((element) => {
    wrapper.innerHTML += `
    <div class="choose__card">
    <h2 class="choose__title">${element.name}</h2>
    <p class="choose__text1">${element.tip}</p>
    <img class="choose__img" src="${element.img}" alt="" />
    <div class="choose__info">
      <div class="choose__box">
        <span class="choose__filter fil1">5 Seats</span>
        <span class="choose__filter fil2">21+ Years</span>
      </div>
      <div class="choose__box">
        <span class="choose__filter fil3">Automatic</span>
        <span class="choose__filter fil4">1-lit / 2.5 km</span>
      </div>
      <div class="choose__box"></div>
    </div>
  </div>
    `;
  });
}

const getData = async (resurse) => {
  const request = await fetch(resurse);
  const data = await request.json();
  return data;
};

function myFun1(a) {
  getData(Api)
    .then((data) => {
      data.map((element) => {
        if (element.info === a) {
          wrapper.innerHTML += `
          <div class="choose__card">
          <h2 class="choose__title">${element.name}</h2>
          <p class="choose__text1">${element.tip}</p>
          <img class="choose__img" src="${element.img}" alt="" />
          <div class="choose__info">
            <div class="choose__box">
              <span class="choose__filter fil1">5 Seats</span>
              <span class="choose__filter fil2">21+ Years</span>
            </div>
            <div class="choose__box">
              <span class="choose__filter fil3">Automatic</span>
              <span class="choose__filter fil4">1-lit / 2.5 km</span>
            </div>
            <div class="choose__box"></div>
          </div>
        </div>
          `;
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// MyFun();

btn1.addEventListener("click", (e) => {
  myFun1("ekanom");
});

btn2.addEventListener("click", () => {
  myFun1("super");
});

btn3.addEventListener("click", () => {
  myFun1("gruz");
});

btn4.addEventListener("click", () => {
  MyFun();
});
