API_KEY = "5d790abdf67a75c043ec302d60ddb443";

$(function () {
  $('#btn').on('click', function () {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=" + $('#cityname').val() + "5d790abdf67a75c043ec302d60ddb443" + API_KEY,
      dataType: 'jsonp',
      // $ajax()は、ajaxを実装するメソッドです。
      // $('cityname').val()で #citynameの値を受け取り、URLを統合させている。
      // .val()はHTMLの属性を取得するメソッド
      // dataTypeでは、レスポンスとして取得したいデータの型を指定
      // 今回はJSONを受け取りたいので、dataType :'jsonp'となる

      // .done()は通信に成功したときに作動
      // .fail()は失敗した時に作動
      // どちらのメソッドでも(data)を指定していますが、その引数内に取得した結果が入ります。(dataは任意の変数名)

      // 通信成功
      // $('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換されます
      // 基本は"オブジェクト名.プロパティ名"で取得している
    }).done(function (data) {
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt", data.weather[0].main);
      // $(要素名).attr(属性名,値);と記述すると、上記ではimg要素にsrc属性とalt属性が追加される
    }).fail(function (data) {
      // 通信失敗
      alert('通信に失敗しました。');
    });
  });
});
// .doneが上手く作動していない