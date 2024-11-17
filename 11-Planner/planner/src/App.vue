<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {

  },
}
</script>

<style>
body {
  background: #ffff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #2c3e50;
}
</style>
