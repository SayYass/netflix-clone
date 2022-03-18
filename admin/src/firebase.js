import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyCWZkMsXpAO3FcxsiFhzVJ4EVCTHYH0DR4",

  authDomain: "netflix-8fe3c.firebaseapp.com",

  projectId: "netflix-8fe3c",

  storageBucket: "netflix-8fe3c.appspot.com",

  messagingSenderId: "671165109996",

  appId: "1:671165109996:web:363041efcafac97437f7c9",

  measurementId: "G-T7BJ4YK71J"

};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
