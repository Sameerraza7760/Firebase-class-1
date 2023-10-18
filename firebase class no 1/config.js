
// in this we learned complete authetication


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,updateEmail,deleteUser  }  from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCkOaafmzhKaSSpY2Kgy2_FSqThqDjRY6Q",
    authDomain: "authentication-247ce.firebaseapp.com",
    projectId: "authentication-247ce",
    storageBucket: "authentication-247ce.appspot.com",
    messagingSenderId: "1066835457540",
    appId: "1:1066835457540:web:62c4a8ff35ee65fdb8a751",
    measurementId: "G-SHP1Z40XXW"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



//the createuserwithemailandpassword come from getauthfirebase and its also a method to sigup a new user
//it takes 3 argument auth,email,password the auth come from firebase and email and password we provided
//and gives a promise promisse resolve in .then and reject and .catch

// createUserWithEmailAndPassword(auth, "ahsan010@gmail.com", "123123")
//   .then((res) => {
//     // Signed up 
//     const user = res.user;
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     // const errorCode = error.code;
//     const errorMessage = error.message;

//     console.log("errorMessege",errorMessage)
//   });


  signInWithEmailAndPassword(auth, "ahsan111@gmail.com", "123123")
  .then((res) => {
    // Signed in 
    const user = res.user;
    console.log("login",user)
    // ...
  })
  .catch((e) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(e.message)
  })


//   the onauthStatechanged is save the user in cashe 

  onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, you can now delete the user
        deleteUser(user)
          .then(() => {
            console.log('User deleted successfully.');
          })
          .catch((error) => {
            console.error('Error deleting user:', error.message);
          });
      } else {
        console.error('No user signed in. Unable to delete user.');
      }
  })
  let ubdateProfile=async()=>{
      //   ubdate email of curreunt user method
   await updateEmail (auth.currentUser, "user@example.com").then(() => {
        console.log('ubdateemail')
        // Email updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
        console.log(error.message)
      });
    
  }
  document.getElementById('ubdateProfile').addEventListener("click",ubdateProfile)
//   const myauth = getAuth();
//   const user = myauth.currentUser;
  
  if (user) {
    // User is signed in, you can now delete the user
    deleteUser(user)
      .then(() => {
        console.log('User deleted successfully.');
      })
      .catch((error) => {
        console.error('Error deleting user:', error.message);
      });
  } else {
    console.error('No user signed in. Unable to delete user.');
  }