import firebase from "firebase/app";
import "firebase/auth";

const app= firebase.initializeApp({
          apiKey: "AIzaSyAM7uSw6N4VWHHaBF0Y2qSEe0w6oq_CN5I",
          authDomain: "fir-auth-development-5a68f.firebaseapp.com",
          projectId: "fir-auth-development-5a68f",
          storageBucket: "fir-auth-development-5a68f.appspot.com",
          messagingSenderId: "826305787768",
          appId: "1:826305787768:web:5fbfaab00ca91aded8fa8d"
});

const auth= app.auth();
export {auth};

export default app;