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

   marker.onProjectileCollision = function(){
    startLevel();
    marker.fadeOut();

   };
}



function runLevel(level) {
  for (var i = 0; i < level.gameItems.length; i++) {
    var item = level.gameItems[i];
    if (item.type === "sawblade") {
      createSawBlade(item.x, item.y);
    } else if (item.type === "enemy") {
      createEnemy(item.x, item.y);
    } else if (item.type === "reward") {
      createReward(item.x, item.y);
    } else if (item.type === "marker") {
      createMarker(item.x, item.y);
    }
  }
}

    function startLevel() {
      // TODO 13 goes below here

       var level = levelData[currentLevel];
       var levelObjects = level.gameItems;
        for (var i = 0; i < levelObjects.length; i++) {
          var item = levelObjects[i];
          var x = item.x;
          var y = item.y;

        if (item.type === "sawblade") {
        createSawBlade(x,y);
        } else if (item.type === "enemy") {
          createEnemy(x,y);
        } else if (item.type === "reward") {
          createReward(x,y);
        } else if (item.type === "marker") {
          createMarker(x,y);
        }
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
