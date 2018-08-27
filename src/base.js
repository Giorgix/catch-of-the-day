import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBcxcIDVeYjLWWg6HVXjnPSh-wC6FYaEKY',
	authDomain: 'catch-of-the-day-giorgix.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-giorgix.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
