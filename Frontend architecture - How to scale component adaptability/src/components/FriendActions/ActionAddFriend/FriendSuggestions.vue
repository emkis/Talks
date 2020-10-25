<template>
  <div class="FriendSuggestions">
    <h4 class="FriendSuggestions__title">Friends suggestions</h4>
    <ul class="FriendSuggestions__list">
      <li class="FriendSuggestions__list-item" :key="n" v-for="n in 4" />
    </ul>
  </div>
</template>

<script>
export default { name: 'FriendSuggestions' }
</script>

<style lang="scss" scoped>
.FriendSuggestions {
  padding: rem(33px 33px 0);

  &__title {
    margin-bottom: rem(13px);
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__list-item {
    $item-size: rem(93px);

    min-width: $item-size;
    min-height: $item-size;
    border-radius: $radius-box;
    background: var(--c-cadet-blue);
  }
}
</style>
