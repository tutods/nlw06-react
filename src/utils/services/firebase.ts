import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const {
	REACT_APP_API_KEY,
	REACT_APP_AUTH_DOMAIN,
	REACT_APP_DB_URL,
	REACT_APP_PROJECT_ID,
	REACT_APP_STORAGE_BUCKET,
	REACT_APP_SENDER_ID,
	REACT_APP_APP_ID
} = process.env;

// Firebase configuration
const firebaseConfig = {
	apiKey: REACT_APP_API_KEY,
	authDomain: REACT_APP_AUTH_DOMAIN,
	databaseURL: REACT_APP_DB_URL,
	projectId: REACT_APP_PROJECT_ID,
	storageBucket: REACT_APP_STORAGE_BUCKET,
	messagingSenderId: REACT_APP_SENDER_ID,
	appId: REACT_APP_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase };
