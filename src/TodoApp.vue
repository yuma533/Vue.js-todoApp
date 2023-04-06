<script>
import todoView from './View/todoView.vue';
import todoViewTitle from './View/todoViewTitle.vue';

export default {
	  components: {
	    todoView,
      todoViewTitle
	  }
	}
</script>


<template>
  <todoViewTitle />
  <todoView />
</template>