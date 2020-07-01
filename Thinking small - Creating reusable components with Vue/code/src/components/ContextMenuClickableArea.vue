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
      const { clientX, clientY } = event

      ContextMenuBus.$emit('@context-menu/OPEN', {
        position: { x: clientX, y: clientY },
        options: this.options,
      })
    },
  },
}
</script>
