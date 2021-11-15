<template>
    <main>
      <Navbar/>
          <router-link to="/" class="navbar-brand">runo</router-link>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" 
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/about">about</router-link>
              </li>
            </ul>
          </div>
      <router-view />
    </main>
</template>

<script>

import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  components: {
    Navbar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
