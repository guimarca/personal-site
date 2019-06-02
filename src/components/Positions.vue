<template>
  <page-section section-title="positions" section-slug="positions" v-if="positions.length > 0">
    <div class="positions-entry" v-for="entry in positions" :key="entry.title">
      <div class="positions-entry__dates">
        <p>{{ entry.date.from }} - {{ entry.date.to }}</p>
      </div>
      <div class="positions-entry__content">
        <div class="positions-entry__title">
          <vue-markdown>{{ entry.title }}</vue-markdown>
        </div>
        <div class="positions-entry__description">
          <vue-markdown>{{ devIcons(entry.description) }}</vue-markdown>
        </div>
      </div>
    </div>
  </page-section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import PageSection from './Section'
import positionsData from '../../data/positions.json'
import devIcons from '@/mixins/devIcons'

export default {
  mixins: [ devIcons ],
  components: {
    PageSection,
    VueMarkdown
  },
  data () {
    return {
      positions: positionsData
    }
  }
}
</script>

<style>
.positions-entry {
  text-align: left;
  display: flex;
}
.positions-entry__dates {
  width: 170px;
  padding-right: 10px;
  font-weight: bold;
}
.positions-entry__content {
  width: 100%;
  text-align: justify;
}
.positions-entry__title p {
  margin-bottom: 8px;
}
.positions-entry__description {
  margin: 3px 0;
  font-size: 14px;
}
.positions-entry__description p {
  margin-top: 0;
}
</style>
