<template>
    <page-section section-title="teaching" section-slug="teaching">
      <div class="teaching">
        <div class="teaching-entry" v-for="entry in teaching" :key="entry.title">
          <div class="teaching-entry__year">
            {{ entry.period.start }} - {{ entry.period.end }}
          </div>
          <div class="teaching-entry__content">
            <a :href="entry.course.link">{{ entry.course.name }}</a>,
            <a :href="entry.degree.link">{{ entry.degree.name }}</a>,
            <a :href="entry.university.link">{{ entry.university.name }}</a>
          </div>
        </div>
      </div>
    </page-section>
</template>

<script>
import PageSection from './Section'
import teachingData from '../../data/teaching.json'

export default {
  components: {
    PageSection
  },
  data () {
    return {
      teaching: teachingData
    }
  }
}
</script>

<style>
.teaching {
  margin: 0 auto;
  width: 90%;
}
.teaching-entry {
  display: flex;
  margin: 20px 5px;
}
.teaching-entry__year {
  width: 140px;
  padding-right: 5px;
  font-weight: bold;
}
.teaching-entry__content {
  padding-left: 15px;
  text-align: justify;
}
</style>
