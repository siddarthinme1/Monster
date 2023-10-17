import React, { useState } from "react";
import FirebaseContext from "./FirebaseContext";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBPDFPf9t5Et03ePhbJh2fYV3La59Cdoo8",
  authDomain: "monsterapp-9b272.firebaseapp.com",
  databaseURL: "https://monsterapp-9b272-default-rtdb.firebaseio.com",
  projectId: "monsterapp-9b272",
  storageBucket: "monsterapp-9b272.appspot.com",
  messagingSenderId: "28325181629",
  appId: "1:28325181629:web:20a4ccd6dc4647e541dfd4",
  databaseURL: "https://monsterapp-9b272-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);

const FirebaseContextProvider = (props) => {
  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  const signUpWithGoogle = () => {
    signInWithPopup(firebaseAuth, provider);
  };

  const signOutWithGoogle = () => {
    signOut(firebaseAuth);
  };

  const value = {
    signInUserWithEmailAndPassword,
    signUpUserWithEmailAndPassword,
    putData,
    signUpWithGoogle,
    signOutWithGoogle,
    firebaseAuth,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
