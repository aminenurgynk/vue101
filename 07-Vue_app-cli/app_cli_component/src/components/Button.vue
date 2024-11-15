<template>
    <div @click.alt="clean">
        <h3>Clean</h3>
    </div>
</template>


<script>
export default {
    data() {

    },
    methods: {
    clean() {
        this.$emit('clean')
    }
}
}

</script>

<style scoped>

</style>