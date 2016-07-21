(function( win ) {

	win.myFunctions= win.myFunctions || {};

	//Funcion para comprobar si el valor "SEARCHVALUE" esta definido o no dependiendo de si lo esta o no le assignara una URL u OTRA

	function getUrlApi ( searchValue, apiSearch) {
		if(typeof(searchValue) === "undefined"){
		    return apiSearch;
		 }
		return apiSearch+searchValue;
	}

	
	//Funcion para obtener el JSON dependiendo de si son ALBUMS,ARTISTAS o CANCIONES

	function getJson (searchResultsData,artistAlbum) {
	
		if(artistAlbum==="albums" || artistAlbum==="tracks"){
			return searchResultsData.items;		
		}
		return  searchResultsData.artists.items;				
	}


	//Funcion para obtener los ITEMS del objeto JSON anterior y concatenarlo para retornar el valor

    function getItemsJson (oJson,artistAlbum) {

		var options = "";
	
		if(artistAlbum!=="tracks"){
		   options += '<option value="0"> Selecciona un artista </option>';
		}

		$.each ( oJson, function ( index, oJsonItems) {

			if(artistAlbum!=="tracks"){
				options += '<option value="' + oJsonItems.id + '">' + oJsonItems.name + ' </option>';
			}else{
				options += '<li><a href="'+oJsonItems.preview_url+'">' + oJsonItems.name + '</a></li>';
			}				
		})
		return options;
	}


	function putDataInHtml (options,artistAlbum) {
	
		if(artistAlbum==="artist"){
		   return $("#artists").html(options);
		}else if(artistAlbum==="tracks"){
		   return $("#tracks").html(options);
		}else{
		   return $("#albums").html(options);
		}			
	}

	win.myFunctions.getUrlApi = getUrlApi;
	win.myFunctions.putDataInHtml = putDataInHtml;
	win.myFunctions.getJson = getJson;
	win.myFunctions.getItemsJson = getItemsJson;


})( window )