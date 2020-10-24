<template>
  <div class="Modal" @click.self="isClosable && handleClose()">
    <div class="Modal__container">
      <ButtonCircle
        v-if="isClosable"
        class="Modal__exit-btn"
        title="Close"
        @click="handleClose"
      >
        💢️
      </ButtonCircle>

      <main class="Modal__body">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import ButtonCircle from '@/components/ButtonCircle'

export default {
  name: 'Modal',
  components: { ButtonCircle },
  props: {
    isClosable: { type: Boolean },
  },
  mounted() {
    this.subscribeToEvents()
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    handleEscKeyup(event) {
      const isEscapeKey = event.keyCode === 27

      if (isEscapeKey && this.isClosable) {
        this.handleClose()
      }
    },
    subscribeToEvents() {
      document.addEventListener('keyup', this.handleEscKeyup)
    },
    unsubscribeToEvents() {
      document.removeEventListener('keyup', this.handleEscKeyup)
    },
  },
  beforeDestroy() {
    this.unsubscribeToEvents()
  },
}
</script>

<style lang="scss" scoped>
.Modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(#0000, 0.53);
  z-index: 1;

  &__exit-btn {
    $btn-position: rem(14px);

    position: absolute;
    top: $btn-position;
    right: $btn-position;
  }

  &__container {
    position: relative;
    max-width: 500px;
    max-height: 80%;
    padding: rem(33px);
    background: #fff;
    border-radius: $radius-box;
    z-index: 31231;
  }
}
</style>
