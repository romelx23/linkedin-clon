import { types } from "../types/types";

const initialState = {
  posts: [
    {
      date: { seconds: 0, nanoseconds: 0 },
      displayName: "",
      id: "",
      img: "",
      likes: 0,
      message: "",
      photoURL: "",
    },
  ],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.createPost:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case types.refreshPosts:
      return {
        ...state,
        posts: [action.payload,...state.posts],
      };
    case types.loadPost:
      return {
        ...state,
        posts: [...action.payload],
      };
    case types.likePost:
      return {
        ...state,
        posts: state.map((post) =>
          post.id === action.payload.id
            ? (post.likes = action.payload.likes)
            : post
        ),
      };

    default:
      return state;
  }
};
