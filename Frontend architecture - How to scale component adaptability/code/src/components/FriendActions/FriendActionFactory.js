import { typesEnum } from './properties/types'

import ActionAddFriend from './ActionAddFriend'
import ActionUnfriend from './ActionUnfriend'
import ActionBlock from './ActionBlock'

const Actions = Object.freeze({
  [typesEnum.ADD_FRIEND]: ActionAddFriend,
  [typesEnum.UNFRIEND]: ActionUnfriend,
  [typesEnum.BLOCK_FRIEND]: ActionBlock,
})

export const makeAction = (actionType) => Actions[actionType]
