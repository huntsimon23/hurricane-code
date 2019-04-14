
// Youtube API
// API key: AIzaSyASR2Vax41X1XTlSVT0zZjd0LgP6L-kFuY




// YOUTUBE CONTENT

// CREATE GLOBAL VAR
// 1. Get ID of search field
// 3. Event listener for search button
// 4. Update queryUrl with search - limit search to 5
// 5. Perfoming an AJAX GET request to our queryURL
// 6. on promise function create dynamic bootstrap cards



// CREATE GLOBAL VARs
$(document).ready(function(){


var disasters = ["Earthquake", "Volcano", "Hurricane", "Tornado", "Tsunami"];
var countries = ["Japan", "China", "United States", "India", "Brazil"];
var queryURLGM;
var queryURLRW;
var queryURLYT;
var userInput;
var dropdown = [];
var dropdownVal;


//whenever I play the youtube video is saying video unavailable






//replace "disaster" and "country" for the clicked value from dropdown - DONE

//capture value from dropdown menu to add to queryurl - DONE
$(".disaster-dropdown, .country-dropdown").on("click", function(event){
  console.log($(this).text());
  dropdownVal = $(this).text();

  dropdown.push(dropdownVal);
  console.log(dropdown);

  if (disasters.includes(dropdownVal)){
    $(".disaster span").text(dropdownVal);
  } 
    else if (countries.includes(dropdownVal)) {
      $(".country span").text(dropdownVal);
  }
})






//capture value from search field to dynamically add to queryurl - DONE
$("#submit-button").on("click", function(event){
  event.preventDefault();
  userInput = $("#user-input").val().trim();
  // userInput = userInput.replace(" ", "+");
  // dropdown = dropdown.join("+");

  console.log("Dropdown  "+ dropdown);
  console.log(userInput);


  var queryURLYT =  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + userInput + "+" + dropdown + "&type=video&key=AIzaSyASR2Vax41X1XTlSVT0zZjd0LgP6L-kFuY";


  console.log(queryURLYT);


  
  $.ajax({
    url: queryURLYT,
    method: "GET"
  })
  
  .then(function(response) {
    console.log("hi");
    // for (var i =0; i < response.items.length; i++){
      // console.log(response.items[i].id.videoId);

      var player;

      function onYouTubeIframeAPIReady() {
          player = new YT.Player('#video-placeholder', {
              width: 600,
              height: 400,
              videoId: "vm4xx6P56H4",
              playerVars: {
                  color: 'white',
                  playlist: 'taJ60kskkns,FG0fTKAqZ5g'
              },
              events: {
                  onReady: initialize
              }
          });
      }
      


      function initialize(){

        // Update the controls on load
        updateTimerDisplay();
        updateProgressBar();
    
        // Clear any old interval.
        clearInterval(time_update_interval);
    
        // Start interval to update elapsed time display and
        // the elapsed part of the progress bar every second.
        time_update_interval = setInterval(function () {
            updateTimerDisplay();
            updateProgressBar();
        }, 1000)
    
    }





      // var youtube = "https://www.youtube.com/embed/" 
      // + response.items[i].id.videoId + "?loop=1";

      // console.log(youtube);
      

      // var iframe = $("<iframe width='560' height='315' src= youtube  frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");

      // iframe.attr("src", youtube);
      // $("#player").empty(); 
      // $("#player").html(iframe);

        // }
      }
              
            
  )
})
  
// Youtube Div - Iframe resizing (responsive) - DONE,
//  5 videos in sequence,
//  advanced search filtering 




})
