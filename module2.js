(function($) {
	var msg = "prueba 3!!";
	console.log(msg);

	$("#albums").on('change', function(event) {
			var idAlbum = $("#albums").val();
			var artistAlbum ="tracks";
			var searchValue = undefined;
			var apiSearch = "https://api.spotify.com/v1/albums/"+idAlbum+"/tracks";
			console.log(apiSearch);

			$( document ).trigger( "formSubmitted", [apiSearch,searchValue,artistAlbum] );
		});

})(jQuery)