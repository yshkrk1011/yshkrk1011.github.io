$(function () {
  //GPS
  navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;

    console.log(lat,lon);
    // 定数
    const apikey = '4f718c8f7edd00afe53bbf5fc206a3d';

    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +'&lon=' + lon +'$appid=' + apikey;

    $.ajax({
      url:url,
      dataType:'json'
    }).done(function(data){
      console.log(data);

    }).fail(function(){
      console.log('alax error!!!');
    });

  });
});
