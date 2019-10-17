/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// GameObject Constructor //
// function GameObject(gameProperties) {
//   this.createdAt = gameProperties.createdAt;
//   this.name = gameProperties.name;
//   this.dimensions = gameProperties.dimensions;
// }
// Destroy Prototype //
// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game.`
// }

class GameObject{
  constructor(gameProperties){
    this.createdAt = gameProperties.createdAt;
    this.name = gameProperties.name;
    this.dimensions = gameProperties.dimensions;
  }
  destroy(){
    return `${this.name} was removed from the game.`
  }
}

class CharacterStats extends GameObject{
  constructor(charProperties){
    super(charProperties);
    this.healthPoints = charProperties.healthPoints;
    this.name = charProperties.name;
  }
  takeDamage(){
    return this.name + ' took damage.'
  }
}

class Humanoid extends CharacterStats {
  constructor(humanoidProperties){
    super(humanoidProperties);
    this.team = humanoidProperties.team;
    this.weapons = humanoidProperties.weapons;
    this.language = humanoidProperties.language;
  }
  greet(){
    return `${this.name} offers a greeting in ${this.language}`;
  }
}


// // Character Stats Constructor //
// function CharacterStats(charProperties) {
//   GameObject.call(this, charProperties); // Call in GameObject //
//   this.healthPoints = charProperties.healthPoints;
//   this.name = charProperties.name;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);

// // Take Damage Prototype //
// CharacterStats.prototype.takeDamage = function() {
//   return this.name + ' took damage.';
// }

// Humanoid Constructor //
// function Humanoid(humanoidProperties) {
//   GameObject.call(this, humanoidProperties);
//   CharacterStats.call(this, humanoidProperties);
//   this.team = humanoidProperties.team;
//   this.weapons = humanoidProperties.weapons;
//   this.language = humanoidProperties.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);

// // Greet prototype //
// Humanoid.prototype.greet = function() {
// return `${this.name} offers a greeting in ${this.language}`;
// }

/*
=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/

/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/

/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!