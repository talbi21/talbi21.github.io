// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCclupJgxJ5mD_COeq3Ye06cJrUVHD-LWA",
  authDomain: "achreftalbi-5a606.firebaseapp.com",
  projectId: "achreftalbi-5a606",
  storageBucket: "achreftalbi-5a606.appspot.com",
  messagingSenderId: "201708650293",
  appId: "1:201708650293:web:100630fd902e39c4c6167c",
  measurementId: "G-986TJMKNEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
