// バーガーメニュー
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();

// スムーススクロール
function topButton(elmId, duration) {

  //トップに戻るボタンの要素の取得
  var topButton = document.getElementById(elmId);

  topButton.addEventListener("click", function (e) {

    //デフォルトの動作の制御
    e.preventDefault();

    var begin = new Date() - 0;
    var yOffset = window.pageYOffset;
    var timer = setInterval(function () {
      var current = new Date() - begin;
      if (current > duration) {
        clearInterval(timer);
        current = duration;
      }

      //スクロール位置を単位時間で変更する
      window.scrollTo(0, yOffset * (1 - current / duration))
    }, 10);
  }, false)

}
//トップに戻るボタンの id とアニメーションにかかる時間をミリ秒で指定
topButton("page_top", 200)