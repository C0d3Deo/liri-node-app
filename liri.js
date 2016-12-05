
var argumens = process.argv
var command = process.argv[2];
var variable = process.argv[3];

if (command === "my-tweets"){
	twitter();
}
else if(command === "spotify-this-song"){
	spotify();
}
else if(command === "movie-this"){
	imdb();
}
else if(command === "do-what-it-says"){
	something();
}


function twitter() {
	var keys = require("./keys.js");
    var Twitter = require('twitter');

    var client = new Twitter(keys.twitterKeys);


    var params = { screen_name: 'D_Rex65' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++)
                console.log(
                	tweets[i].text +"\n" + 
                	tweets[i].created_at + "\n" + 
            		"=============================================" + "\n"
        		);
        }
    });

}

function spotify() {
    console.log("running spotify . . .");
    var spotify = require('spotify');
    for (var i = 4; i < argumens.length; i++) {
        variable += "+" + argumens[i];
        // console.log(variable);
        // debugger;
    }


    if (variable === undefined) {
        variable = "the+sign+artist:ace+of+base&limit=1";
    }
    spotify.search({ type: 'track', query: variable }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }

        // Do something with 'data' 
        if (parseInt(data.tracks.total) == 0){
        	console.log("Sorry, no results");
        }else {
        	// console.log(JSON.stringify(data.tracks, undefined, 2));
	        console.log("Artist: " + data.tracks.items[0].artists[0].name);
	        console.log("Song: " + data.tracks.items[0].name);
	        console.log("Link (Copy this to preview): " + data.tracks.items[0].preview_url);
	        console.log("Album: " + data.tracks.items[0].album.name);
    	}
    });
}

