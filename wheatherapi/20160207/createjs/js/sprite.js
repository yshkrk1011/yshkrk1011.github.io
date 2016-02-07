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
    var vitaminC = new createjs,Spritea(vcSprite,'stand');
    stage.addChild(vitaminC);
    vitaminC.x = 150;
    vitaminC.y = 150;
    vitaminC.alpha = 0;

    createjs.Tween.get(vitaminC).to({alpha:1},500).wait(1000).to({x:500},4000);
    stage.update();
  };

  createjs.Ticker.setFPS(30);
  createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

  createjs.Ticker.addEventListener('tick',function(){

    stage.update();
  });
});
