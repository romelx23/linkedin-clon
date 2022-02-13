import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { createPost, refreshPosts } from "../actions/post";
import { db } from "../firebase/config";

export const usePost = () => {
  const [posts, setPosts] = useState([]);
    // const dispatch=useDispatch()
  //   const { post: item, setPost: setItem } = useContext(PostContext);
  const postcollection = query(
    collection(db, "linkedin"),
    orderBy("date", "desc")
  );
  
  useEffect(() => {
    const unSubscribe=onSnapshot(postcollection, (docs) => {
      const post = [];
      docs.forEach((doc) => {
        const {date,...data}=doc.data();
        const parsedate=new Date(doc.data().date.seconds*1000)
        post.push({
          id: doc.id,
          ...data,
          date:parsedate,
        });
      });
      setPosts(post)
    });
    // console.log(posts);
    return ()=>{
      unSubscribe()
    }
  }, []);
  // console.log(posts)
  return {
    posts,
    setPosts
  };
};
