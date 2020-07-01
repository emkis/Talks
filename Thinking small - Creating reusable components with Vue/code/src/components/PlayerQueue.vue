<template>
  <Container>
    <div class="player-queue">
      <PlayerMusic
        :key="index"
        v-for="(music, index) in musics"
        :name="music.name"
        :artist="music.artist"
        :queuePosition="index + 1"
      />
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import PlayerMusic from '@/components/PlayerMusic'

export default {
  name: 'PlayerQueue',
  components: { Container, PlayerMusic },
  props: {
    musics: {
      type: Array,
      required: true,
    },
  },
}
</script>
