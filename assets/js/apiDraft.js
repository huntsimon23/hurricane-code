
// Youtube API
// API key: AIzaSyASR2Vax41X1XTlSVT0zZjd0LgP6L-kFuY




// YOUTUBE CONTENT

// CREATE GLOBAL VAR
// 1. Get ID of search field
// 2. 
// 3. Event listener for search button
// 4. Update queryUrl with search - limit search to 5
// 5. Perfoming an AJAX GET request to our queryURL
// 6. on promise function create dynamic bootstrap cards
// 7. 
// 
// 

// CREATE GLOBAL VARs
$(document).ready(function(){


var disasters = ["hurricane", "earthquake", "flood", "tornado"];
var countries = ["united states", "iraq", "indonesia", "central america"];
var search = [];
var queryURLGM;
var queryURLRW;
var queryURLYT = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=&type=video&key=AIzaSyASR2Vax41X1XTlSVT0zZjd0LgP6L-kFuY";
var userInput;
// ".btn-outline-success"

//capture value from search field to dynamically add to queryurl
//capture value from dropdown menu to add to queryurl ?

$("#submit-button").on("click", function(event){
  event.preventDefault();
  userInput = $("#user-input").val().trim();
  userInput = userInput.replace(" ", "+");
 
  console.log(userInput);


  var queryURLYT =  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + userInput + "&type=video&key=AIzaSyASR2Vax41X1XTlSVT0zZjd0LgP6L-kFuY";


  console.log(queryURLYT);


  
  $.ajax({
    url: queryURLYT,
    method: "GET"
  })
  
  .then(function(response) {
    for (var i =0; i < response.items.length; i++){
      console.log(response.items[i].id.videoId);

      
    }
    
  })
})
  




})
