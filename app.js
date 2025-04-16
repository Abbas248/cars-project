let btn = document.querySelector("#submitBtn");
let carName = document.querySelector("#name");
let carModel = document.querySelector("#model");
let carEngine = document.querySelector("#engine");
let carImage = document.querySelector("#image");
let carColor = document.querySelector("#color");

btn.addEventListener("click", function () {
  let items = [];
  items.push(carName.value);
  items.push(carModel.value);
  items.push(carEngine.value);
  items.push(carImage.value);
  items.push(carColor.value);

  passValue(items[0], items[1], items[2], items[3], items[4]);
});

function passValue(a, b, c, d, e) {
  class Car {
        constructor(name, model, engine, image, color) {
            (this.carname = name),
                (this.carmodel = model),
                (this.carengine = engine),
                (this.carimage = image),
                (this.carcolor = color);
        }
    }

  let newCar = new Car(a, b, c, d, e);
  console.log(newCar);

  let cardsDiv = document.querySelector("#cards");
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
  <img class="card-img-top" src="${carImage.value}" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Name : ${carName.value}</h5>
          <h5 class="card-text">Model : ${carModel.value}</h5>
          <h5 class="card-text">Engine : ${carEngine.value}</h5>
          <h5 class="card-text">Color : ${carColor.value}</h5>
        </div>`;

  cardsDiv.appendChild(cardDiv);
}