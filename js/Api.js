const Api = "../data.json";

async function MyFun() {
  const request = await fetch(Api);
  const data = await request.json();
  data.map((element) => {
    console.log(element);
    let wrapper = document.querySelector(".choose__wrapper");
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

MyFun();
