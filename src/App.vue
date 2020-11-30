<template>
  <div id="app">
    <Intro />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Intro from '@/views/intro.vue'
import About from '@/views/about.vue'
import Projects from '@/views/projects.vue'
import Contact from '@/views/contact.vue'
export default {
  name: 'App',
  components:{
    Intro,
    About,
    Projects,
    Contact
  }
}
</script>

<style>
#app {
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#222;
}
html{
  scroll-behavior: smooth;
}
</style>
