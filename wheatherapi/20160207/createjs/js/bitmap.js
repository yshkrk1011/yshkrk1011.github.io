//先読みするリスト
var manifest = [
  {src:'img/tomato.png'},
  {src:'img/pumpkin.png'},
  {src:'img/greenPepper.png'}
];

$(function(){
var stage = new createjs.Stage('canvasEl');

  var loadQueue = new createjs.loadQueue();
  loadQueue.loadManifest(manifest); //読み込み開始

  loadQueue.addEventListener('complete',function(){
    console.log('読み込み完了！！！！');
  });

  function showVage(){
    var tomat = new createjs.Bitmap(manifest[0].src);
    tomato.x = 100;
    tomato.y = 100;
    stage.addChild(tomato);
    stage.update();
  };

  createjs.Ticker.setFPS(30);
  createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

  createjs.Ticker.addEventListener('tick',function(){

    stage.update();
  });
});
