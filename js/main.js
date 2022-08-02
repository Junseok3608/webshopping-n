const itemContainer = document.querySelector(".item-container");
const cartItem = `
        <div class='card' style='width: 18rem' draggable='true'>
          <img src='img/${data[i].photo}' class='card-img-top' />
          <div class='card-body'>
            <h5 class='card-title'>${data[i].title}</h5>
            <p class='card-text'>${data[i].brand}</p>
            <p class='card-text'>${data[i].price}</p>
            <button>담기</button>
          </div>
        </div>
        `;
fetch("")
  .then((res) => res.json())
  .then(function (data) {
    for (i = 0; i < data.length; i++) {
      document.querySelector(".row").insertAdjacentHTML("beforeend", cartItem);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
