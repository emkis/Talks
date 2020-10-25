<template>
  <div>
    <BaseButton theme="outlined" @click="handlers.handleCloseButtonClick">
      Cancel
    </BaseButton>

    <BaseButton
      @click="handlers.handleActionButtonClick"
      :class="{ hasError }"
      :disabled="isLoading"
    >
      <span v-if="isLoading">Blocking...</span>
      <span v-else-if="hasError">☠️ Try again</span>
      <span v-else>I'm sure, block now</span>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import defaultFooterProps from '../defaultProperties'

export default {
  name: 'FooterBlockFriend',
  components: { BaseButton },
  props: { ...defaultFooterProps },
}
</script>

<style lang="scss" scoped>
.BaseButton:not([class$='outlined']) {
  background: var(--c-tan-hide);
}
</style>
