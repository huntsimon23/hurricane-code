var reliefWebURL = "https://api.reliefweb.int/v1/reports?"

$.ajax({
    url: reliefWebURL,
    method: "GET"
}).then(function(response){
    var articleData = response.data

    var idCNTR = 0

    articleData.forEach(element => {
        var appArtCard = $("<div>").attr('class', 'card my-3 mx-auto').attr('style', 'width: 25rem').attr('id', 'appArtCard' + idCNTR)
        var appArtBody = $("<div>").attr('class', 'card-body').attr('id', 'appArtBody' + idCNTR)
        var appArtTitle = $("<h5>").attr('class', 'card-title').text(element.fields.title)

        
        console.log(element.fields.title)
        console.log(idCNTR)

        $("#trending").append(appArtCard)
        $("#appArtCard" + idCNTR).append(appArtBody)
        $("#appArtBody" + idCNTR).append(appArtTitle)

        idCNTR++


    });

})