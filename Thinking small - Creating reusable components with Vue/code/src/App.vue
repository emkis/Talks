<template>
  <div id="app">
    <router-view />
    <ContextMenuRoot />
  </div>
</template>

<script>
import ContextMenuRoot from '@/components/ContextMenuRoot'

export default {
  components: { ContextMenuRoot },
}
</script>
