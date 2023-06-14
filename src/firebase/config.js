import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_OhyAxw1nczXmbnynT_hRGe-VYXuriHo",
    authDomain: "blood-pressure-journal-acbd8.firebaseapp.com",
    projectId: "blood-pressure-journal-acbd8",
    storageBucket: "blood-pressure-journal-acbd8.appspot.com",
    messagingSenderId: "628910134027",
    appId: "1:628910134027:web:bb00f062c4c1cafb92880e"
}

// init firebase app
initializeApp(firebaseConfig)

//init services
const db = getFirestore()

export {db}