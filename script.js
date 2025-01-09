// main variables
let waffles = 0;
let power = 1;
let chefs = 0;
let price = [50, 75];
let chefInterval = 3000;

// update function to make my life easier that I for SOME reason didn't fucking think of
function update() {
  document.getElementById("WaffleCount").innerHTML = waffles;
  document.getElementById("ChefCount").innerHTML = chefs;
}

// function so the first upgrade actually does something
setInterval(function chefFunc() {
  waffles += chefs;
  update();
}, chefInterval);

// do you even need a comment for this?
document.getElementById("WaffleMain").onclick = function () {
  waffles += power;
  update();
};

// automatic waffle production so the player doesnt have to be on the game 24/7
document.getElementById("UpgradeOne").onclick = function () {
  if (waffles >= price[0]) {
    waffles -= price[0];
    price[0] *= 2;
    chefs += 1;
    update();
    chefFunc();
  }
};

// more power so the game doesn't feel stale, boring and slow
document.getElementById("UpgradeTwo").onclick = function () {
  if (waffles >= price[1]) {
    waffles -= price[1];
    price[1] *= 2;
    power += 1;
    update();
  }
};

/* 
    reminder so you don't forget
    fucking loser

    order:
        1. parentheses
        2. exponents
        3. multiplication, division and then modulos/modulus
        4. addition and subtraction
        
    forgetful little shit
*/
