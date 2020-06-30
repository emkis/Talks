<template>
  <div class="player-music">
    <p class="position">{{ queuePosition }}</p>

    <div class="details">
      <strong class="name">{{ name }}</strong>
      <p class="artist">{{ artist }}</p>
    </div>

    <ButtonOptions />
  </div>
</template>

<script>
import ButtonOptions from '@/components/ButtonOptions'

export default {
  name: 'PlayerMusic',
  components: { ButtonOptions },
  props: {
    id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    queuePosition: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.player-music {
  --background: #fff;

  $transition: ease-in;
  $timing: 100ms;

  position: relative;
  display: flex;
  align-items: center;
  padding: rem(15px 20px);
  user-select: none;
  cursor: pointer;

  color: var(--color-primary);
  background: var(--background);
  border-radius: var(--border-radius);
  transition: background $timing $transition;

  &:hover {
    --background: var(--color-gray-faded);
  }

  > .position {
    margin-right: rem(24px);

    font-size: rem(18px);
    line-height: 1;
  }

  > .details {
    line-height: 1.3;

    .name {
      font-size: rem(18px);
    }

    .artist {
      font-size: rem(16px);
      color: var(--color-gray-primary);
    }
  }
}
</style>
