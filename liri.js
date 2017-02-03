
var keys = require("./keys.js").twitterKeys;
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');


var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
});

var action = process.argv[2];
var argPass = process.argv[3];

if (action === "my-tweets"){
	var params = {screen_name: 'CNN'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for (i = 0; i < 20; i++){
	  		console.log(tweets[i].text);
	  	}
	  }
	});
} else if (action === "spotify-this-song"){
	spotify.search({ type: 'track', query: argPass }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 		
	    console.log(data.tracks.items[1].album.artists[0].name)
	    console.log(data.tracks.items[1].name)
	    console.log(data.tracks.items[1].preview_url)
	    console.log(data.tracks.items[1].album.name)



	});
} else if (action === "do-what-it-says"){


} else if (action === "movie-this"){
	var request = require('request');
	request(' http://www.omdbapi.com/?t='+argPass, function (error, response, data) {
	if (!error && response.statusCode == 200) {
	    console.log(data.title) 
	 }
})

} else {
	console.log("pick an action")
}


