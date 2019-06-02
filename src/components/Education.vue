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
.education {
  margin: 0 auto;
  width: 90%;
}
.education-entry {
  display: flex;
  margin: 20px 5px;;
}
.education-entry__year {
  font-weight: bold;
}
.education-entry__content {
  padding-left: 15px;
  text-align: justify;
}
</style>
