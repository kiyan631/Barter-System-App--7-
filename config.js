import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDsLoHocvYmByp7l4uofsEwMMosY-0bWxQ",
  authDomain: "barter-system-app-fd8c1.firebaseapp.com",
  projectId: "barter-system-app-fd8c1",
  storageBucket: "barter-system-app-fd8c1.appspot.com",
  messagingSenderId: "630586215484",
  appId: "1:630586215484:web:02be0fa632384bb219c739",
  measurementId: "G-ZB37TF3T1V"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
