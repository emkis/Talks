import { typesEnum } from '../properties/types'

import HeaderAddFriend from './AddFriend/HeaderAddFriend'
import HeaderUnfriend from './Unfriend/HeaderUnfriend'
import HeaderBlockFriend from './BlockFriend/HeaderBlockFriend'

const Headers = Object.freeze({
  [typesEnum.ADD_FRIEND]: HeaderAddFriend,
  [typesEnum.UNFRIEND]: HeaderUnfriend,
  [typesEnum.BLOCK_FRIEND]: HeaderBlockFriend,
})

export const makeHeader = (headerType) => Headers[headerType]
