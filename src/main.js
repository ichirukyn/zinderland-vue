// import axios from 'axios';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);

// axios.get("http://c92521q7.beget.tech/diceroll.get").then(res => {console.log(res)})

app.use(router)
app.use(store)
app.mount('#app')
