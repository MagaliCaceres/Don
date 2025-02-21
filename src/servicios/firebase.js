import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAG3brEFQGosm-wLUSeIXuGknZ6IyqwxkA",
    authDomain: "don-sitio-web.firebaseapp.com",
    projectId: "don-sitio-web",
    storageBucket: "don-sitio-web.appspot.com",
    messagingSenderId: "760696056377",
    appId: "1:760696056377:web:938900156dbe0b74a87be8",
    measurementId: "G-PQ3G34JVMK"
};

    const app = initializeApp(firebaseConfig);

    export const db = getFirestore(app);
    export const auth = getAuth(app)