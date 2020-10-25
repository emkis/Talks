<template>
  <Modal v-if="component" :isClosable="isClosable" @close="onClose">
    <component :is="component" v-bind="componentProps" />
  </Modal>
</template>

<script>
import { OPEN, CLOSE } from './busEvents'
import { EventBus } from '@/eventBus'

import Modal from '@/components/Modal'

export default {
  name: 'ModalContainer',
  components: { Modal },
  data() {
    return {
      component: null,
      componentProps: null,
      isClosable: true,
    }
  },
  mounted() {
    this.subscribeToEvents()
  },
  methods: {
    subscribeToEvents() {
      EventBus.$on(OPEN, this.onOpen)
      EventBus.$on(CLOSE, this.onClose)
    },
    onOpen({ component, props, isClosable = true }) {
      this.component = component
      this.componentProps = props
      this.isClosable = isClosable
    },
    onClose() {
      this.resetState()
    },
    resetState() {
      this.component = null
      this.componentProps = null
      this.isClosable = true
    },
  },
}
</script>
