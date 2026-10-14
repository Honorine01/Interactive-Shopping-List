# Interactive Shopping List

## Description

The Interactive Shopping List is a web application that helps users
organize and manage their shopping items.

Users can add new items, edit existing items, mark items as purchased,
calculate the total cost of selected items, and clear the shopping list.

## Features

- Add shopping items.
- Edit existing items.
- Mark items as purchased.
- Calculate the total cost of selected items.
- Clear the shopping list.
- Save items using browser local storage.

In CSS we need to reset the browser spacing first margin is for the outer spacing and padding is for inner spacing box-sizing border-box makes an element's specified width include its padding and border.
Then style the entire page
style the container and then the main heading
flex-shrink This controls whether a flex item is allowed to shrink when its container runs out of space.if its 0 it prevents the item from shrinking goes with overfloe-wrap;anywhere

<div> grouped two buttons together. By default, Flexbox arranges its child elements horizontally in a row.

an array stores multipe values in a single variable [] this aray is empty we'll use this array to keep track of the items added to the shopping list.
I used let as let allows me to change the values often or reassig the new values. Find the HTML element whose ID is item-input, and store a reference to that element in a variable called itemInput.
 Create a new list item
Give the list item some text
 Add the list item to the shopping list appendChild()

});marks the end of an eventListener()

console.log(itemName);
console.log(itemPrice);

The return stops the function from continuing, preventing an invalid item from being added.
Zero is accepted as a price, but negative prices and empty fields are rejected.
Type property makes it a checkbox

document.createElement("button") creates a new button.
editButton.textContent = "Edit" sets the text displayed on it.
prompt() opens a small dialog where you can enter a new value.
item.name = trimmedName updates the item's name in your JavaScript object.
item.price = parsedPrice updates its price.
renderShoppingList() redraws the list to display the updated information.
JSON.parse Converts the saved text into JavaScript data.Then ||[] If there is no saved data, use an empty array instead.This means that the first time someone opens the shopping list, it starts empty. On subsequent visits, it can load the previously saved items.

saveShoppingItems() is the name of our function.
JSON.stringify(shoppingItems) converts the array into a string.
localStorage.setItem() saves that string in the browser.
We're creating a function because we will need to save the items at several points in our program.
-
The main reason for using trimmedName is to prevent empty names and remove unnecessary spaces.

Number.isFinite() checks whether a value is a valid, finite number.