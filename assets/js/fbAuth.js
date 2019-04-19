//This is where the firebase code goes

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
    // Prevent the page from refreshing
    // event.preventDefault();
    // // Capture the value from the id's

    // var emailText = $("#input-email").val();
    // var passwordText = $("#input-password").val();
    // var pVerifyText = $("#input-password-verify").val();

    // // if(passwordText ==! pVerifyText) {
    // //   $("#modal-submit-btn").submit(function(e){
    // //     e.preventDefault();
    // //     console.log("they don't match");
    // // });
    // // }

    // // Change what is saved in firebase
    // database.ref().push({
    // email: emailText,
    // password: passwordText,
    // emailVerified: pVerifyText,
    // });

    // // Clear localStorage
    // localStorage.clear();

    // // Store email, password and verified password content into localStorage
    // localStorage.setItem("email", emailText);
    // localStorage.setItem("password", passwordText);
    // localStorage.setItem("passwordVerify", pVerifyText);

    $(this.form).submit();
    $("#email-display").text('name@email.com');
    console.log(firebase.auth.EmailAuthProvider.PROVIDER_ID);
    $('#loginModal').modal('hide');
    // 
});




    // When changes occurs, print the email on the html designated div (TBD) 
    database.ref().on("value", function (snapshot) {
    $("#email-display").text(snapshot);
    console.log(snapshot);    
    });

    // Run on click function - to save articles as favorite 
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // autoUpgradeAnonymousUsers: true,
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);