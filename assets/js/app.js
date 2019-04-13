var NYTimesURL = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=AMQMxuYu9k5pwYEEK3tFSbdG6s99PQkO"

$.ajax({
    url: NYTimesURL,
    method: "GET"
}).then(function(response){
    var articleData = response.results



    for(i = 0; i < 10; i++){
        // console.log(articleData[i])

        var appArtCard = $("<div>").attr('class', 'card my-3 mx-auto').attr('style', 'width: 25rem').attr('id', 'appArtCard' + i)
        var appArtBody = $("<div>").attr('class', 'card-body').attr('id', 'appArtBody' + i)
        var appCardPic = $("<img>").attr('src', articleData[i].multimedia[4].url).attr('class', 'card-img-top').attr('id', 'appCardPic' + i)
        var appArtTitle = $("<h5>").attr('class', 'card-title mt-2').text(articleData[i].title)

        // console.log(articleData[i])

        $("#trending").append(appArtCard)
        $("#appArtCard" + i).append(appArtBody)
        $("#appArtBody" + i).append(appCardPic)
        $("#appArtBody" + i).append($("<hr>"))
        $("#appArtBody" + i).append(appArtTitle)


    }

})