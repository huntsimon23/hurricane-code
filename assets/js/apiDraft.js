
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


var disasters = ["Earthquake", "Volcano", "Hurricane", "Tornado", "Tsunami", "Drought", "Landslide", "Debris Flow", "Fire", "Flood"];

var countries = ["Japan", "China", "United States", "India", "Brazil", "Afganistan", "France", "Haiti", "Mozambique", "Indonesia"];
var queryURLGM;
var queryURLRW;
var queryURLYT;
var userInput;
var dropdown = [];
var dropdownVal;
var ytResults = [];


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
  $("#infographic").hide();
  userInput = $("#user-input").val().trim();
  // userInput = userInput.replace(" ", "+");
  // dropdown = dropdown.join("+");

  console.log("Dropdown  "+ dropdown);
  console.log(userInput);


  var queryURLYT =  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + userInput + "+" + dropdown + "weather+channel+bbc-music-entertainment&type=video&key=AIzaSyASR2Vax41X1XTlSVT0zZjd0LgP6L-kFuY";


  console.log(queryURLYT);


  
  $.ajax({
    url: queryURLYT,
    method: "GET"
  })
  
  .then(function(response) {
    console.log("hi");

    // add responses to an array

    for (var i =0; i < response.items.length; i++){
      console.log(response.items[i].id.videoId);

      // ytResults.push(response.items[i].id.videoId);
      // console.log("yt Results "+ ytResults);



      // ---------------------------------------------------------------------------

      // CALL IFRAME API - Can't get to reload videos after a second search
      // var player;

      // function onYouTubeIframeAPIReady() {
      //     player = new YT.Player('video-placeholder', {
      //         width: 600,
      //         height: 400,
      //         videoId: response.items[i].id.videoId,
      //         playerVars: {
      //             color: 'white',
      //             // listType:'search',
      //           },
              
      //     });
      // }
      
      // onYouTubeIframeAPIReady();

      // ---------------------------------------------------------------------------





    // ANOTHER WAY TO DISPLAY YOUTUBE VIDEOS

      var youtube = "https://www.youtube.com/embed/" 
      + response.items[i].id.videoId + "?loop=1";

      console.log(youtube);
      

      var iframe = $("<iframe width='560' height='315' src= youtube  frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");

      iframe.attr("src", youtube);
      $("#player").empty(); 
      $("#player").html(iframe);

        }
      }
              
            
  )

  // <----------------TRENDING-CODE---------------->

var NYTimesURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=AMQMxuYu9k5pwYEEK3tFSbdG6s99PQkO&q=" + userInput + "+" + dropdown 



$.ajax({
  url: NYTimesURL,
  method: "GET"
}).then(function(response){

  console.log(response)
  
  var articleData = response.response.docs
  var windowHeight = $(window).height()
  var footerHeight = $("#donate").height()
  var trendingHeight = windowHeight - footerHeight

  $("#trending").empty()

  $("#trending").css('height', trendingHeight)

  for(i = 0; i < 10; i++){
      // console.log(articleData[i])

      var appArtCard = $("<div>").attr('class', 'card my-3 mx-auto').attr('style', 'width: 25rem').attr('id', 'appArtCard' + i)
      var appArtBody = $("<div>").attr('class', 'card-body align-center').attr('id', 'appArtBody' + i)
      var appCardPic = $("<i>").attr('class', 'far fa-heart').attr('name', 'save').attr('id', 'appCardPic' + i).attr('id', 'heart')
      var appArtTitle = $("<a>").attr('href', articleData[i].web_url).attr('id', 'articleLink').attr('class', 'card-title mt-2').text(articleData[i].snippet)

      // console.log(articleData[i])

      $("#trending").append(appArtCard)
      $("#appArtCard" + i).append(appArtBody)
      $("#appArtBody" + i).append(appCardPic)
      $("#appArtBody" + i).append($("<hr>"))
      $("#appArtBody" + i).append(appArtTitle)


  }

})

})
  
// Youtube Div - Iframe resizing (responsive) - DONE,
//  5 videos in sequence,
//  advanced search filtering 







})
