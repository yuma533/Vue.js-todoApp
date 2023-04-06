<script>
    import TitleComponent from '../components/TitleComponent.vue'

    export default{
        components: {
            TitleComponent
        },
        data() {
            return{
                title: 'TodoList'
            }
        }
    }
</script>

<template>
    <TitleComponent>title: {{ title }}</TitleComponent>
</template>