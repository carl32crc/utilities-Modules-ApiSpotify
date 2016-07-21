(function($) {
	var msg = "prueba 2!!";
	console.log($);

	$("#artists").on('change', function(event) {
			var idArtist = $("#artists").val();
			var artistAlbum ="albums";
			var searchValue = undefined;
			var apiSearch = "https://api.spotify.com/v1/artists/"+idArtist+"/albums";

			$( document ).trigger( "formSubmitted", [apiSearch,searchValue,artistAlbum] );
		});

})(jQuery)