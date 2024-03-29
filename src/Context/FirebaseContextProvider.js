import React, { useEffect, useState } from "react";
import FirebaseContext from "./FirebaseContext";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, push, update } from "firebase/database";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBPDFPf9t5Et03ePhbJh2fYV3La59Cdoo8",
  authDomain: "monsterapp-9b272.firebaseapp.com",
  databaseURL: "https://monsterapp-9b272-default-rtdb.firebaseio.com",
  projectId: "monsterapp-9b272",
  storageBucket: "monsterapp-9b272.appspot.com",
  messagingSenderId: "28325181629",
  appId: "1:28325181629:web:20a4ccd6dc4647e541dfd4",
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);

const firestore = getFirestore(firebaseApp);

const FirebaseContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });
  }, []);

  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);
  const pushData = (key, data) => push(ref(database, key), data);
  const updateData = (key, data) => update(ref(database, key), data);

  const signUpWithGoogle = () => {
    return signInWithPopup(firebaseAuth, provider);
  };

  const signOutWithGoogle = () => {
    return signOut(firebaseAuth);
  };

  const value = {
    signInUserWithEmailAndPassword,
    signUpUserWithEmailAndPassword,
    putData,
    pushData,
    updateData,
    signUpWithGoogle,
    signOutWithGoogle,
    firebaseAuth,
    user,
    isLoggedIn,
    firestore,
    database,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
