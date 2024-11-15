<template>
    <form @submit.prevent="sendData">
        <input type="text" v-model="text" />
        <p>{{ text }}</p>
        <hr>
        <select v-model="framework">
            <option value="1">Vue</option> <!-- If you use value, line 10 gonna show value -->
            <option>React</option>
            <option>Svelte</option>
        </select>
        <p>{{ framework }}</p>
        <hr>
        <input type="checkbox" id="checkbox1" v-model="checked">
        <label for="checkbox1">Confirm</label>
        <p>Result: {{ checked ? 'Confirmed' : 'Doesnt Confirmed' }}</p>
        <br>
        <hr>

        <div>
            <input type="checkbox" id="Vue" value="Vue" v-model="frameworks">
            <label for="Vue">Vue</label>
        </div>
        <div>
            <input type="checkbox" id="React" value="React" v-model="frameworks">
            <label for="React">React</label>
        </div>
        <div>
            <input type="checkbox" id="Svelte" value="Svelte" v-model="frameworks">
            <label for="Svelte">Svelte</label>
        </div>
        <p>Frameworks: {{ frameworks }}</p>
        <hr>
        <h3>Students</h3>
        <input type="text" v-model="student" @keypress="addStudent">
        <div v-for="student in students" :key="student">
            <span @click="deleteStudent(student)">
                {{ student }}
            </span>
        </div>
        <hr>
        <button >Send</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            text: 'test',
            framework: '',
            checked: false,
            frameworks: [],
            student: '',
            students: [],
        }
    },
    methods: {
        addStudent(e) {
            if (e.key == ' ' && this.student) {
                if (!this.students.includes(this.student)) {
                    this.students.push(this.student)
                }
                this.student = ''
            }
        },
        deleteStudent(student) {
            this.students = this.students.filter(item => student !== item)
        },
        sendData() {
        console.log("success");
        
    }
    },


}
</script>

<style></style>