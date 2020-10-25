<template>
  <div class="SkeletonPost">
    <div
      :key="n"
      v-for="n in 3"
      class="SkeletonPost__block SkeletonPost__block--grid"
    >
      <div class="SkeletonPost__inner-square" />
      <div class="SkeletonPost__inner-square" />
      <div class="SkeletonPost__inner-square" />
      <div class="SkeletonPost__inner-square" />
      <div class="SkeletonPost__inner-square" />
    </div>
  </div>
</template>

<script>
export default { name: 'SkeletonPost' }
</script>

<style lang="scss" scoped>
.SkeletonPost {
  --square-height: 16px;
  --gap: 13px;

  display: grid;
  gap: var(--gap);
  margin: 0;
  padding: 0;
  list-style: none;

  &__block {
    min-height: var(--square-height);
    background: var(--c-link-water);
    border-radius: $radius-box;
  }

  &__block--grid {
    display: grid;
    gap: var(--gap);
    grid-template-rows: repeat(3, var(--square-height));
    grid-template-columns: repeat(12, 1fr);
    padding: 20px 30px;

    :nth-child(1) {
      grid-row: 1 / 2;
      grid-column: 1 / 7;
    }

    :nth-child(2) {
      grid-row: 1 / 2;
      grid-column: 11 / 13;
    }

    :nth-child(3) {
      grid-row: 2 / 3;
      grid-column: 1 / 8;
    }

    :nth-child(4) {
      grid-row: 3 / 4;
      grid-column: 1 / 3;
    }

    :nth-child(5) {
      grid-row: 3 / 4;
      grid-column: 3 / 6;
    }
  }

  &__inner-square {
    min-height: var(--square-height);
    background: var(--c-cadet-blue);
  }

  &__inner-square {
    border-radius: 50px !important;
  }
}
</style>
