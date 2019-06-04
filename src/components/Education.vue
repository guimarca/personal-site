<template>
    <page-section section-title="education" section-slug="education">
      <div class="education">
        <div class="education-entry" v-for="entry in education" :key="entry.title">
          <div class="education-entry__year">
            {{ entry.year }}
          </div>
          <div class="education-entry__content">
            <a :href="entry.titulation.link">{{ entry.titulation.name }}</a>
            at <a :href="entry.university.link">{{ entry.university.name }}</a>
          </div>
        </div>
      </div>
    </page-section>
</template>

<script>
import PageSection from './Section'
import educationData from '../../data/education.json'

export default {
  components: {
    PageSection
  },
  data () {
    return {
      education: educationData
    }
  }
}
</script>

<style>
.education-entry {
  display: flex;
  margin: 20px 0;
}
.education-entry__year {
  width: 85px;
  padding-right: 20px;
  font-weight: bold;
  text-align: right;
}
.education-entry__content {
  width: 100%;
  text-align: justify;
}
</style>
