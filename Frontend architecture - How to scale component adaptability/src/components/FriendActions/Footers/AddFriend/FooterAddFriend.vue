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
      <span v-if="isLoading">Adding...</span>
      <span v-else-if="hasError">☠️ Try again</span>
      <span v-else>Add friend now</span>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import defaultFooterProps from '../defaultProperties'

export default {
  name: 'FooterAddFriend',
  components: { BaseButton },
  props: { ...defaultFooterProps },
}
</script>