function imdb() {
    console.log("running imdb . . .");
    var request = require("request");

    for (var i = 4; i < argumens.length; i++) {
        variable += "+" + argumens[i];
        // console.log(variable);
        // debugger;
    }

    if (variable === undefined) {
        variable = "mr+nobody";
    }
    // console.log("current variable is: " + variable);
    var query = variable;
    query += "&y=&plot=short&r=json&tomatoes=true";
    // console.log("current query is: " + query);

    request("http://www.omdbapi.com/?t=" + query, function(error, response, body) {
            if (!error && response.statusCode === 200 && JSON.parse(response.body).response !== "false") {
            	// console.log(JSON.parse(body));
                // console.log(JSON.stringify(response, undefined, 2));
                // debugger;
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                console.log("Country Origin: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
                console.log("Rotten Tomatoes Score: " + JSON.parse(body).tomatoRating);
                console.log("Rotten Tomatoes Link: " + JSON.parse(body).tomatoURL);
            } else {
            	console.log("Sorry, no results");
            }
        });
};

function something() {
    var fs = require("fs");


    fs.readFile("random.txt", "utf8", function(err, data) {

        // Break the string down by comma separation and store the contents into the output array.
        var output = data.split(",").join(" ");


    });
    console.log(output);

};



// var otherthing = {
//   Title: 'Mr. Nobody',
//   Year: '2009',
//   Rated: 'R',
//   Released: '26 Sep 2013',
//   Runtime: '141 min',
//   Genre: 'Drama, Fantasy, Romance',
//   Director: 'Jaco Van Dormael',
//   Writer: 'Jaco Van Dormael',
//   Actors: 'Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham',
//   Plot: 'A boy stands on a station platform as a train is about to leave. Should
//  he go with his mother or stay with his father? Infinite possibilities arise fro
// m this decision. As long as he doesn\'t choose, anything is possible.',
//   Language: 'English, Mohawk',
//   Country: 'Belgium, Germany, Canada, France',
//   Awards: '11 wins & 4 nominations.',
//   Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5B
// Ml5BanBnXkFtZTgwNTEwMTkxMDE@._V1_SX300.jpg',
//   Metascore: '63',
//   imdbRating: '7.9',
//   imdbVotes: '155,215',
//   imdbID: 'tt0485947',
//   Type: 'movie',
//   tomatoMeter: '64',
//   tomatoImage: 'fresh',
//   tomatoRating: '6.6',
//   tomatoReviews: '28',
//   tomatoFresh: '18',
//   tomatoRotten: '10',
//   tomatoConsensus: 'Mr. Nobody\'s narrative tangles may bedevil as much as they
// entertain, but its big ambitions and absorbing visuals make for an intriguing ad
// dition to director Jaco Van Dormael\'s filmography.',
//   tomatoUserMeter: '76',
//   tomatoUserRating: '3.8',
//   tomatoUserReviews: '24751',
//   tomatoURL: 'http://www.rottentomatoes.com/m/mr-nobody/',
//   DVD: '25 Feb 2014',
//   BoxOffice: '$3,600.00',
//   Production: 'Magnolia Pictures',
//   Website: 'http://www.magpictures.com/mrnobody/',
//   Response: 'True' }

var thing = {
    "tracks": {
        "href": "https://api.spotify.com/v1/search?query=the+sign+artist%3Aace+of+base&offset=0&limit=1&type=track",
        "items": [{
            "album": {
                "album_type": "album",
                "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/5ksRONqssB7BR161NTtJAm" }, "href": "https://api.spotify.com/v1/artists/5ksRONqssB7BR161NTtJAm", "id": "5ksRONqssB7BR161NTtJAm", "name": "Ace of Base", "type": "artist", "uri": "spotify:artist:5ksRONqssB7BR161NTtJAm" }],
                "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"],
                "external_urls": { "spotify": "https://open.spotify.com/album/5UwIyIyFzkM7wKeGtRJPgB" },
                "href": "https://api.spotify.com/v1/albums/5UwIyIyFzkM7wKeGtRJPgB",
                "id": "5UwIyIyFzkM7wKeGtRJPgB",
                "images": [{
                    "height": 600,
                    "url": "https://i.scdn.co/image/420f7961d01701f6d4fe8fcd6c99fde0d13e7da7",
                    "width": 600
                },
                 { "height": 300, "url": "https://i.scdn.co/image/14a8250ab9767f68eb58a7bcc1b2864dada763bf", "width": 300 },
                  { "height": 64, "url": "https://i.scdn.co/image/81d371b69683de3224b978eff7d57d2e9ddc9994", "width": 64 }],
                "name": "The Sign (US Album) [Remastered]",
                "type": "album",
                "uri": "spotify:album:5UwIyIyFzkM7wKeGtRJPgB"
            },
            "artists": [{
                "external_urls": { "spotify": "https://open.spotify.com/artist/5ksRONqssB7BR161NTtJAm" },
                "href": "https://api.spotify.com/v1/artists/5ksRONqssB7BR161NTtJAm",
                "id": "5ksRONqssB7BR161NTtJAm",
                "name": "Ace of Base",
                "type": "artist",
                "uri": "spotify:artist:5ksRONqssB7BR161NTtJAm"
            }],
            "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"],
            "disc_number": 1,
            "duration_ms": 191240,
            "explicit": false,
            "external_ids": { "isrc": "SEVJH0803404" },
            "external_urls": { "spotify": "https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE" },
            "href": "https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE",
            "id": "0hrBpAOgrt8RXigk83LLNE",
            "name": "The Sign",
            "popularity": 63,
            "preview_url": "https://p.scdn.co/mp3-preview/177e65fc2b8babeaf9266c0ad2a1cb1e18730ae4",
            "track_number": 4,
            "type": "track",
            "uri": "spotify:track:0hrBpAOgrt8RXigk83LLNE"
        }],
        "limit": 1,
        "next": "https://api.spotify.com/v1/search?query=the+sign+artist%3Aace+of+base&offset=1&limit=1&type=track",
        "offset": 0,
        "previous": null,
        "total": 27
    }
}
