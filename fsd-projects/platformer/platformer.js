$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms

     createPlatform(120,250,220,15, "Maroon");// bright Maroon for a finished platform
    createPlatform(400,350,200,15, "Maroon");// bright Maroon for a finished platform
    createPlatform(750,450,200,15, "Maroon");// bright Maroon for a finished platform
    createPlatform(550,190,200,15, "Marron");// bright Maroon for a finished platform
    createPlatform(950,250,200,15,"Maroon");// bright Maroon for a finished platform
    createPlatform(200,650,200,15, "Maroon");// bright Maroon for a finished platform
    createPlatform(1100,600,200,15,"Maroon");// bright Maroon for a finished platform
    createPlatform(500,550,200,15, "Maroon");// bright Maroon for a finished platform



    // TODO 3 - Create Collectables

    createCollectable("database", 1050,220);
    createCollectable("grace", 670,150);
    createCollectable("max", 850, 420);
    createCollectable("steve", 1200, 570);
    createCollectable("kennedi", 250,210);
    createCollectable("diamond", 600, 500);
    createCollectable("database", 510, 310);
    createCollectable("database", 300, 610);

    
    // TODO 4 - Create Cannons

    createCannon("top", 750, 1500)
    createCannon("right", 550, 1500)
    createCannon("left", 250, 1500)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
