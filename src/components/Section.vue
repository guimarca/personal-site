<template>
    <section :id="this.sectionSlug" class="section">
        <h2 class="section-title">{{ this.sectionTitle }}</h2>

        <slot></slot>
    </section>
</template>

<script>
export default {
  name: 'PageSection',
  props: [ 'sectionTitle', 'sectionSlug' ]
}
</script>

<style>
.section-title {
  margin-top: 50px;
}
</style>
