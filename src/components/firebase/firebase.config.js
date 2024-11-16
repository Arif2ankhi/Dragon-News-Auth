// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6GlfWgFFG__BIfEM3GKTuqrO6KOkA9nc",
  authDomain: "auth-moha-milon-151e5.firebaseapp.com",
  projectId: "auth-moha-milon-151e5",
  storageBucket: "auth-moha-milon-151e5.firebasestorage.app",
  messagingSenderId: "860443196352",
  appId: "1:860443196352:web:c4ab2d4015ade8cfb6e625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// export default app = getAuth(app);
export default app;