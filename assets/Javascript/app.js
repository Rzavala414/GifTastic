// this array stores the values of the GIFs we'll choose from
var myGIf = ["batman", "mike-tyson", "dragon-ball-Z"];
//Linked Giphy CDN
function getGifs(topic) {
    //Grabs 10 stickers of a GIF with Pg
    var queryURLStatic = `https://api.giphy.com/v1/stickers/search?q=${topic}&limit=10&rating=pg&api_key=xKtabkdViFrxRn5oMum5q8ysKXiEX62t`;    
    //Grabs 10 stickers of a GIF with Pg
    var queryURLAnimated = `https://api.giphy.com/v1/gifs/search?q=${topic}&limit=10&rating=pg&api_key=xKtabkdViFrxRn5oMum5q8ysKXiEX62t`;
    $.ajax({
        url: queryURLStatic,
        method: "GET"

    }).then(function (response) {
        
        //loop through all the images
            for (let i = 0; i < response.data.length; i++) {
                //gives access to url data
                var url = response.data[i].images["480w_still"].url
                //gives access to rating 
                var rating = response.data[i].rating
                //adds rating to page
                $("#gifs-to-screen").prepend("Rating:" + rating);
                //adds giphy sticker to screen
                var gifImage = (`<img src="${url}">`)
                //adds GIFs on to main screen
                $("#gifs-to-screen").prepend(gifImage);

             
            }

    });

}

//Creates three buttons with my three themes and displays them to the page
function renderButtons() {
    for (let i = 0; i < myGIf.length; i++) {
        //creates a new button tag for item in "myGIF" array
        var gifButton = $("<button>");
        //adding a class to array buttons
        gifButton.addClass("gif-btn");
        //adding a data-attribute
        gifButton.data("data-name",myGIf[i]);
        //providing the initial button text
        gifButton.text(myGIf[i]);
        //adding the button to the gif-buttons div
        $("#gif-buttons").append(gifButton);
    }
    
}

$(document).on("click","button",function(){
    var name = $(this).data("data-name")
    getGifs(name);

});


renderButtons();


//TODO:when the user clicks the buttons have it display 10 GIFs on to the page that are still images with their rating underneath
//TODO:when the user clicks on the the image have the GIF play
//TODO: