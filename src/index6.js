// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// for (let i = 0; i < this.potions.length; i+=1) {
//   const potion = this.potions[i];
//   if (this.potions[i] === oldName) {
// this.potions.splice(i,1,newName)
//   }
// }

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad);

//----------------new functions--------------------//
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
    if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
  }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        this.potions.splice(this.potions.indexOf(potion), 1);
      }
    }
     return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
     for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName
     }
    }
     return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
console.log(atTheOldToad);
