import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { loadPosts } from "../helpers/loadPost";
import { types } from "../types/types";

export const setPost = async (
  uid = "",
  displayName = "",
  photoURL = "",
  message = "",
  img = "",
  video="",
  event="",
  likes = 0
) => {
  // return async(dispatch) => {
    const date = new Date();
    const docRef = await addDoc(collection(db, `linkedin`), {
      displayName,
      photoURL,
      uid,
      message,
      img,
      video,
      event,
      likes,
      date,
    });
    // console.log(docRef)
    // dispatch(createPost())
  // };
};

export const createPost = (post) => ({
  type: types.createPost,
  payload: {
    ...post,
  },
});

export const refreshPosts = (post) => ({
  type: types.refreshPosts,
  payload: {
    ...post,
  },
});

export const StartloadPost = () => {
  return async (dispatch) => {
    const posts = await loadPosts();
    dispatch(setPosts(posts));
    // console.log(posts);
  };
};

export const setPosts = (posts) => ({
  type: types.loadPost,
  payload: posts,
});

export const likePost = (id = "", quantity = 0) => {
  // pasamos el id del documento al cual queremos
  // actualizar el campo like
  //solo se puede hacer 1 like por persona
  return async () => {
    const postRef = doc(db, "linkedin", id);

    // Set the "like" field of the city 'post'
    await updateDoc(postRef, {
      likes: quantity,
    });
  };
};
