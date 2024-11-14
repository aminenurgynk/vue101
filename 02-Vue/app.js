const app = Vue.createApp({
    template:`
    <h2>Title: {{title}}</h2>
    <h3>Include: {{include}}</h3>
    <p>Comment num: {{comment}}</p>
    <button v-on:click="add()">Add</button>
    <p>{{text}}</p>
    `,
    data() {
      return {
        title:'Vue ',
        include:'Vue 3 ',
        comment: 0,
        text:'Click to add comment num'
      }
    },
    methods: {
      add(){
        console.log('add method working');
        this.comment++;
        this.text=`${this.comment} .`
      }
    },
  });
    
  app.mount('#app')