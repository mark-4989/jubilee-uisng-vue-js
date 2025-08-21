<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <h1>{{ schoolName }}</h1>
      </div>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      schoolName: 'Riruta Jubilee Academy'
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #1a4f8b;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo h1 {
  margin: 0;
  font-size: 1.8rem;
}
.nav a {
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 500;
}
.nav a.router-link-active {
  border-bottom: 2px solid #ffd700; /* Gold highlight for active page */
}
</style>