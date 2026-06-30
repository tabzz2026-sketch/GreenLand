import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMQY3jeGlZYGZT8fzNWRF_NlkRaTCVBRQ",
  authDomain: "greenland-f0ae4.firebaseapp.com",
  projectId: "greenland-f0ae4",
  storageBucket: "greenland-f0ae4.firebasestorage.app",
  messagingSenderId: "469823081051",
  appId: "1:469823081051:web:30e6d9b12ae32987918d7e",
  measurementId: "G-5QTH9W70BD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
