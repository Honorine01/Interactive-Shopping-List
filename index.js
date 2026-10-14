const itemInput = document.querySelector('#item-input');
const priceInput = document.querySelector('#price-input');
const addButton = document.querySelector('#add-button');
const shoppingList = document.querySelector('#shopping-list');
const markPurchasedButton = document.querySelector('#mark-purchased-button');


// Store the shopping items look for saved data under the name "shoppingItems" 
let shoppingItems = JSON.parse(localStorage.getItem("shoppingItems")) || []; 

//JS waits here for someone to click Add
addButton.addEventListener("click", function() {
const itemName = itemInput.value.trim();
const itemPrice = Number(priceInput.value);

//Check that the inputs are valid if so JS alerts
if (
    itemName === "" ||
    priceInput.value.trim() === "" ||
    !Number.isFinite(itemPrice) ||
    itemPrice < 0
) {
    alert("Please enter an item name and a valid price.");
    return;
}
// Create an item object
    const item = {
        id: Date.now() + Math.random(),
        name: itemName,
        price: itemPrice,
        selected: false,
        purchased: false
    };

// Store the item in the array
    shoppingItems.push(item);
    saveShoppingItems();

// Display the shopping list
    renderShoppingList();

itemInput.value = "";
priceInput.value = "";

});

 //Display all shopping items
function renderShoppingList() {
    
    shoppingList.innerHTML = "";

   
    shoppingItems.forEach(function (item) {
     
        const listItem = document.createElement("li");

// Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "item-select";
        checkbox.checked = item.selected;

        
        checkbox.addEventListener("change", function () {
            item.selected = checkbox.checked;

            saveShoppingItems();
            updateTotalCost();
        });

   
        const itemName = document.createElement("span");
        itemName.className = "item-name";
        itemName.textContent = `${item.name} - KES ${item.price.toFixed(2)}`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener("click", function () {
        const newName = prompt("Enter the new item name:", item.name);

    
    if (newName === null) {
        return;
    }

    const trimmedName = newName.trim();

    if (trimmedName === "") {
        alert("The item name cannot be empty.");
        return;
    }

    const newPrice = prompt("Enter the new price:", item.price);

    if (newPrice === null) {
        return;
    }

    const parsedPrice = Number(newPrice);

// Check that the price is valid
    if (newPrice.trim() === "" || !Number.isFinite(parsedPrice) || parsedPrice < 0) {
        alert("Please enter a valid price.");
        return;
    }

// Update the existing item
    item.name = trimmedName;
    item.price = parsedPrice;

    saveShoppingItems();
    renderShoppingList();
});

         if (item.purchased) {
            listItem.classList.add("purchased");
        }


        listItem.appendChild(checkbox);
        listItem.appendChild(itemName);
        listItem.appendChild(editButton);


        shoppingList.appendChild(listItem);
    });


    updateTotalCost();
}

markPurchasedButton.addEventListener("click", function () {
//This loops through every shopping item in your shoppingItems array.   
    shoppingItems.forEach(function (item) {
        if (item.selected) {
            item.purchased = true;
        }
    });
    saveShoppingItems();
    renderShoppingList();
});

//Save shopping items in the browser
function saveShoppingItems() {
    localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
}

function updateTotalCost() {
    const total = shoppingItems
        .filter(function (item) {
            return item.purchased;
        })
        .reduce(function (sum, item) {
            return sum + item.price;
        }, 0);

    document.querySelector("#total-cost").textContent =
        `Total Cost: KES ${total.toFixed(2)}`;
}

//Display the list when the page loads
renderShoppingList();

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", function () {
    shoppingItems = [];

    saveShoppingItems();
    renderShoppingList();
});


