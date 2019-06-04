<template>
  <div class="article">
    <span class="article-title">{{ this.researchArticle.title }}</span>{{ authors }}<span class="article-journal" v-html="journal"></span>{{ volumeAndPages }}{{ year }}.
    <span v-html="link"></span>
  </div>
</template>

<script>
export default {
  name: 'researchArticle',
  props: [ 'researchArticle' ],
  computed: {
    authors () {
      if (this.researchArticle.authors.length === 0) {
        return ''
      }

      let authorsString = ', with '
      if (this.researchArticle.authors.length === 1) {
        authorsString += this.researchArticle.authors[0]
      } else {
        authorsString +=
          this.researchArticle.authors.slice(0, -1).join(', ') +
          ' and ' +
          this.researchArticle.authors.slice(-1)
      }
      return authorsString
    },
    journal () {
      if (this.researchArticle.journal) {
        return `. <i>${this.researchArticle.journal}</i>`
      }
      return ''
    },
    volumeAndPages () {
      if (this.researchArticle.volume && this.researchArticle.pages) {
        return `. ${this.researchArticle.volume}, ${this.researchArticle.pages}`
      }
      return ''
    },
    year () {
      if (this.researchArticle.year) {
        return `. (${this.researchArticle.year})`
      }
      return ''
    },
    link () {
      if (this.researchArticle.link) {
        return `<a href="${this.researchArticle.link}">Link</a>.`
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.article {
  text-align: justify;
  margin-top: 25px;

  &-title {
    quotes: '"''"';

    &:before {
      content: open-quote;
    }
    &:after {
      content: close-quote;
    }
  }

  &-journal {
    font-style: italic;
  }
}
</style>
