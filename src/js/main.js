// import './reactApp.jsx';
// import { createApp } from 'vue';
// import VueApp from './VueApp.vue';
import common from './common.js';
import '../scss/main.scss';


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
const param = common();

