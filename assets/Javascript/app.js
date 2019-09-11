// this array stores the values of the GIFs we'll choose from
var myGIf = ["lions", "tigers", "bears"];
//Link Giphy CDN
    var queryURLStatic = `https://api.giphy.com/v1/stickers/search?q=dragon-ball-ball-z&limit=10&rating=pg&api_key=xKtabkdViFrxRn5oMum5q8ysKXiEX62t`;
    var queryURLAnimated = `https://api.giphy.com/v1/gifs/search?q=batman&limit=10&rating=pg&api_key=xKtabkdViFrxRn5oMum5q8ysKXiEX62t`;

$.ajax({
    url:queryURLStatic,
    method:"GET"

}).then(function(response){






});


//TODO:create  3 button that has a certain theme on it from the "myGifs" array and have it display to the front end
for (let i = 0; i < myGIf.length; i++) {
    var gifButton = $("<button>");
    gifButton.text(myGIf[i]);
    $("#gif-buttons").append(gifButton);

}


//TODO:Get the buttons to have a click event
//TODO:when the user clicks the buttons have it display 10 GIFs on to the page that are still images with their rating underneath
//TODO:when the user clicks on the the image have the GIF play
//TODO: