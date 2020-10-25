<template>
  <footer class="FooterContainer">
    <component
      :is="FooterComponent"
      :isLoading="isLoading"
      :hasError="hasError"
      :handlers="handlers"
    />
  </footer>
</template>

<script>
import { asyncDelay } from '@/utilities'
import { closeModal } from '@/components/Modal/busEvents'
import defaultProps from '../properties/defaultProperties'
import { makeFooter } from './FooterFactory'

export default {
  name: 'FooterContainer',
  props: { ...defaultProps },
  data() {
    return {
      isLoading: false,
      hasError: false,
    }
  },
  computed: {
    FooterComponent() {
      return makeFooter(this.type)
    },
    handlers() {
      return {
        handleActionButtonClick: this.initAction,
        handleCloseButtonClick: closeModal,
      }
    },
  },
  methods: {
    async initAction() {
      this.hasError = false
      this.isLoading = true

      try {
        await Promise.all([this.handler(), asyncDelay()])
        closeModal()
      } catch {
        this.hasError = true
      }

      this.isLoading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.FooterContainer > div {
  display: flex;
  justify-content: space-between;
  padding: rem(0 33px 33px);

  ::v-deep .hasError {
    background: var(--c-tan-hide);
  }
}
</style>
