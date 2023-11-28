import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZjOGLpwODg-aXnpk4R3pvfgcC2Ui4No8",
  authDomain: "media-max.firebaseapp.com",
  projectId: "media-max",
  storageBucket: "media-max.appspot.com",
  messagingSenderId: "911771616974",
  appId: "1:911771616974:web:5e6f27a37580533b16b29f",
  measurementId: "G-4NV9RP0NWZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);