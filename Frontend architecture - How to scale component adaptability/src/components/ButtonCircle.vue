<template>
  <button class="ButtonCircle" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonCircle',
}
</script>

<style lang="scss" scoped>
.ButtonCircle {
  $button-size: rem(40px);

  width: $button-size;
  height: $button-size;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 50%;
  padding: rem(10px);
  font-size: rem(20px);
  color: var(--c-tuna);
  background: var(--c-link-water);
  transition: transform ease 200ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
