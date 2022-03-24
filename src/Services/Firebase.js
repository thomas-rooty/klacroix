// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMMH2KbOBRssNaWNMVnJgZqo8zcLGhLf8",
    authDomain: "tcaron-b55e5.firebaseapp.com",
    storageBucket: "gs://tcaron-b55e5.appspot.com/",
    databaseURL: "https://tcaron-b55e5.firebaseio.com",
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

export { storage };