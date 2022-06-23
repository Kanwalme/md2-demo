let backpack = [];
//adding items to the backpack using .push()
backpack.push("pokeball");
backpack.push("potion");
backpack.push("pokedollars");

//to remove first item from the array
//backpack.shift(); OR
backpack.splice(0, 1);

//to add the item "waterstone", and add it to the
// array using .push()
let foundItem = "waterstone";
backpack.push(foundItem);
//to remove waterstone from the array, we use .pop()
backpack.pop();

//to find out how many items are in the array usimg .length
let itemCount = backpack.length;
//console.log(itemCount);

//to push items using .push() into the array
backpack.push("great ball", "antidote", "revive");

//want to remove 2 items starting at the index of 3
//let satchel = backpack.splice(2, 3);
//console.log(satchel);

//to print out items in the array
// for (let i= 0; i<backpack.length; i++){
//     console.log(backpack[i])
// };


//control flow example showing for loops within if statements

if (backpack.length >= 3) {
  console.log("hit 3 statement");
  for (let i = 0; i < 3; i++) {
    console.log(backpack[i]);
  }
} else {
  console.log("hit else");
  for (let i = 0; i < backpack.length; i++) {
    console.log(backpack[i]);
  }
}

//console.log(backpack);




