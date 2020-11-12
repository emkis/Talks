<template>
  <div>
    <HeaderContainer :type="type" />
    <CrazyAnimation />
    <BodyContainer :type="type" />
    <FooterContainer :type="type" :handler="handler" />
  </div>
</template>

<script>
import defaultProps from '../properties/defaultProperties'

import HeaderContainer from '../Headers/HeaderContainer'
import BodyContainer from '../Bodys/BodyContainer'
import FooterContainer from '../Footers/FooterContainer'
import CrazyAnimation from '@/components/CrazyAnimation'

export default {
  name: 'ActionBlock',
  props: { ...defaultProps },
  components: {
    BodyContainer,
    HeaderContainer,
    FooterContainer,
    CrazyAnimation,
  },
}
</script>
