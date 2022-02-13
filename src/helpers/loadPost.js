import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const loadPosts = async () => {
  const postcollection = query(
    collection(db, "linkedin"),
    orderBy("date", "desc")
  );
  const post = [];
  // onSnapshot(postcollection, (docs) => {
  //   const post = [];
  //   docs.forEach((doc) => {
  //     post.push({
  //       uid: doc.id,
  //       ...doc.data(),
  //     });
  //     //   setItem({...doc.data})
  //     console.log(post)
  //     return post
  //   });
  // });
  const querySnapshot = await getDocs(postcollection);
  querySnapshot.forEach((doc) => {
    const parsedate=new Date(doc.data().date.seconds*1000)
    post.push({
      id: doc.id,
      ...doc.data(),
      date:parsedate,
    });
    // console.log(parsedate);
    // console.log(doc.id, " => ", doc.data());
  });
  // console.log(post);
  return post;
};
