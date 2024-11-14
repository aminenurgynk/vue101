<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div><h1>Ref</h1></div>
    <div>
      <p>number: {{ num }}</p>
      <button @click="plusNum">Increasing Num</button>
    </div>
  </template>
  

  <script> 
  import { ref } from 'vue';

export default {
  setup() {
    const num = ref(0); 

    const plusNum = () => {
      num.value++; 
    };
console.log(num);

    return { num, plusNum };
  }
};

</script>