import firebase from 'firebase/app'
import 'firebase/firestore'

export const config = {
	apiKey: "AIzaSyBu0IQ3_G3uHxxhn2Gq7GSpCI3JXvQHIJo",
	authDomain: "random-quote-bb4e6.firebaseapp.com",
	projectId: "random-quote-bb4e6",
	storageBucket: "random-quote-bb4e6.appspot.com",
	messagingSenderId: "94254476717",
	appId: "1:94254476717:web:c24c8c93f51ae72bbb0524",
	measurementId: "G-L7B5KFMB88"
 };
 firebase.initializeApp(config)
 export const firestore = firebase.firestore()
 export default firebase