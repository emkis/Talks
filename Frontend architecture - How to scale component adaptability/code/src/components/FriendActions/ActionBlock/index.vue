<template>
  <div>
    <HeaderContainer :type="type" />
    <BodyContainer :type="type" />
    <FooterContainer :type="type" :handler="handler" />
  </div>
</template>

<script>
import defaultProps from '../properties/defaultProperties'

import HeaderContainer from '../Headers/HeaderContainer'
import BodyContainer from '../Bodys/BodyContainer'
import FooterContainer from '../Footers/FooterContainer'

export default {
  name: 'ActionBlock',
  props: { ...defaultProps },
  components: { BodyContainer, HeaderContainer, FooterContainer },
}
</script>
