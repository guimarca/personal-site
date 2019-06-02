<template>
    <section :id="this.subsectionSlug" class="subsection">
        <h3 class="subsection-title">{{ this.subsectionTitle }}</h3>

        <slot></slot>
    </section>
</template>

<script>
export default {
  name: 'PageSubsection',
  props: [ 'subsectionTitle', 'subsectionSlug' ]
}
</script>

<style>
.subsection-title {
  margin-top: 35px;
}
</style>
