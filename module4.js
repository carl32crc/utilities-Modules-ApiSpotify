(function($, myFunctions) {
	var msg = "module 2!!";
	console.log(msg);

	$( document ).on( "formSubmitted", function(event,apiSearch,searchValue,artistAlbum) {
		
	  var oJson="";
		$.ajax({
			  url: myFunctions.getUrlApi(searchValue,apiSearch),
			}).done(function( searchResultsData ) {				
				oJson=myFunctions.getJson(searchResultsData,artistAlbum);					
				var options =  myFunctions.getItemsJson(oJson,artistAlbum);
				myFunctions.putDataInHtml(options,artistAlbum);												
		})
	});
		/* Act on the event */
})(jQuery, myFunctions)