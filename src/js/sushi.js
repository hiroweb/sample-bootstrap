// import './reactApp.jsx';
// import { createApp } from 'vue';
// import VueApp from './VueApp.vue';
import my from './my.js';
import common from './common.js';
import FontFaceObserver from 'fontfaceobserver';
import '../scss/sushi.scss';

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




  document.addEventListener('DOMContentLoaded', function() {

    const param = common();
    console.log(param);
    document.getElementById(`author`).innerHTML=`${param.auther}`;
      bulmaCarousel.attach('#slider', {
      slidesToScroll: 1,
      slidesToShow: 3,
      infinite: true,
    });
    let burger = document.querySelector('.burger');
    let navbar = document.querySelector('.navbar-menu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      navbar.classList.toggle('is-active');
    });


    lightGallery(document.getElementById('lightgallery'), {
      plugins: [lgZoom, lgThumbnail,lgVideo],
      licenseKey: 'your_license_key',
      speed: 500,
      selector: '.items',
      showThumbByDefault: false, // サムネイルを非表示
      });



  });






