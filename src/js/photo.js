// import './reactApp.jsx';
// import { createApp } from 'vue';
// import VueApp from './VueApp.vue';

import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // Bootstrap 5のJavaScriptをインポート

import my from './my.js';
import common from './common.js';
import '../scss/photo.scss';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import add from './add.ts';


// createApp(VueApp).mount("#vue-root");

// const app = createApp(VueApp);
// app.use(router);
// app.mount("#vue-root");

// new Vue({
//   el:"#vue-root",
//   render: (h) => h(VueApp),
// });
console.log(add(3,9));
console.log('webpack!');

document.querySelector('.btn-back-to-top').addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

  document.addEventListener('DOMContentLoaded', function() {


    lightGallery(document.getElementById('lightgallery'), {
      plugins: [lgZoom, lgThumbnail,lgVideo],
      licenseKey: 'your_license_key',
      speed: 500,
      selector: '.items',
      showThumbByDefault: false, // サムネイルを非表示
    });

    document.querySelector('.btn-back-to-top').addEventListener('click', function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });

    window.addEventListener('scroll', function() {
      var btnBackToTop = document.querySelector('.btn-back-to-top');
      if (window.pageYOffset > 100) {
        btnBackToTop.style.opacity = '1'; // 透明度を1にして表示する
      } else {
        btnBackToTop.style.opacity = '0'; // 透明度を0にして非表示にする
      }
    });




    var navbar = document.querySelector('.navbar'); // navbar要素を取得
    var navbarHeight = navbar.offsetHeight; // navbarの高さを取得
    var windowHeight = window.innerHeight; // ウィンドウの高さを取得

    // スクロールイベントのリスナーを追加
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // スクロール位置を取得
      if (scrollTop >= windowHeight) {
        // スクロール位置がnavbarの高さ以上になったら背景色をつける
        navbar.classList.add('navbar-bg');

      } else {
        // スクロール位置がnavbarの高さ未満になったら背景色を消す
        navbar.classList.remove('navbar-bg');

      }


    });

    // ウィンドウのリサイズイベントのリスナーを追加
    window.addEventListener('resize', function () {
      windowHeight = window.innerHeight; // ウィンドウの高さを再取得
    });

    //lightgallery
    lightGallery(document.getElementById('lightgallery'), {
      plugins: [lgZoom, lgThumbnail,lgVideo],
      licenseKey: 'your_license_key',
      speed: 900,
      selector: '.items',
      });



  });








