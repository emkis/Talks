<template functional>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<style lang="scss" scoped>
.container {
  padding: rem(30px);
  margin: rem(15px);

  background: white;
  border-radius: var(--border-radius);
}
</style>
