const app = Vue.createApp({
  template:`
  <div v-if="showInfo">1</div>
  <div v-show="!showInfo">2</div>
  <button @click="toggle">
    <span v-if="!showInfo">Show</span>
    <span v-else>Hidden</span>
  </button>
  `,
  data() {
    return {
      showInfo:true
    }
  },
  methods: {
    toggle(){
      this.showInfo=!this.showInfo;
    }
  },
});
  
app.mount('#app')