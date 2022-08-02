const itemContainer = document.querySelector(".item-container");
const searchSection = document.querySelector("#item-searching");

fetch("/data/store.json")
  .then((res) => res.json())
  .then(function (data) {
    for (i = 0; i < data.products.length; i++) {
      const cartItem = `
        <div class='card' style='width: 18rem' draggable='true'>
          <img src='img/${data.products[i].photo}' class='card-img-top' draggable='false'/>
          <div class='card-body'>
            <h5 class='card-title'>${data.products[i].title}</h5>
            <p class='card-text'>${data.products[i].brand}</p>
            <p class='card-text'>가격: ${data.products[i].price}</p>
            <button class='to-cart-btn'>담기</button>
          </div>
        </div>
        `;
      itemContainer.insertAdjacentHTML("beforeend", cartItem);
    }
  })
  .catch(function (error) {
    console.log(error);
  });

// 검색어 입력했을 경우
searchSection.addEventListener("change", function (e) {
  e.preventDefault();
  let invalue = searchSection.value;
  searchSection.value = "";
  fetch("/data/store.json")
    .then((res) => res.json())
    .then(function (data) {
      const result = [];
      for (i = 0; i < data.products.length; i++) {
        if (data.products[i].title.includes(invalue) == true) {
          result.push(data.products[i]);
        }
      }
      itemContainer.innerHTML = "";
      result.forEach((data) => {
        const cartItem = `
        <div class='card' style='width: 18rem' draggable='true'>
          <img src='img/${data.photo}' class='card-img-top' draggable='false'/>
          <div class='card-body'>
            <h5 class='card-title'>${data.title}</h5>
            <p class='card-text'>${data.brand}</p>
            <p class='card-text'>가격: ${data.price}</p>
            <button class='to-cart-btn'>담기</button>
          </div>
        </div>
      `;
        itemContainer.insertAdjacentHTML("beforeend", cartItem);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});
