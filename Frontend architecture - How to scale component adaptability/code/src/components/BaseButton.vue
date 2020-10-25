<template>
  <button
    class="BaseButton"
    :class="{ 'BaseButton--outlined': isOutlined }"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
const themesEnum = Object.freeze({
  DEFAULT: 'default',
  OUTLINED: 'outlined',
})

function isThemeValid(themeName) {
  return Object.values(themesEnum).includes(themeName)
}

export default {
  name: 'BaseButton',
  props: {
    theme: {
      type: String,
      default: themesEnum.DEFAULT,
      validator: isThemeValid,
    },
  },
  computed: {
    isOutlined() {
      return this.theme === themesEnum.OUTLINED
    },
  },
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

  &--outlined {
    border: 2px solid var(--c-cadet-blue);
    color: var(--c-tuna);
    background: var(--c-white-lilac);
  }
}
</style>
