import { types } from "../types/types";

// ui : '214125b33v4b',
// name : 'alexis',
// photoUrl:''

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
        return {
            uid:action.payload.uid,
            name:action.payload.displayName,
            photoUrl:action.payload.photoUrl,
        }
    case types.logout:
        return {};

    default:
      return state;
  }
};
