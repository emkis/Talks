<template>
  <div class="Profile">
    <img
      class="Profile__avatar"
      src="https://avatars3.githubusercontent.com/u/35054425?s=460&u=d7f04f5eb9eca214532073fa1fe575563bdfd72d&v=4"
      alt="Profile"
    />

    <h1 class="Profile__name">Nicolas Jardim</h1>
    <span class="Profile__alias">@emkis</span>

    <div class="Profile__actions">
      <BaseButton v-on="friendButtonListener" :class="{ isFriendAdded }">
        <span v-if="isFriendAdded">✅️ Added</span>
        <span v-else>👋️ Add friend</span>
      </BaseButton>

      <ButtonCircle
        v-if="isFriendAdded"
        title="Block friend"
        @click="handleBlockFriend"
      >
        👹️
      </ButtonCircle>
    </div>
  </div>
</template>

<script>
import { openModal } from '@/components/Modal/busEvents'
import { typesEnum } from '@/components/FriendActions/properties/types'

import BaseButton from '@/components/BaseButton'
import ButtonCircle from '@/components/ButtonCircle'
import FriendActions from '@/components/FriendActions'

export default {
  name: 'Profile',
  components: { BaseButton, ButtonCircle },
  data() {
    return {
      isFriendAdded: false,
    }
  },
  computed: {
    friendButtonListener() {
      const defaultListeners = { click: this.handleAddFriend }
      const unfriendListeners = { click: this.handleUnfriend }

      return this.isFriendAdded ? unfriendListeners : defaultListeners
    },
  },
  methods: {
    handleAddFriend() {
      openModal({
        component: FriendActions,
        props: {
          type: typesEnum.ADD_FRIEND,
          handler: () => (this.isFriendAdded = true),
        },
      })
    },
    handleBlockFriend() {
      openModal({
        component: FriendActions,
        props: { type: typesEnum.BLOCK_FRIEND },
      })
    },
    handleUnfriend() {
      openModal({
        component: FriendActions,
        props: {
          type: typesEnum.UNFRIEND,
          handler: () => (this.isFriendAdded = false),
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.Profile {
  padding: rem(43px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--c-tuna);
  background: white;
  border-radius: $radius-box;

  &__avatar {
    $avatar-size: rem(163px);

    width: $avatar-size;
    height: $avatar-size;
    margin-bottom: rem(13px);
    object-fit: cover;
    border-radius: 50%;
  }

  &__name {
    font-size: rem(23px);
    line-height: 1.6;
    font-weight: 700;
  }

  &__alias {
    display: block;
    color: var(--c-bali-hai);
  }

  &__actions {
    margin-top: rem(33px);
    display: flex;

    * + * {
      margin-left: rem(10px);
    }

    .isFriendAdded {
      color: var(--c-tuna);
      background: var(--c-link-water);
    }
  }
}
</style>
