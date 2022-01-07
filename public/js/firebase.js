let firebaseConfig = {

    // Enter your firebase credentials
    apiKey: "AIzaSyCGt6EE3TLOX1owkUgUXDK_AHOBhMaGJ0U",
    authDomain: "paper-instrument-blog-a1fc9.firebaseapp.com",
    projectId: "paper-instrument-blog-a1fc9",
    storageBucket: "paper-instrument-blog-a1fc9.appspot.com",
    messagingSenderId: "1083936806469",
    appId: "1:1083936806469:web:932b991a277162dc81b52c",
};
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}