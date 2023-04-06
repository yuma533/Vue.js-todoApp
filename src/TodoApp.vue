<script>
import todoView from './View/todoView.vue';

export default {
	  components: {
	    todoView
    }
	}
</script>

<template>
  <a href="#/home">Home</a>
  <a href="#/todoView">TodoView</a>
  <component :is="currentView" />
</template>