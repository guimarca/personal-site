<template>
  <page-subsection :subsection-title="this.title" :subsection-slug="this.slug" v-if="this.articles.length > 0">
    <div class="article" v-for="entry in this.articles" :key="entry.title">
      <research-article :research-article="entry"></research-article>
    </div>
  </page-subsection>

</template>

<script>
import PageSubsection from './Subsection'
import ResearchArticle from './Article'

export default {
  name: 'ArticleSubsection',
  props: [ 'title', 'slug', 'articles' ],
  components: {
    ResearchArticle,
    PageSubsection
  }
}
</script>

<style scoped>

</style>
