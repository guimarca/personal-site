<template>
  <div id="app">
    <img class="home-img" src="./assets/guillem-500.jpg">
    <!--<router-view/>-->
    <description></description>
    <positions></positions>
    <education></education>
    <dev-projects></dev-projects>
    <research></research>
    <teaching></teaching>
    <contact></contact>
  </div>
</template>

<script>
import Description from '@/components/Description'
import Positions from '@/components/Positions'
import Education from '@/components/Education'
import DevProjects from '@/components/DevProjects'
import Research from '@/components/Research'
import Teaching from '@/components/Teaching'
import Contact from '@/components/Contact'

export default {
  name: 'App',
  components: {
    Description,
    Education,
    DevProjects,
    Positions,
    Research,
    Teaching,
    Contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 5%;
  margin-right: 5%;
}

.home-img {
  height: 250px;
  border-radius: 150px;
  -webkit-border-radius: 150px;
  -moz-border-radius: 150px;
}

.tech-icon {
  font-size: 16px;
}

a {
  color: red;
  text-decoration: none;
}

a:hover {
  color: orangered;
}
</style>
