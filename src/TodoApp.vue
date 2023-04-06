<script>
import todoView from './View/todoView.vue';
import Home from './Home.vue'

const routes = {
  '/home': Home,
  '/todoView': todoView
}

export default {
	  components: {
      Home,
	    todoView
	  },
    //意味を理解する
    data() {
    return {
      currentPath: window.location.hash
    }
    },
    computed: {
      currentView() {
        return routes[this.currentPath.slice(1) || '/'] || NotFound
      }
    },
    mounted() {
      window.addEventListener('hashchange', () => {
		    this.currentPath = window.location.hash
		  })
    }
	}
</script>


<template>
  <a href="#/home">Home</a>
  <a href="#/todoView">TodoView</a>
  <component :is="currentView" />
</template>