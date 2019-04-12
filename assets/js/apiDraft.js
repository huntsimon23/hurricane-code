
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


var disasters = ["Earthquake", "Volcano", "Hurricane", "Tornado", "Tsunami"];
var countries = ["Japan", "China", "United States", "India", "Brazil"];
var search = [];
var queryURLGM;
var queryURLRW;
var queryURLYT;
var userInput;
var dropdownVal = [];


//whenever I play the youtube video is saying video unavailable

//replace "disaster" for the clicked value from dropdown 



//capture value from dropdown menu to add to queryurl 
$(".disaster-dropdown, .country-dropdown").on("click", function(event){
  console.log($(this).text());

  dropdownVal.push($(this).text());
  console.log(dropdownVal);

})






//capture value from search field to dynamically add to queryurl - DONE
$("#submit-button").on("click", function(event){
  event.preventDefault();
  userInput = $("#user-input").val().trim();
  userInput = userInput.replace(" ", "+");
  dropdownVal = dropdownVal.join("+");

  console.log("Dropdown val "+ dropdownVal);
  console.log(userInput);


  var queryURLYT =  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + userInput + "+" + dropdownVal + "&type=video&key=AIzaSyASR2Vax41X1XTlSVT0zZjd0LgP6L-kFuY";


  console.log(queryURLYT);


  
  $.ajax({
    url: queryURLYT,
    method: "GET"
  })
  
  .then(function(response) {
    for (var i =0; i < response.items.length; i++){
      console.log(response.items[i].id.videoId);

      var youtube = "https://www.youtube.com/embed/" 
      + response.items[i].id.videoId;

      console.log(youtube);

      var iframe = $("<iframe>");

      iframe.attr("src", youtube); 

      $("#youtube").html(iframe);

        }}
        
        // figure out how to display the 5 videos - scrollable or next button on the iframe?
        
        // figure out how to get the value from dropdown menu and add to search
        
            
  )
})
  




})
