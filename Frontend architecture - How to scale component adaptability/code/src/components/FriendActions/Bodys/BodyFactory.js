import { typesEnum } from '../properties/types'

import BodyAddFriend from './AddFriend/BodyAddFriend'
import BodyBlockFriend from './BlockFriend/BodyBlockFriend'
import BodyUnfriend from './Unfriend/BodyUnfriend'

const Bodys = Object.freeze({
  [typesEnum.ADD_FRIEND]: BodyAddFriend,
  [typesEnum.UNFRIEND]: BodyUnfriend,
  [typesEnum.BLOCK_FRIEND]: BodyBlockFriend,
})

export const makeBody = (bodyType) => Bodys[bodyType]
