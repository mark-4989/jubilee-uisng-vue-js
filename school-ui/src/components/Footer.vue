<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} {{ schoolName }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      schoolName: 'Sunshine Elementary School'
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 2rem 0;
  text-align: center;
  margin-top: auto; /* Pushes footer to bottom if using flexbox on App.vue */
}
</style>