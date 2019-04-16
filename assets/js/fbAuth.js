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
$("#modal-submit-btn").on("click", function(){
    // Prevent the page from refreshing
    // Capture the value from the id's

    # input-email
    # input-password
    # input-password-verify

    // Change what is saved in firebase
    database.ref().set({


    })

    // Clear localStorage
    localStorage.clear();

    // Store email, password and verified password content into localStorage


    // 


});




    // When changes occurs, print the email on the html designated div (TBD) 
    database.ref().on("value", function (snapshot) {


    })


    // Run on click function - to save articles as favorite 

