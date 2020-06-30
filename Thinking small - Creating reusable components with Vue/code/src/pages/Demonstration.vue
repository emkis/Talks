<template>
  <div id="demonstration">
    <Title>Player artist</Title>
    <PlayerArtist />

    <Title>Player queue</Title>
    <PlayerQueue />
  </div>
</template>

<script>
import Title from '@/components/Title'
import PlayerQueue from '@/components/PlayerQueue'
import PlayerArtist from '@/components/PlayerArtist'

export default {
  name: 'Demonstration',
  components: { Title, PlayerQueue, PlayerArtist },
}
</script>

<style lang="scss" scoped>
#demonstration {
  max-width: 600px;
  margin: 0 auto;
}
</style>
