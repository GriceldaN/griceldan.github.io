var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  let currentLevel = 0;
  

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
  
    function createSawBlade (x, y) {
     var hitZoneSize = 25;
     var damageFromObstacle = 10;
     var sawBladeHitZone = game.createObstacle (hitZoneSize, damageFromObstacle);
     sawBladeHitZone.x = x;
     sawBladeHitZone.y = y;
     game.addGameItem(sawBladeHitZone);
     var obstacleImage = draw.bitmap("img/sawblade.png");
     obstacleImage.x = -25;
     obstacleImage.y = -25;
     sawBladeHitZone.addChild(obstacleImage);
    }

    createSawBlade(500, 390);
    createSawBlade(700, 470);
    createSawBlade(1000, 390);
    createSawBlade(1200, 470);
    createSawBlade(1500, 390);
    createSawBlade(1700, 470);
    createSawBlade(2000, 390);
    createSawBlade(2200, 470);
    createSawBlade(2500, 390);
    createSawBlade(2700, 470);
    createSawBlade(3000, 390);
    createSawBlade(3200, 470);
    createSawBlade(3500, 390);
    createSawBlade(3700, 470);
    createSawBlade(4000, 390);

    



    function createEnemy(x, y) {
     var enemy = game.createGameItem("enemy", 25);
     var redSquare = draw.rect(50, 50, "red");
     redSquare.x = -25;
     redSquare.y = -25;
     enemy.addChild(redSquare);
     enemy.x = x;
     enemy.y = y;
     enemy.velocityX = -5;
     enemy.rotationalVelocity = 100;
     game.addGameItem(enemy);
    
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-10)
    }

    enemy.onProjectileCollision = function () {
      game.increaseScore (100);
      enemy.shrink();
    }
  }
  
  createEnemy(2000, groundY - 50);
  createEnemy(3000, groundY - 50);
  createEnemy(4500, groundY - 50);
  createEnemy(5000, groundY -50);
  createEnemy(6000, groundY - 50);
  createEnemy(7000, groundY - 50);
  createEnemy(8000, groundY - 50);
  


 




  function createReward (x,y) {

    var reward = game.createGameItem("reward", 25);
    var greenRect = draw.rect(50, 50, "green");
    greenRect.x = -25;
    greenRect.y = -25;
    reward.addChild(greenRect);

    reward.x = x;
    reward.y = y;
    reward.velocityX = -2;
    reward.rotationalVelocity = 15;
    game.addGameItem(reward);
   
   reward.onProjectileCollision= function() {
     game.increaseScore(500);
     reward.fadeOut();
   };
  }
createReward(1000, groundY - 50);
createReward(1500, groundY - 50);
createReward(3500, groundY - 50);
createReward(4000 , groundY - 50);
createReward(5000, groundY - 50);
createReward(2000, groundY - 50);

function createMarker(x,y) {
  var marker = game.createGameItem("marker", 100);
  var pinkRect = draw.rect(200, 250, "pink", "white", 1);
   pinkRect.x = -100;
   pinkRect.y = -150;
   marker.addChild(pinkRect);

   marker.x = x;
   marker.y = y;
   marker.velocityX = -1
   
   game.addGameItem(marker);

   
  marker.onPlayerCollision = function() {
     game.startLevel();
     marker.fadeOut();
     game.clearLevelObjects();
   } 
}

createMarker(5000, groundY - 50);

    function startLevel() {
      // TODO 13 goes below here

       var level = levelData[currentLevel];
       var levelObjects = gameItems;
        for (var i = 0; i < levelObjects.length; i++) {
          
        }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
