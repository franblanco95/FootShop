import firebase from 'firebase/app';
import "@firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBtAh9RYYK2ub_4mC5xTcwS2vNtVR-RKuw",
    authDomain: "fran-ecommerce.firebaseapp.com",
    projectId: "fran-ecommerce",
    storageBucket: "fran-ecommerce.appspot.com",
    messagingSenderId: "347095890439",
    appId: "1:347095890439:web:628c564ace7d534cfe48a2"
  });
  
  export const getFirebase = () => {
      return firebaseConfig
  }
  // Funcion que devuelve la informacion de la BD
  export const getFirestore = () => {
      return firebase.firestore(firebaseConfig);
  }

