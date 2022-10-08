const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
for (let i = 0; i < this.potions.length; i+=1) {
  const potion = this.potions[i];
  if (this.potions[i] === oldName) {
this.potions.splice(i,1,newName)
  }
}

    // Change code above this line
  },
};
console.log(atTheOldToad);