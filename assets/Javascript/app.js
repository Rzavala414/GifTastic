// this array stores the values of the GIFs we'll choose from
var myGIf = ["batman", "mike-tyson", "dragon-ball-Z"];
//Link Giphy CDN
function getGifs(topic) {
    var queryURLStatic = `https://api.giphy.com/v1/stickers/search?q=${topic}&limit=10&rating=pg-13&api_key=xKtabkdViFrxRn5oMum5q8ysKXiEX62t`;
    var queryURLAnimated = `https://api.giphy.com/v1/gifs/search?q=${topic}&limit=10&rating=pg-13&api_key=xKtabkdViFrxRn5oMum5q8ysKXiEX62t`;
    $.ajax({
        url: queryURLStatic,
        method: "GET"

    }).then(function (response) {
        console.log(response);
        //loop through all the images
            for (let i = 0; i < response.data.length; i++) {
                //create a new image html element
                var url = response.data[i].images["480w_still"].url
                //add img url
                var gifImage = (`<img src="${url}">`)
                //adds GIFs on to main screen
                $("#gifs-to-screen").prepend(gifImage);
            } 
        

    });

}

//Creates three buttons with my three themes and displays them to the page
function renderButtons() {
    for (let i = 0; i < myGIf.length; i++) {
        var gifButton = $("<button>");
        gifButton.text(myGIf[i]);
        gifButton.data("name",myGIf[i]);
        $("#gif-buttons").append(gifButton);
    }
    
}

$(document).on("click","button",function(){
    var name = $(this).data("name")
    console.log(name);
    getGifs(name);

});


renderButtons()


//TODO:when the user clicks the buttons have it display 10 GIFs on to the page that are still images with their rating underneath
//TODO:when the user clicks on the the image have the GIF play
//TODO: