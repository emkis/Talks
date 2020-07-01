<template>
  <button class="button-follow">
    <IconPlus size="18" />
    Follow
  </button>
</template>

<script>
import { IconPlus } from '@/components/icons'

export default {
  name: 'ButtonFollow',
  components: { IconPlus },
}
</script>

<style lang="scss" scoped>
.button-follow {
  display: flex !important;
  align-items: center;
  padding: rem(10px 20px);
  cursor: pointer;

  border: 0;
  border-radius: rem(4px);
  background: var(--color-primary);
  color: white;
  vertical-align: middle;

  > svg {
    margin-right: rem(8px);
  }
}
</style>
