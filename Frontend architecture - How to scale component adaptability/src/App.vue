<template>
  <div id="app">
    <ProfileContainer />
    <ModalContainer />
  </div>
</template>

<script>
import ProfileContainer from '@/components/Profile/ProfileContainer'
import ModalContainer from '@/components/Modal/ModalContainer'

export default {
  name: 'App',
  components: { ProfileContainer, ModalContainer },
}
</script>
