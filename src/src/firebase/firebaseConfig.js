import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW4fI2i9n4dp4bCuhUVkxnPwki0fGLTyM",
  authDomain: "mega-city-cab-a0bf1.firebaseapp.com",
  projectId: "mega-city-cab-a0bf1",
  storageBucket: "mega-city-cab-a0bf1.appspot.com",  
  messagingSenderId: "510879218276",
  appId: "1:510879218276:web:c45679951fff34de12bd71",
  measurementId: "G-SJGHE68JQN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Authentication and Google Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
