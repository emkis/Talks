<template>
  <div class="FriendActions">
    <component :is="ActionComponent" v-bind="componentProps" />
  </div>
</template>

<script>
import defaultProps from './properties/defaultProperties'
import { makeAction } from './FriendActionFactory'

export default {
  name: 'FriendActions',
  props: { ...defaultProps },
  computed: {
    ActionComponent() {
      return makeAction(this.type)
    },
    componentProps() {
      return { type: this.type, handler: this.handler }
    },
  },
}
</script>

<style lang="scss" scoped>
.FriendActions {
  min-width: 400px;
  background: #fff;
}
</style>
