<template>
  <Container>
    <div class="player-artist">
      <ContextMenuClickableArea :options="contextOptions">
        <ButtonOptions color="#fff" />
      </ContextMenuClickableArea>

      <img
        class="banner"
        src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Artist Banner"
      />

      <div class="details">
        <div class="info">
          <h1 class="name">{{ name }}</h1>
          <small class="followers">{{ followers }} Listeners</small>
        </div>

        <ButtonFollow />
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import ButtonOptions from '@/components/ButtonOptions'
import ButtonFollow from '@/components/ButtonFollow'
import ContextMenuClickableArea from '@/components/ContextMenuClickableArea'

export default {
  name: 'PlayerArtist',
  components: {
    Container,
    ButtonOptions,
    ButtonFollow,
    ContextMenuClickableArea,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    followers: {
      type: String,
      required: true,
    },
  },

  created() {
    this.contextOptions = [
      { label: 'Follow Artist', action: () => ({}) },
      { label: 'Share', action: () => ({}) },
    ]
  },
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

  > .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: rem(18px 0 8px);

    .name {
      font-size: rem(22px);
      line-height: 1.3;
      color: var(--color-primary);
    }

    .followers {
      font-size: rem(15px);
      color: var(--color-gray-primary);
    }
  }
}
</style>
