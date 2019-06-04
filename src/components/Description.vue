<template>
  <section id="description" class="section">
    <h1 class="description__title">hello</h1>
    <p class="description__text" v-for="(text, index) in description.text" :key="index">
      <vue-markdown>{{ devIcons(text) }}</vue-markdown>
    </p>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import dataDescription from '../../data/description.json'
import devIcons from '@/mixins/devIcons'

export default {
  mixins: [ devIcons ],
  components: {
    VueMarkdown
  },
  data () {
    return {
      description: dataDescription
    }
  }
}
</script>

<style scoped>
img {
  height: 250px;
}
.description__title {
 font-size: 42px;
}
.description__text {
  text-align: justify;
}
</style>
