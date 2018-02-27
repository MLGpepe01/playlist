$(document).ready(function() {

	console.log(myPlayList);

	displaySongs(myPlayList)



	//READ All
	function displaySongs(songs){
		clearAllSongs()
		for(var i = 0; i < songs.length; i++){	
			$(".result-text").append(
			'<div id="' + i + '">\
				<div class="col-md-8" id="info">\
					<h3 id="title">' + songs[i]["title"] + '</h3>\
					<a href=' + songs[i]["mp3-url"] + '> Listen </a>\
				</div>\
				<div class="col-md-4" >\
					<img src=' + songs[i]["image-url"] + '>\
					<span class="glyphicon glyphicon-remove delete" id="' + i + '"></span>\
					<span class="glyphicon glyphicon-edit update" id="' + i + '"></span>\
				</div>\
				<div class="col-md-12"><hr></div>\
			</div>'
			);
	   	}
	}

	//CREATE
	function createSong(){
		var newSong = {
			"title": $('#titleInput').val(),
			"artist": $('#artistInput').val(),
			"length": $('#lengthInput').val(),
			"releaseDate": $('#releaseDateInput').val(),
			"mp3Url": $('#mp3UrlInput').val(),
			"imageUrl": $('#imageUrlInput').val(),
			"genres":[
				$('#titleInput').val()
			]
		}
		myPlayList.push(newSong);
	}

	$("#createSong").click(function(){

		createSong();
		displaySongs(myPlayList)

	});


	//UPDATE


	// $('body').on('click', '.update', function() {
 //    	var id = $(this).attr('id');
 //    	console.log(id);
 //    	updateSong(id);
	// });

	//DELETE
	function deleteSong(id){
		myPlayList.splice(id, 1);
		displaySongs(myPlayList)
	}

	$('body').on('click', '.delete', function() {
    	var id = $(this).attr('id');
    	console.log(id);
    	deleteSong(id);
	});

	//DESTROY
	function clearAllSongs(){
		$('.result-text').empty();
	}



});