<template>
<div>
    <p>
        name: {{ name }}
    </p>
    <button @click="updateName">Update</button>
</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    setup () {
        const name = ref('Amine');

        watch(name, (newName, oldName) => {
            console.log('updated: ${oldName} -> ${newName}');
            
        });

        const updateName = () => {
            name.value = 'Amine';
        };

        return { name, updateName}
    }
}
</script>