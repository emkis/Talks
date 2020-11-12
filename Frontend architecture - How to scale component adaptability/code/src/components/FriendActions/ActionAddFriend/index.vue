<template>
  <div>
    <HeaderContainer :type="type" />
    <FriendSuggestions />
    <BodyContainer :type="type" />
    <FooterContainer :type="type" :handler="handler" />
  </div>
</template>

<script>
import defaultProps from '../properties/defaultProperties'

import HeaderContainer from '../Headers/HeaderContainer'
import FriendSuggestions from './FriendSuggestions'
import BodyContainer from '../Bodys/BodyContainer'
import FooterContainer from '../Footers/FooterContainer'

export default {
  name: 'ActionAddFriend',
  props: { ...defaultProps },
  components: {
    HeaderContainer,
    BodyContainer,
    FriendSuggestions,
    FooterContainer,
  },
}
</script>
