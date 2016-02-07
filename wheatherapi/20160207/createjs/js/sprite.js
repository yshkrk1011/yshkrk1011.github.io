//先読みするリスト
var manifest = [
  {src:'calcium.png'},
  {src:'iron.png'},
  {src:'vitaminC.png'}
];

$(function(){
var stage = new createjs.Stage('canvasEl');
  var loadQueue = new createjs.LoadQueue();
  loadQueue.loadManifest(manifest);

  loadQueue.addEventListener('complete',function(){
    console.log('読み込み完了！！！！');
    showVage();
  });

  function showVage(){
    var vcSprite = new createjs.SpriteSheet(vitaminCSprite);
    var vitaminC = new createjs.Sprite(vcSprite,'stand');
    stage.addChild(vitaminC);
    vitaminC.x = 150;
    vitaminC.y = 150;
    vitaminC.alpha = 0;

    createjs.Tween.get(vitaminC).to({alpha:1},500).wait(1000).call(vitaminCWalk).to({x:500},4000).call(vitaminCStand);


    //ビタミンCが歩く
    function vitaminCWalk(){
      vitaminC.gotoAndPlay('walk');
    }

    //ビタミンCが止まる
    function vitaminCStand(){
      vitaminC.gotoAndPlay('stand');
    }

    //calcium
    function showVage(){
      var caSprite = new createjs.SpriteSheet(calciumSprite);
      var calcium = new createjs.Sprite(caSprite,'stand');
      stage.addChild(calcium);
      calcium.x = 300;
      calcium.y = 300;
      calcium.alpha = 0;

      createjs.Tween.get(calcium).to({alpha:1},500).wait(1000).call(calciumWalk).to({x:500},4000).call(calciumStand);


      //ビタミンCが歩く
      function calciumWalk(){
        calcium.gotoAndPlay('walk');
      }

      //ビタミンCが止まる
      function calciumStand(){
        calcium.gotoAndPlay('stand');
      }


    stage.update();
  };

  createjs.Ticker.setFPS(30);
  createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

  createjs.Ticker.addEventListener('tick',function(){

    stage.update();
  });
});
