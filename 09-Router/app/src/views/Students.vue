<template>
    <div>
        <h1>Students</h1>
        <div v-for="student in students" :key="student.id">
            <router-link :to="{path:`/students/${student.id}`}">{{ student.name }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            students: [
                { id: 1, name: 'Amine', grade: '6' },
                { id: 2, name: 'fdgdf', grade: '6' },
                { id: 3, name: 'gfdg', grade: '6' },
            ]
        }
    }
}
</script>

<style></style>