$(document).ready(function() {
    var topicAr = ["Adventure Time", "Steven Universe", "Venture Bros", "Over the Garden Wall", "King of the Hill", "X Men", "Gumball", "Chowder", "Flapjack", "FLCL"];
 // var dataAr = ["Adventure+Time", "Steven+Universe", "Venture+Bros", "Over+the+Garden+Wall", "King+of+the+Hill", "X+Men", "Gumball", "Chowder", "Flapjack", "FLCL"]
   
    // console.log(parse(JSON.parse(localStorage.favGifs)))
     
  var funcAr= function() {
    $('#searchTerm').trigger('reset');
    $("#buttons").empty();
    for (i=0; i< topicAr.length; i++) {
       
      $("#buttons").append("<button class='buttonz' data-person='" +  topicAr[i] +"'>" +topicAr[i]+ "</button>");
     

  
}
 

      $(".buttonz").on("click", function(){
        console.log($(this));
        var toon = $(this).attr("data-person");
        console.log(toon);
        var apiKey = "&api_key=FNylGLwnk8dtDcWGsdnGC8UU6R7M9Il3&limit=10";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        toon + apiKey;
        console.log(queryURL);
       $("#gifsAttack").empty();
       

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response){
           results=response.data;
           console.log(results);
           for (i = 0; i < results.length; i++) 
           {
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
            }); //it me on click closer
           
        }); //then closer
               
        }) //buttonz on click closer
    };
     funcAr();
     
     $("#button").on('click', function(){
      
    
 
        searchTerm = $('#searchTerm').val();
      $('#searchTerm').val('');
        topicAr.push(searchTerm);
      
        funcAr();
       
    
     }
    );
    }
);

   
