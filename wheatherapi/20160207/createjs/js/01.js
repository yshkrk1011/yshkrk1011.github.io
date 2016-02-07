$(function(){

  //stageの設定
  var stage = new createjs.Stage('canvasEl');

  //円
  var ball = new createjs.Shape();
  ball.graphics.beginFill('#0000FF').drawCircle(0,0,40);
  ball.x = 200;
  ball.y = 200;
  stage.addChild(ball);

  //ステージの更新
  stage.update();


});
