<template>
  <main class="Main">
    <component :is="BodyComponent" />
  </main>
</template>

<script>
import defaultProps from '../properties/defaultProperties'
import { makeBody } from './BodyFactory'

export default {
  name: 'BodyContainer',
  props: { ...defaultProps },
  computed: {
    BodyComponent() {
      return makeBody(this.type)
    },
  },
}
</script>

<style lang="scss" scoped>
.Main {
  padding: rem(33px);
  line-height: 1.73;

  strong {
    font-weight: bolder;
  }
}
</style>
