// import './reactApp.jsx';
// import { createApp } from 'vue';
// import VueApp from './VueApp.vue';
import my from './my.js';
import common from './common.js';
import '../scss/dish.scss';
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


  const props = [
    {"title":"ハンバーグ","img":require(`../images/FnObUQeaMAE91TI.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ステーキ","img":require(`../images/EZ0wZuCUcAE409k.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ウォックパンビビンバ","img":require(`../images/FtGxPCVaAAE41v9.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ハヤシライス","img":require(`../images/EZBGw0SUMAEtvhz.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ソーセージエッグマフィン","img":require(`../images/Et8qmxQVoAAeEvQ.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ソーセージエッグ丼","img":require(`../images/FDH4V53aUAAXSUG.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"からあげ","img":require(`../images/FoCALHtaYAEWcmK.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"油淋鶏","img":require(`../images/EUMGY6HUcAIe444.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"すき焼き","img":require(`../images/FlWXa2tagAEI4sW.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"タコライス","img":require(`../images/FhhSSFlVsAELDR-.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"キムチ納豆ご飯","img":require(`../images/FEhzv43aIAEt-53.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"手巻き寿司","img":require(`../images/FIAp6RjacAEoxJN.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ねぎトロ丼","img":require(`../images/EUMGY6JUcAAqJsq.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"焼きとうもろこし","img":require(`../images/FYh1NfgaUAA60cL.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"無水キーマカレー","img":require(`../images/EZBGwz-U4AAFEVX.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"バターチキンカレー","img":require(`../images/FsD4y28aQAA1lKv.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"カレーうどん","img":require(`../images/EPxBTzAUUAIVSap.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"スープカレー","img":require(`../images/EZBGwz-UMAEGNRl.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ペペロンチーノ","img":require(`../images/E3Cz-bYUYAM6cYP.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ボロネーゼ","img":require(`../images/Ecm7XqmUwAAgBmu.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ネギ塩やきそば","img":require(`../images/EUMB76kU0AARdYv.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"じゃがバタやきそば","img":require(`../images/EUMB76NUUAMT38G.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"タイ風やきそば","img":require(`../images/EUMB7-dUcAAHKFZ.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"バウンドご飯","img":require(`../images/E7NvZNqVIAME3eh.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"炒飯","img":require(`../images/EhyXdG-VoAEvPwY.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"チキンソテー","img":require(`../images/E1pQWsdUcAQMAMC.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ぶっかけうどん","img":require(`../images/E1mt6StUUAEp6BA.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"しらすご飯","img":require(`../images/E5BSq0GVUAMS3Ag.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"パエリア","img":require(`../images/Eib3VpHU0AYa5iK.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"カレードリア","img":require(`../images/EXkW0QvU0AEPOkw.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ミートドリア","img":require(`../images/Eib3VpIU0AQ2pSl.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"お好み焼き","img":require(`../images/ElP_Tb_UcAAL3yh.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"キムチ鍋","img":require(`../images/Es-I0kkVEAEAQWv.jpg`),"subtitle":"","alt":"","content":""},
    {"title":"ペッパーライス","img":require(`../images/ERWOqEMU4AIsxOC.jpg`),"subtitle":"","alt":"","content":""},
  ];
  const card = (props) => {
    return `${props.map(v=>{
      console.log(v);
      return `
        <div class="column is-one-fifth">
      <div class="card">
      <header class="card-header">
            <p class="card-header-title">
              <span>${v.title}</span>
            </p>
          </header>

        <div class="card-image">
          <figure class="image is-4by3">
            <a class="items" href="${v.img}">
              <img src="${v.img}"  alt="${v.alt}">
            </a>
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">

              <p class="subtitle is-6">${v.subtitle}</p>
            </div>
          </div>

          <div class="content">${v.content}<a>@bulmaio</a>.
            <a>#css</a> <a>#responsive</a>
            <br>
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    </div>`
      }).join('')}`

  }

  document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('dishes').innerHTML = card(props);

    lightGallery(document.getElementById('lightgallery'), {
      plugins: [lgZoom, lgThumbnail,lgVideo],
      licenseKey: 'your_license_key',
      speed: 500,
      selector: '.items',
      showThumbByDefault: false, // サムネイルを非表示
    });





  });








