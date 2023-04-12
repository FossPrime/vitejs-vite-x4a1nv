import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

class WidgetCo {
  constructor() {
    console.log('hello')
    this.#myPrivateMethod()
  }

  #myPrivateMethod() {
    console.log('World!')
  }
}

new WidgetCo()
