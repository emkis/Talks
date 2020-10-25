import { typesEnum } from '../properties/types'

import FooterAddFriend from './AddFriend/FooterAddFriend'
import FooterBlockFriend from './BlockFriend/FooterBlockFriend'
import FooterUnfriend from './Unfriend/FooterUnfriend'

const Footers = Object.freeze({
  [typesEnum.ADD_FRIEND]: FooterAddFriend,
  [typesEnum.UNFRIEND]: FooterUnfriend,
  [typesEnum.BLOCK_FRIEND]: FooterBlockFriend,
})

export const makeFooter = (footerType) => Footers[footerType]
