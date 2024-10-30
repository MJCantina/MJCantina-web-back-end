const express = require('express');
const host = express();
const port = 3000;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp_XPeHS3quBxP35JOaILBLODzuEqZYek",
  authDomain: "cantina---senai.firebaseapp.com",
  databaseURL: "https://cantina---senai-default-rtdb.firebaseio.com",
  projectId: "cantina---senai",
  storageBucket: "cantina---senai.appspot.com",
  messagingSenderId: "908460332354",
  appId: "1:908460332354:web:a063e48ee35421540524db",
  measurementId: "G-SMWP7V6CTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

host.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});