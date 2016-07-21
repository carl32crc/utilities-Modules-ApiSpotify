(function($) {
	var msg = "prueba!!"
	console.log(msg);

	$("form").on('submit', function(event) {
			event.preventDefault();
			var artistAlbum ="artist";
			var searchValue = $("#search").val();
			var apiSearch = "https://api.spotify.com/v1/search?type=artist&query=";
			
			$( document ).trigger( "formSubmitted", [apiSearch,searchValue,artistAlbum] );
		
		});

})(jQuery)
