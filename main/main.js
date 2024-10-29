let plus = document.querySelector(".plus");
let count = document.querySelector(".quantity");
let minus = document.querySelector(".minus");
let allFood = document.querySelector(".all_food");
let foods = document.querySelectorAll(".order");
let name = document.querySelector(".nameFood");
let price = document.querySelector(".priceFood");
let weigth = document.querySelector(".weigthFood");
let image = document.querySelector(".imgFood");
let cread = document.querySelector(".foodAdd");
let already = document.querySelector(".finish");
let meal = document.querySelector(".meal");
let allInput = document.querySelectorAll(".foodAdd input");
read();
meal.addEventListener("click", () => {
  cread.style.display = "flex";
});

already.addEventListener("click", () => {
  for (let i of allInput) {
    if (i.value === "") {
      alert("Заполните все поля");
      break;
    } else {
      let obj = {
        img: image.value,
        price: price.value,
        name: name.value,
        weigth: weigth.value,
      };
      let data = JSON.parse(localStorage.getItem("data")) || [];
      data.push(obj);
      localStorage.setItem("data", JSON.stringify(data));
      cread.style.display = "none";
      read();
      break;
    }
  }
});
function read() {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.innerHTML = "";
  data.forEach((el, index) => {
    let product = document.querySelector(".product");
    let order = document.createElement("div");
    order.classList.add("order");
    product.append(order);
    let nameFood = document.createElement("p");
    let imgFood = document.createElement("img");
    let priceFood = document.createElement("h1");
    let weigthFood = document.createElement("h6");
    let btnFood = document.createElement("button");
    order.append(nameFood);
    order.prepend(imgFood);
    order.append(priceFood);
    order.append(weigthFood);
    order.append(btnFood);
    imgFood.src = el.img;
    nameFood.innerText = el.name;
    priceFood.innerText = el.price + "₽";
    weigthFood.innerText = el.weigth + "г";
    btnFood.innerText = "Добавить";
    basket(el, index, btnFood);
  });
}
function basket(el, index, btnFood) {
  btnFood.addEventListener("click", () => {
    if (index === index) {
      let newObj = {
        img: el.img,
        price: el.price,
        name: el.name,
        weigth: el.weigth,
      };
      btnFood.innerText = "Добавлено";
      btnFood.style.background = "green";
      btnFood.style.color = "white";
      let orderview = document.querySelector(".orderview");
      let orderOfPeople = document.createElement("div");
      let counter = document.createElement("div");
      counter.classList.add("counter");
      let orderInfo = document.createElement("div");
      orderOfPeople.classList.add("orders_of_people");
      orderInfo.classList.add("orderInfo");
      let plus = document.createElement("button");
      let minus = document.createElement("button");
      plus.classList.add("plus");
      plus.innerText = "+";
      minus.classList.add("minus");
      minus.innerText = "-";
      let quantity = document.createElement("p");
      quantity.classList.add("quantity");
      let foodName = document.createElement("p");
      let foodImg = document.createElement("img");
      let foodPrice = document.createElement("h1");
      let foodWei = document.createElement("h6");
      orderview.append(orderOfPeople);
      orderOfPeople.append(orderInfo);
      orderInfo.append(foodName);
      orderOfPeople.prepend(foodImg);
      orderOfPeople.append(counter); //
      counter.append(plus);
      counter.append(quantity);
      counter.append(minus);
      orderInfo.append(foodPrice);
      orderInfo.append(foodWei);
      foodImg.src = el.img;
      foodName.innerText = el.name;
      foodPrice.innerText = el.price + "₽";
      foodWei.innerText = el.weigth + "г";
      let count = 1;
      quantity.innerHTML = count;
      let basket = JSON.parse(localStorage.getItem("basket")) || [];
      basket.push(newObj);
      localStorage.setItem("basket", JSON.stringify(basket));
      plus.addEventListener("click", () => {
        quantity.innerHTML = count++;
      });
      minus.addEventListener("click", () => {
        quantity.innerHTML = count--;
        if(count <= 0){
          count = 0
        }
      });
    }
  });
}
