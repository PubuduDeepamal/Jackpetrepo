import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIR-VybnX-PYa1jqCxdnd_0lcnprnT0YU",
    authDomain: "jackpet-cea7e.firebaseapp.com",
    projectId: "jackpet-cea7e",
    storageBucket: "jackpet-cea7e.appspot.com",
    messagingSenderId: "106553612270",
    appId: "1:106553612270:web:defd0e1169221d993720ff",
    measurementId: "G-SFWRXC7V04"
  };

const firbaseApp = initializeApp(firebaseConfig);

export default firbaseApp
