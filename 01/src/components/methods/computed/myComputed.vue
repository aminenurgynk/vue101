<template>
    <div><h1>Computed</h1></div>
    <input v-model="numC" placeholder="Enter a num">
    <div>
        <p> Number: {{ numC }}</p>
        <p>*2: {{ mulNumC }}</p>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    setup() {
        const numC = ref(0);

        const mulNumC = computed(() => numC.value*2);

        return { numC, mulNumC}
    }
}
</script>