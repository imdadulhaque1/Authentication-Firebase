import firebase from "firebase/app";
import "firebase/auth";

const app= firebase.initializeApp({
          apiKey: "AIzaSyCqiVGRmSRWsKa5xyvEk_kY2ycZBKCSiJo",
          authDomain: "imdadul-auth.firebaseapp.com",
          projectId: "imdadul-auth",
          storageBucket: "imdadul-auth.appspot.com",
          messagingSenderId: "1060689063279",
          appId: "1:1060689063279:web:c4f394ecc804726e070c9a"
});

const auth= app.auth();
export {auth};

export default app;