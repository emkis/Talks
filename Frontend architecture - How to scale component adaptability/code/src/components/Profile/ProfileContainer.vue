<template>
  <div class="ProfileContainer">
    <Profile />
    <SkeletonPosts />
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import SkeletonPosts from '@/components/Profile/SkeletonPosts'

export default {
  name: 'ProfileContainer',
  components: { Profile, SkeletonPosts },
}
</script>

<style lang="scss" scoped>
.ProfileContainer {
  max-width: rem(633px);
  margin: 0 auto;

  ::v-deep > * + * {
    margin-top: rem(26px);
  }
}
</style>
