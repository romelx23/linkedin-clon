// import { getStorage, ref } from "firebase/storage";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";

// // Create a root reference
// const storage = getStorage();

// // Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, 'mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// // While the file names are the same, the references point to different files
// // mountainsRef.name === mountainImagesRef.name;

// // Create a reference to 'images/mountains.jpg'

export const uploadFiles = async (file) => {
  const storage = getStorage();
  const imageRef = ref(storage, `images/${file.name}`);

  const uploadTask = uploadBytes(imageRef, file);

  const image = await uploadTask.then(async (snapshot) => {
    const url = await getDownloadURL(imageRef);
    return url;
  });

  Swal.fire({
    title: "¡Listo!",
    text: "Se ha subido la imagen",
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 1500,
    backdrop: false,
  });

  console.log(image);
  return image;
};

export const uploadVideosFiles = async (file) => {
  const storage = getStorage();
  const imageRef = ref(storage, `videos/${file.name}`);

  const uploadTask = uploadBytes(imageRef, file);

  const image = await uploadTask.then(async (snapshot) => {
    const url = await getDownloadURL(imageRef);
    return url;
  });

  Swal.fire({
    title: "¡Listo!",
    text: "Se ha subido el video",
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 1500,
    backdrop: false,
  });

  console.log(image);
  return image;
};
