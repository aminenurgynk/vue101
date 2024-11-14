const app = Vue.createApp({
  template:`
  <ul>
    <li v-for="person in persons">Worker: {{person.name}} - Price: {{person.price}}</li>
  </ul>
  `,
  data() {
    return {
      persons: [
        {name:"Varol", price:4250},
        {name:"Seyit", price:5250},
        {name:"Elif", price:7250}
      ]
    }
  },
  methods: {
    
  },
});
  
app.mount('#app')