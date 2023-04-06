<script>
    let id =0

    export default{
        data(){
            return{
                newTitle:'',
                newDate: '',
                newDetail: '',
                todos:[]
            }
        },
        methods: {
            addTodo() {
                this.todos.push({id:id++, title: this.newTitle, date: this.newDate, detail: this.newDetail})
                this.newTitle = ''
                this.newDate =''
                this.newDetail =''
            },
            removeTodo(todo) {
                this.todos = this.todos.filter((t) => t!==todo)
            }
        },
    }

</script>

<template>
    <form @submit.prevent="addTodo">
        <input v-model="newTitle" placeholder="Title">
        <input v-model="newDate" placeholder="Date">
        <input v-model="newDetail" placeholder="Detail">
        <button>Add Todo</button>
    </form>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.title }}
            {{ todo.date }}
            {{ todo.detail }}
            <button @click="removeTodo(todo)">削除</button>
        </li>
    </ul>
</template>