<template>
  <button class="button-options" v-on="$listeners">
    <IconOptions size="30" :color="color" />
  </button>
</template>

<script>
import { IconOptions } from '@/components/icons'

export default {
  components: { IconOptions },
  props: {
    color: {
      type: String,
      default: '#1B1B1B',
    },
  },
}
</script>

<style lang="scss" scoped>
.button-options {
  all: unset;
  position: absolute;
  top: rem(20px);
  right: rem(20px);
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  z-index: $layer-page;

  // circle
  &::before {
    position: absolute;
    content: '';
    width: rem(40px);
    height: rem(40px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 100ms ease;
    z-index: $layer-negative;

    border-radius: 50%;
    background: var(--color-primary-faded);
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
}
</style>
