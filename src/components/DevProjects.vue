<template>
  <page-section section-title="dev projects" section-slug="dev-projects">
    <div class="dev-projects-entry" v-for="entry in devProjects" :key="entry.title">
      <dev-project :dev-project="entry"></dev-project>
    </div>
  </page-section>
</template>

<script>
import PageSection from './Section'
import DevProject from './DevProject'
import devProjectsData from '../../data/devProjects.json'

export default {
  components: {
    PageSection,
    DevProject
  },
  data () {
    return {
      devProjects: devProjectsData
    }
  }
}
</script>

<style>
.dev-projects-entry {
  text-align: left;
  margin-top: 25px;
}
</style>
