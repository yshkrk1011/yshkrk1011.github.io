$(function(){

  var navList = $('#side li a');
  var container = $("#container");


  // nav li をクリックしたら
  navList.click(function(e){
    e.preventDefault();
    var targetUrl = $(this).attr('href');

    // ajaxにURLを引き継ぐ
    changeContent(targetUrl);
    // ブラウザの履歴にtargetUrlを残す
     window.history.pushState(null, null, targetUrl);

  });

  // バックボタンで戻れるようにする
  window.addEventListener('popstate',function(){
    changeContent(location.pathname);
  });

  // ajaxで遷移する関数
  function changeContent(url){
    $.ajax({
      type: "GET",
      url: url,
      dataType: "html",
      success: function(data) {

        var content = $(data).find(".content");
        container.html(content);
      },
      err: function(){
        console.log("読み込みエラー");
      }
    });
  }
});
