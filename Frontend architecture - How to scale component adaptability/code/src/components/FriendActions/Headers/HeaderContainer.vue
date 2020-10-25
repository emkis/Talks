<script>
import defaultProps from '../properties/defaultProperties'
import { makeHeader } from './HeaderFactory'

export default {
  name: 'HeaderContainer',
  props: { ...defaultProps },
  render(createElement) {
    const { title, styles, parentStyles } = makeHeader(this.type)

    const HeaderTitle = createElement('h2', { style: styles }, [title])

    const HeaderContainer = (child) => {
      return createElement(
        'header',
        { class: 'HeaderContainer', style: parentStyles },
        [child]
      )
    }

    return HeaderContainer(HeaderTitle)
  },
}
</script>

<style lang="scss" scoped>
.HeaderContainer {
  padding: rem(26px 33px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--c-link-water);
}
</style>
