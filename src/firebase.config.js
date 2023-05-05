import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB_DuR9YJ9nVtRtgjWYvQR3JCDw8iZt1WU",
  authDomain: "restaurantsite-473c7.firebaseapp.com",
  databaseURL: "https://restaurantsite-473c7-default-rtdb.firebaseio.com",
  projectId: "restaurantsite-473c7",
  storageBucket: "restaurantsite-473c7.appspot.com",
  messagingSenderId: "1068827431950",
  appId: "1:1068827431950:web:3db0d4491a71904ba5585f"
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage }