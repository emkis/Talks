<template>
  <div @click="openContextMenu">
    <slot />
  </div>
</template>

<script>
import { ContextMenuBus } from '@/eventBus'

export default {
  name: 'ContextMenuClickableArea',
  props: {
    options: {
      type: Array,
      required: true,
      validator(options) {
        const receivedProps = options.map((option) => {
          if (typeof option !== 'object') return false
          return (
            ('label' in option && 'action' in option) || 'component' in option
          )
        })

        return !receivedProps.some((prop) => prop === false)
      },
    },
  },
  methods: {
    openContextMenu(event) {
      const { pageX, pageY } = event

      ContextMenuBus.$emit('@context-menu/OPEN', {
        position: { x: pageX, y: pageY },
        options: this.options,
      })
    },
  },
}
</script>
