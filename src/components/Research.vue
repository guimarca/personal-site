<template>
  <page-section section-title="research" section-slug="research" v-if="hasResearch">
    <article-subsection title="publications" slug="publications" :articles="publications"></article-subsection>

    <article-subsection title="working papers" slug="working-papers" :articles="workingPapers"></article-subsection>

    <article-subsection title="other publications" slug="other-publications" :articles="otherPublications"></article-subsection>
  </page-section>
</template>

<script>
import PageSection from './Section'
import ArticleSubsection from './ArticleSubsection'

import publicationsData from '../../data/publications.json'
import workingPapersData from '../../data/workingPapers.json'
import otherPublicationsData from '../../data/otherPublications.json'

export default {
  components: {
    PageSection,
    ArticleSubsection
  },
  data () {
    return {
      publications: publicationsData,
      workingPapers: workingPapersData,
      otherPublications: otherPublicationsData
    }
  },
  computed: {
    hasResearch () {
      return (
        this.publications.length > 0 ||
        this.workingPapers.length > 0 ||
        this.otherPublications.length > 0
      )
    }
  }
}
</script>

<style>
</style>
