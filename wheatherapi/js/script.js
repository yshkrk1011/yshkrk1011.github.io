$(function(){
  //GPS
  navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;

    console.log(lat,lon);
    // 定数
    const apikey = '69dc26eb3cd4f3de98a0a440b5ce98f5';

    var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon=' + lon +'$appid=' + apikey;

    $.ajax({
      url:url,
      dataType:'json'
    }).done(function(data){
      console.log(data);

    }).fail(function(){
      console.log('alax error!!!');
    });

    //htmlに表示する関数
    function showWeather(data){
      console.log(data);

      //地域名
      var areaName = data.name;
      $('#areaName').text(areaName);

      var areaTemp = data.main.temp;
      areaTemp = areaaTemp - 273.15;
      &('#areaTemp').text(areaaTemp + '度');

      var areaHumidity = data.main.humidity;
      $('#areaHumidity').text(areaHumidity + '%');

    }

  });
});
