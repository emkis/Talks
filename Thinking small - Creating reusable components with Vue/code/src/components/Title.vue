<template>
  <h2 class="title">
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<style lang="scss" scoped>
.title {
  font-size: rem(32px);
  line-height: 1.3;
  padding: rem(48px 0 16px);

  text-align: center;
  letter-spacing: -1px;
  color: white;
}
</style>
