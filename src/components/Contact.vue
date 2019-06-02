<template>
  <page-section section-title="contact" section-slug="contact">
    {{ contact.email | email }}
    <div class="contact__profiles">
      <div v-for="profile in contact.profiles" :key="profile.name" :class="profile.slug">
        <a :href="profile.link"><img :src="getImage(profile.image)" alt="LinkedIn Profile"></a>
      </div>
    </div>
  </page-section>
</template>

<script>
import PageSection from './Section'
import getImage from '@/mixins/getImage'
import contactData from '../../data/contact.json'

export default {
  mixins: [ getImage ],
  components: {
    PageSection
  },
  data () {
    return {
      contact: contactData
    }
  },
  filters: {
    email: (email) => {
      return email.replace('.', ' (dot) ').replace('@', ' (at) ')
    }
  }
}
</script>

<style lang="scss">
.contact__profiles {
  margin: 20px 10px;
}
.linkedin {
  img {
    width: 150px;
  }
}
</style>
