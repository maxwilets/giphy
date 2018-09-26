$(document).ready(function() {
    var topicAr = ["Adventure Time", "Steven Universe", "Venture Bros", "Over the Garden Wall", "King of the Hill", "X Men", "Gumball", "Chowder", "Flapjack", "FLCL"];
    var dataAr = ["Adventure+Time", "Steven+Universe", "Venture+Bros", "Over+the+Garden+Wall", "King+of+the+Hill", "X+Men", "Gumball", "Chowder", "Flapjack", "FLCL"]
    for (i=0; i< topicAr.length; i++) {
        $("#buttons").append("<button data-person='" +  dataAr[i] +"'>" +topicAr[i]+ "</button>");
       

    };
    apiKey = "&api_key=FNylGLwnk8dtDcWGsdnGC8UU6R7M9Il3&limit=10";
    $("button").on("click", function(){
        console.log($(this));
        var toon = $(this).attr("data-person");
        console.log(toon);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        toon + apiKey;
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response){
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
    
                var rating = results[i].rating;
                console.log(rating);
                var p = $("<p>").text("Rating: " + rating);
    
                var personImage = $("<img>");
                personImage.attr("src =", results[i].images.fixed_height.url);
    
                gifDiv.prepend(p);
                gifDiv.prepend(personImage);
    
                $("#gifs").prepend(gifDiv);
            }
        })
    })
})