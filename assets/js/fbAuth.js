 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCZShavrqBv1mczIBpUkG5Yj0oNeyulzec",
    authDomain: "huntsimon23-disasterdashboard.firebaseapp.com",
    databaseURL: "https://huntsimon23-disasterdashboard.firebaseio.com",
    projectId: "huntsimon23-disasterdashboard",
    storageBucket: "huntsimon23-disasterdashboard.appspot.com",
    messagingSenderId: "1021340464037"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

    // Initial Variables (SET the first set IN FIREBASE FIRST)
    // Note remember to create these same variables in Firebase!
    var email = "";
    var password = "";
    var emailVerified = "";

// Click submit changes what is stored in firebase
$(document).on("click", "#modal-submit-btn", function(){
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();

    var emailText = $("#input-email").val();
    var passwordText = $("#input-password").val();

    // Change what is saved in firebase
    // database.ref().push({
    // email: emailText,
    // password: passwordText,
    // });

    // Clear localStorage
    localStorage.clear();

    // Store email, password and verified password content into localStorage
    localStorage.setItem("email", emailText);
    localStorage.setItem("password", passwordText);

    firebase.auth().createUserWithEmailAndPassword(emailText, passwordText).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
    $("#email-display").text(emailText);
    $(this.form).submit();
    $("#loginModal").modal('hide');

});

    // When changes occurs, print the email on the html designated div (TBD) 
    // database.ref().on("value", function (snapshot) {
    // $("#email-display").text(snapshot);
    // console.log(snapshot);    
    // });

// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//         firebase.auth.EmailAuthProvider.PROVIDER_ID
//       ],
//     });

// var uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return false;
//     },
    
//     uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: 'popup',
//   signInSuccessUrl: '',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
//   // autoUpgradeAnonymousUsers: true,
// };

// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

    // Run on click function - to save articles as favorite 