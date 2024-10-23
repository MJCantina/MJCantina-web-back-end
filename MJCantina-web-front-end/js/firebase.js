// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "http://www.gstti.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5yACeX5UWAI6X18fJhpNi8KBLicTViCc",
  authDomain: "webcantina-9f40d.firebaseapp.com",
  projectId: "webcantina-9f40d",
  storageBucket: "webcantina-9f40d.appspot.com",
  messagingSenderId: "842815890660",
  appId: "1:842815890660:web:5b2aabb9ed30621d6b38f1",
  measurementId: "G-716QPHDKT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



//submit button 
const submit = document.getElementById('enviar');
enviar.addEventListener("click", function (event) {
  event.preventDefault()

  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Accont...")
    window.location.href = "grand.hmtl";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("AlertMenssage")
    // ..
  });

})