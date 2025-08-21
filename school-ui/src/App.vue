<template>
  <div id="app">
    <TheHeader />
    <main class="main-content">
      <router-view /> <!-- This is where the page content (Home, About, etc.) will be injected -->
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1; /* Makes the content area grow to push footer down */
}
/* Global reset styles */
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
