var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=home+run&api_key=KjKxTUqftXQE9SYye8ZzE5Pa9CcFZiXq&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

var buttons = []
var one = $('#one');
var two = $('#two');
var three = $('#three');
var four = $('#four');
var five = $('#five');
var six = $('#six');

$("#one").on("click", function() {
    var queryURl = "https://giphy.com/gifs/mlb-homer-brewers-thames-QejEBk46Wy9RS&tag=home+run";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        var imageUrl = response.data.image_original_url;
        var one = $("<img>");
        oneImage.attr("src", imgUrl);
        oneImage.attr("alt", "one image");
        $("#images").prepend(oneImage);
    });
});

