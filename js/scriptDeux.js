// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	title:"Ten Crack Commandments",
	artist:"Notorious BIG",
	mp3url:"https://www.youtube.com/watch?v=85YIezL8Q9A",
	imageurl:"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
}
var mySongDeux = {
	title:"Who Shot Ya?",
	artist:"Notorious BIG",
	mp3url:"https://www.youtube.com/watch?v=85YIezL8Q9A",
	imageurl:"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
}
var mysongTrois = {
	title:"best of hard bass",
	artist:"various",
	mp3url:"https://www.youtube.com/watch?v=rnPkmozi7Zc",
	imageurl:"https://i.imgflip.com/1zm4bn.jpg",
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  




$("#1").click(function(){
	x=myPlayList[0]
    displayList(mySong)

});
$("#2").click(function(){
	x=myPlayList[1]
	displayList(mySongDeux)
});
$("#3").click(function(){
	var x=myPlayList[2]
	displayList(mysongTrois);
});

});

function displayList(x){

	$(".songs").append("<p>Song Title: " + x.title + "</p>")
	$(".songs").append("<p>Artist: " + x.artist + "</p>")
	$(".songs").append("<p>Link: " + x.mp3url + "</p>")

  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
 
$("#submit").click(function() {
    var newSong = {
        title: $("#title").val(),
        artist: $("#artist").val(),
        Play_link: $("#play-link").val(),
        album_image:$("#submit").val(),
    
    };
    $(".songs").append(newSong);
});