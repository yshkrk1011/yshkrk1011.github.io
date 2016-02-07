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

  loadQueue.addEventListener('progress',function(evt){
    console.log(evt.progress);
  });

  function showVage(){
    var tomato = new createjs.Bitmap(manifest[0].src);
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
