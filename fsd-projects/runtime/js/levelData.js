var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: 390 },
          { type: "sawblade", x: 700, y: 470 },
          { type: "sawblade", x: 1000, y: 390 },
          { type: "sawblade", x: 1200, y: 470 },
          { type: "sawblade", x: 1500, y: 390 },
          { type: "sawblade", x: 1700, y: 470 },
          { type: "sawblade", x: 2000, y: 390 },
          { type: "sawblade", x: 2200, y: 470 },
          { type: "sawblade", x: 2500, y: 390 },
          { type: "sawblade", x: 2700, y: 470 },
          { type: "sawblade", x: 3000, y: 390 },
          { type: "sawblade", x: 3200, y: 470 },
          { type: "sawblade", x: 3500, y: 390 },
          { type: "sawblade", x: 3700, y: 470 },
          { type: "sawblade", x: 4000, y: 390 },
          { type: "reward", x: 1500, y: groundY - 50 },
          { type: "reward", x: 3500, y: groundY - 50 },
          { type: "reward", x: 4000, y: groundY - 50 },
          { type: "reward", x: 5000, y: groundY - 50 },
          { type: "reward", x: 2000, y: groundY - 50 },
          { type: "enemy", x: 2000, y: groundY - 50 },
          { type: "enemy", x: 3000, y: groundY - 50 },
          { type: "enemy", x: 4500, y: groundY - 50 },
          { type: "enemy", x: 5000, y: groundY - 50 },
          { type: "enemy", x: 6000, y: groundY - 50 },
          { type: "enemy", x: 7000, y: groundY - 50 },
          { type: "marker", x: 5000, y: groundY - 50}
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "reward", x: 2000, y: groundY - 60},
          { type: "enemy", x: 1000, y: groundY },
          { type: "marker", x: 10000, y: groundY - 50 },
        ],
      },
      {
        name: "Robot Run",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "reward", x: 2000, y: groundY - 60},
          { type: "enemy", x: 1000, y: groundY },
          { type: "marker", x: 10000, y: groundY - 50 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
