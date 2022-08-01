import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from 'firebase/auth';
 import {getFirestore, doc,getDoc, setDoc} from 'firebase/firestore';
 // getting the doc datta and setting the doc data
 // doc allow getting document instance

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKNQEGKfg4xugxKfL_K1v_mQK0RdER0bg",
    authDomain: "crwn-clothing-db-f0183.firebaseapp.com",
    projectId: "crwn-clothing-db-f0183",
    storageBucket: "crwn-clothing-db-f0183.appspot.com",
    messagingSenderId: "777644481938",
    appId: "1:777644481938:web:ec35065aff243e166bb54b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

  export const db = getFirestore();

  export const createuserDocumentFromAuth = async (userAuth) => {
    const userDocRef= doc(db,'users', userAuth.uid); 
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
  
    // if user doesnt exist in DB
    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email, 
          createAt
        });
      }
      catch (error){
        console.log('error creating user', error.message);
      }

    }
    return userDocRef;

  };