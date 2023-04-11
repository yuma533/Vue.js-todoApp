<script>
import todoView from './View/todoView.vue';

export default {
	  components: {
      todoView
	  }
	}
</script>


<template>
  <div>
    <nav>
      <router-link to="/todoView">todoView</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>