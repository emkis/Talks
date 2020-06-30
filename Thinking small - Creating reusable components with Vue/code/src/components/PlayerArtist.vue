<template>
  <Container>
    <div class="player-artist">
      <ButtonOptions />

      <img
        class="banner"
        src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Artist Banner"
      />

      <h1 class="name">Dr. Lylly Isabella</h1>
      <small class="followers">6.2M Listeners</small>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import ButtonOptions from '@/components/ButtonOptions'

export default {
  name: 'PlayerArtist',
  components: { Container, ButtonOptions },
}
</script>

<style lang="scss" scoped>
.player-artist {
  position: relative;
  user-select: none;

  > .banner {
    width: 100%;
    max-height: rem(180px);

    object-fit: cover;
    border-radius: var(--border-radius);
  }

  > .name {
    margin: rem(24px 0 8px);

    font-size: rem(22px);
    line-height: 1.3;
    color: var(--color-primary);
  }

  > .followers {
    font-size: rem(15px);
    color: var(--color-gray-primary);
  }
}
</style>
