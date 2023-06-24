import Firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
// import {seedDatabase} from '../seed'

const configuration = {
    apiKey: "***********",
    authDomain: "**********",
    projectId: "***********",
    storageBucket: "*************",
    messagingSenderId: "***********",
    appId: "*************"
};

const firebase =Firebase.initializeApp(configuration);

// seedDatabase(firebase);
export { firebase };
