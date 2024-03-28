/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyA1MGl_mVVUJUq9UbLtlUHX7ntCSQdkwzc",

  authDomain: "friendlychat-d3694.firebaseapp.com",

  projectId: "friendlychat-d3694",

  storageBucket: "friendlychat-d3694.appspot.com",

  messagingSenderId: "647677903975",

  appId: "1:647677903975:web:0afa225d790f1e0d0880c2",

  measurementId: "G-3L0D9K6V41"

  };

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}