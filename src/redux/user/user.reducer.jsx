import { UserActionType } from './user.types'

const INITIAL_STATE = {
  currentUser: null,
}
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        CURRENT_USER: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
