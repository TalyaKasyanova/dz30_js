let shoppingList = [{
    name: "Яблука",
    bought: false
  },
  {
    name: "Банани",
    bought: true
  },
  {
    name: "Апельсини",
    bought: false
  },
  {
    name: "Груші",
    bought: true
  },
  {
    name: "Гранати",
    bought: false
  },
  {
    name: "Капуста",
    bought: false
  },
  {
    name: "Огірки",
    bought: false
  }
];

function showList() {
  let toBuyList = document.getElementById("to-buy");
  let boughtList = document.getElementById("bought");

  toBuyList.innerHTML = "";
  boughtList.innerHTML = "";

  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    let listItem = document.createElement("li");
    listItem.textContent = item.name;

    if (item.bought) {
      listItem.classList.add("bought");
      boughtList.appendChild(listItem);
    } else {
      listItem.addEventListener("click", function () {
        item.bought = true;
        showList();
      });
      toBuyList.appendChild(listItem);
    }
  }
}

showList();