/** @format */
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyDGgMrmA6krlAj3i4jEyDPinLMiVA67iGk',
	authDomain: 'acornus-admin.firebaseapp.com',
	databaseURL: 'https://acornus-admin-default-rtdb.firebaseio.com',
	projectId: 'acornus-admin',
	storageBucket: 'acornus-admin.appspot.com',
	messagingSenderId: '830271715719',
	appId: '1:830271715719:web:8680902f7528a3ae4cbb22',
	measurementId: 'G-N7HS1W6EJZ',
});

export default firebaseConfig;
