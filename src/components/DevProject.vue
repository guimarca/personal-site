<template>
  <div class="dev-project">
    <span class="dev-project__title">{{ this.devProject.title }}:</span>
    <span class="dev-project__description" v-if="this.devProject.description">{{ this.devProject.description }}</span>
    <span class="dev-project__items" v-html="items" v-if="this.devProject.items"></span>
  </div>
</template>

<script>
import getImage from '@/mixins/getImage'

export default {
  name: 'devProject',
  props: [ 'devProject' ],
  mixins: [ getImage ],
  computed: {
    items () {
      let finalItems = []

      this.devProject.items.forEach(item => {
        if (item.img) {
          item.link = this.getImage(item.img)
        }
        finalItems.push(`<a href="${item.link}">${item.title}</a>`)
      })
      return finalItems.join(', ') + '.'
    }
  }
}
</script>

<style>
.dev-project__title {
  font-weight: bold;
  margin-right: 5px;
}
.dev-project__description {
  margin-right: 5px;
}
</style>
