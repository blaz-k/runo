<template>
  <main class="container-fluid">
    <Navbar />
    <router-view />

    <Footer />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapGetters(["getCount"]),
  },
  methods: {
    ...mapActions(["fetchCount"]),
  },
  created() {
    this.fetchCount();
  },
};
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
