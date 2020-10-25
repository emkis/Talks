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
      <span v-if="isLoading">Unfriending...</span>
      <span v-else-if="hasError">☠️ Try again</span>
      <span v-else>Unfriend now</span>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import defaultFooterProps from '../defaultProperties'

export default {
  name: 'FooterUnfriend',
  components: { BaseButton },
  props: { ...defaultFooterProps },
}
</script>
