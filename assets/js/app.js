var NYTimesURL = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=AMQMxuYu9k5pwYEEK3tFSbdG6s99PQkO"
var reliefWebURL = "https://api.reliefweb.int/v1/countries"
var onOff = 1
var crisisCountries = []
var long;
var lat;

// <--------TO-DO-------->

// $("#onOffSwitch").on('click', function(){
//     switch (onOff){
//         case 0:
//             console.log("i am off")
//             $("#onOffSwitch").attr('src', './assets/images/on.png')
//             $('link[rel=stylesheet]').attr('href','./assets/css/darkmode.css');
//             onOff++
//             console.log("i turned on")

//         break;
//         case 1:
//         console.log("i am on")
//             $("#onOffSwitch").attr('src', './assets/images/off.png')
//             $('link[rel=stylesheet]').attr('href','./assets/css/style.css');
//             onOff--
//         console.log("i turned off")
//         break;
//     }
//     console.log(onOff)
// })


// <------------------TRENDING-CODE------------------>


$.ajax({
    url: NYTimesURL,
    method: "GET"
}).then(function(response){
    var articleData = response.results
    var windowHeight = $(window).height()
    var footerHeight = $("#donate").height()
    var trendingHeight = windowHeight - footerHeight

    var contentHeight = trendingHeight / 2

    $("#map").css('height', contentHeight)
    $("#player").css('height', contentHeight)



    $("#trending").css('height', trendingHeight)


    for(i = 0; i < 10; i++){
        // console.log(articleData[i])

        var appArtCard = $("<div>").attr('class', 'card my-3 mx-auto').attr('style', 'width: 25rem').attr('id', 'appArtCard' + i)
        var appArtBody = $("<div>").attr('class', 'card-body').attr('id', 'appArtBody' + i)
        var appCardPic = $("<i>").attr('class', 'far fa-heart login-show heart').attr('name', 'save').attr('id', 'appCardPic' + i).attr("hidden", true).attr("url", articleData[i].url).attr("snippet", articleData[i].title);
        var appCardPic2 = $("<img>").attr('src', articleData[i].multimedia[4].url).attr('class', 'card-img-top').attr('id', 'appCardPic' + i)
        var appArtTitle = $("<a href='" + articleData[i].url + "'>").attr('class', 'card-title mt-2').text(articleData[i].title)

        // console.log(articleData[i])

        $("#trending").append(appArtCard)
        $("#appArtCard" + i).append(appArtBody)
        $("#appArtBody" + i).append(appCardPic)
        $("#appArtBody" + i).append(appCardPic2)
        $("#appArtBody" + i).append($("<hr>"))
        $("#appArtBody" + i).append(appArtTitle)

        loginShow();
    }

})

// <------------------MAPS-CODE------------------>

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZXZlbGF6IiwiYSI6ImNqdWw3cGQweDIzemMzeXVqY3MyamV0cWoifQ.NziRPnE3JtKjiMTfVxwXdQ';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/josevelaz/cjul7zojz07lv1fqq7tc12oxt',
        center: [-71.020000, 42.362400],
        zoom: 1
    });


// <------------------RELIEF-WEB------------------>
$.ajax({
    url: reliefWebURL,
    method: "GET"
}).then(function(response){
    var countryData = response.data
    var crisisCountries = ""


    for(i = 0; i < 11; i++){
       crisisCountries  = countryData[i].fields.name
       var geocode = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + crisisCountries + ".json?limit=2&types=country&access_token=pk.eyJ1Ijoiam9zZXZlbGF6IiwiYSI6ImNqdWw3cGQweDIzemMzeXVqY3MyamV0cWoifQ.NziRPnE3JtKjiMTfVxwXdQ"

       $.ajax({
           url: geocode,
           method: "GET"
       }).then(function(response){
           lat = response.features[0].geometry.coordinates[0]
           long = response.features[0].geometry.coordinates[1]

        //    console.log(long)
        //    console.log(lat)

           var el = document.createElement('div');
           el.className = 'marker';


        new mapboxgl.Marker(el)
            .setLngLat([lat, long])
            .addTo(map);

        // Create a popup, but don't add it to the map yet.
        var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
        });
         
        map.on('mouseenter', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';
         
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = crisisCountries
         
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
         
        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
        });
         
        map.on('mouseleave', 'places', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
        }); 
    

        })

    }
})



