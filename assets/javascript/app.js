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
           results=response.data;
           console.log(results);
           for (i = 0; i < results.length; i++) {
               var gifDiv= $("<div>");
               gifDiv.addClass("gift")
               gifDiv.attr("data-state", "still");

               var rating = results[i].rating;

               var p =$("<p>").text("Rating: " + rating);

               var image = $('<img class= "itsme">');
               image.attr("data-state", "still")

               image.attr("src", results[i].images.fixed_height_still.url);

               image.attr("data-move", results[i].images.fixed_height.url);

               console.log(image);
               gifDiv.prepend(p);

               gifDiv.prepend(image);
               $("#gifsAttack").prepend(gifDiv);

           }
           $(".itsme").on("click", function(){
            move = $(this).attr('data-move');
            notMove = $(this).attr('src');
               state= $(this).attr('data-state');
            if(state == "still") {
                
                $(this).attr('data-state', 'notStill');
                           
               
                console.log(move);
                console.log(notMove)
                $(this).attr('src', move);
                $(this).attr('data-move', notMove)
                console.log(this);

                
            }
             else if (state =='notStill') {
                $(this).attr('data-state', 'still');
                $(this).attr('src', move);
                $(this).attr('data-move', notMove);
   
                }
            })
        })
               
        })
    });

   
