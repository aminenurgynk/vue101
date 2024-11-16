<template>
    <div>
        <slot></slot>
        <hr>
        <input type="text" v-model="name">
        <input type="text" v-model="surname">
        <p>{{ nameSurname }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            surname: ''
        }
    },
    computed: {
        nameSurname() {
            return this.name + ' ' + this.surname
        }
    }
}
</script>

<style></style>