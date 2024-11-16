<template>
    <div>
        <slot></slot>
        <hr>
        <input type="text" v-model="name">
        <input type="text" v-model="surname">
        <p>{{ nameSurname }}</p>
        <hr>
        <input type="number" v-model="number1"> <br>
        <input type="number" v-model="number2"> <br>
        <input type="number" v-model="total"> <br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            surname: '',
            number1: 0,
            number2: 0,
            total: 0,
        }
    },
    computed: {
        nameSurname() {
            return this.name + ' ' + this.surname
        }
    },
    watch: {
        number1(newValue, oldValue) {
            console.log('Numbers', oldValue, newValue);
            this.total = parseInt(this.number1) + parseInt(this.number2)
            
        },
        number2(newValue, oldValue) {
            console.log('Numbers', oldValue, newValue);
            this.total = parseInt(this.number1) + parseInt(this.number2)
            
        },
    },
}
</script>

<style></style>