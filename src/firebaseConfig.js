// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD0lmsiqpX-ns8HFQ3_UqndMe4HaFaw_7o",
	authDomain: "joyce-secret-base.firebaseapp.com",
	projectId: "joyce-secret-base",
	storageBucket: "joyce-secret-base.appspot.com",
	messagingSenderId: "749305795342",
	appId: "1:749305795342:web:e8c5662ce8b0938af47d5f",
	measurementId: "G-DBHMYHV768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
