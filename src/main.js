import { createApp } from 'vue';
import './style.css';
import App from '../src/layouts/App.vue';
import { Button } from 'vant';
import { Tabbar, TabbarItem,Swipe,SwipeItem,Cell, CellGroup ,NavBar,Field } from 'vant';
import 'vant/lib/index.css';
import './plugins/uc-flexible';
const app = createApp(App);

app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Swipe);
app.use(SwipeItem);
app.use(Cell);
app.use(CellGroup);
app.use(NavBar);
app.use(Field);

import router from "./plugins/router";
app.use(router);
app.mount('#app');


