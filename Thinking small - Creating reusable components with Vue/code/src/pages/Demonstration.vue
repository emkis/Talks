<template>
  <div id="demonstration">
    <h2 class="title">Player artist</h2>
    <PlayerArtist name="Dr. Lylly Isabella" followers="6.2M" />

    <h2 class="title">Player queue</h2>
    <PlayerQueue :musics="musics" />
  </div>
</template>

<script>
import PlayerQueue from '@/components/PlayerQueue'
import PlayerArtist from '@/components/PlayerArtist'

export default {
  name: 'Demonstration',
  components: { PlayerQueue, PlayerArtist },
  created() {
    this.musics = [
      { name: 'Parasite Eve', artist: 'Bring Me the Horizon' },
      { name: `Don't Rush`, artist: 'Harrison First, AIYA' },
      { name: 'Waterfalls', artist: 'LVNDVN' },
      { name: 'You Got It', artist: 'Vory' },
    ]
  },
}
</script>

<style lang="scss" scoped>
#demonstration {
  max-width: 600px;
  margin: 0 auto;
}
</style>
