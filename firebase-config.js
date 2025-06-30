const firebaseConfig = {
  apiKey: "AIzaSyB4DNCuIrwOrKrGH1GWhle0-BH9iSViK3k",
  authDomain: "and-share-govt-doc.firebaseapp.com",
  projectId: "and-share-govt-doc",
  storageBucket: "and-share-govt-doc.firebasestorage.app",
  messagingSenderId: "473360804121",
  appId: "1:473360804121:web:de4321f076701f1c007d88",
  measurementId: "G-5WC034C1BE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
