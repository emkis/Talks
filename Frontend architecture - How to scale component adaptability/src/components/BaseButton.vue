<template>
  <button class="BaseButton" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
}
</script>

<style lang="scss" scoped>
.BaseButton {
  border: 0;
  height: rem(40px);
  padding: rem(0 30px);

  font-family: $font-title;
  font-weight: 700;

  color: var(--c-white-lilac);
  border-radius: $radius-button;
  background: var(--c-royal-blue);

  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
}
</style>
