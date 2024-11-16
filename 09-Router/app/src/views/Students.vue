<template>
    <div>
      <h1>Students</h1>
      <div v-for="student in students" :key="student.id">
        <router-link :to="{name:'studentInfo',params:{id:student.id}}">{{student.name}}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        students: [
          {id:1, name:'x', grade:5},
          {id:2, name:'y', grade:5},
          {id:3, name:'z', grade:5},
        ]
      }
    },
  }
  </script>
  
  <style>
  
  </style>