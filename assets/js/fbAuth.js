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
    event.preventDefault();
    // Capture the value from the id's

    var emailText = $("#input-email").val();
    var passwordText = $("#input-password").val();
    var pVerifyText = $("#input-password-verify").val();

    // if(passwordText ==! pVerifyText) {
    //   $("#modal-submit-btn").submit(function(e){
    //     e.preventDefault();
    //     console.log("they don't match");
    // });
    // }

    // Change what is saved in firebase
    database.ref().push({
    email: emailText,
    password: passwordText,
    emailVerified: pVerifyText,
    });

    // Clear localStorage
    localStorage.clear();

    // Store email, password and verified password content into localStorage
    localStorage.setItem("email", emailText);
    localStorage.setItem("password", passwordText);
    localStorage.setItem("passwordVerify", pVerifyText);

    $(this.form).submit();
    $('#loginModal').modal('hide');
    // 
});




    // When changes occurs, print the email on the html designated div (TBD) 
    database.ref().on("value", function (snapshot) {
    $("#email-display").text(snapshot);
    console.log(snapshot);    
    });
    // Run on click function - to save articles as favorite 
    
