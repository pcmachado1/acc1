$.ajaxSetup({ cache: false });
$(function() {
	get_albums();

	$(document).on('click', '.js-open-album', function(event) {
		event.preventDefault();
		open_album($(this).data('album-id'));
	})
});

function open_album(album_id) {
	$('#bx-conteudo-galeria').html('');
	$.getJSON(SITE_URL + LANG + '/pre_fabricadas/get_album/' + album_id, function(data, textStatus) {
		var images_wrapper = $('<div>').addClass('slider slider-for');
		var thumbs_wrapper = $('<div>').addClass('slider slider-nav');
		$.each(data.album.FOTOS, function(index, photo) {
			$('<div>')
				.addClass('items row')
				.append(
					$('<figure>')
						.append(
							$('<img>').attr({'src': SITE_URL + 'graph/prefabricadas_fotos/572/400/'+ photo.ID + '/' + photo.IMAGEM, 'alt' : photo.LEGENDA})
						)
				)
				.appendTo(images_wrapper)
			;

			$('<a>')
				.append(
					$('<img>').attr({'src': SITE_URL + 'graph/prefabricadas_fotos/110/83/'+ photo.ID + '/' + photo.IMAGEM, 'alt' : photo.LEGENDA})
				)
				.appendTo(thumbs_wrapper)
			;
		});

		$('#bx-conteudo-galeria').append(
			$('<div>')
				.addClass('row')
				.append(
					$('<div>')
						.addClass('rolers')
						.append(
							$('<div>')
								.addClass('icon-casa')
								.append(
									$('<img>').attr('src', ROOT + 'assets/img/site/common/img/logo-casa.png')
								),
							$('<p>')
								.text(data.album.TITULO),
							$('<span>')
								.text(data.album.SUBTITULO)
						),
					$('<button>')
						.addClass('bt-fechar')
						.text('X')
				),
			$('<div>')
				.addClass('row')
				.append(
					$('<div>')
						.addClass('imagem-rols')
						.append(
							images_wrapper
						)

				),
			$('<div id="thumbs">')
				.addClass('center row')
				.append(
					$('<div>')
						.addClass('mieo')
						.append(
							$('<div>')
								.addClass('center-lightbox')
								.append(thumbs_wrapper)
						)
				)
		);

		$('.overlay').addClass('show');
        $('.rol-lightbox').addClass('show');
        galeria();
        window.scrollTo(0, 0);
	});
}

function get_albums() {
	var wrapper = $('#photos-wrapper');
	var page = wrapper.data('page');
	var button_more = $('#carregar-mais');
	if (page) {
		$.ajax({
			url: SITE_URL + LANG + '/pre_fabricadas/get_albums',
			type: 'post',
			dataType: 'json',
			data: {page: page},
		})
		.done(function(data) {
			if (data.albums) {
				$.each(data.albums, function(index, album) {
					var cover = album.FOTOS.shift();
			 		wrapper.append(
		 				$('<a class="js-open-album">')
		 					.attr('href', '#')
		 					.data('album-id', album.ID)
		 					.addClass('col-galeria relative')
		 					.append( $('<div>').addClass('inner')
			 					.append(
			 						$('<div>')
			 							.addClass('row col-box')
			 							.append(
			 								$('<div>')
			 									.addClass('list-title-container')
			 									.append(
			 										$('<div>')
			 											.addClass('list-title-icon-container')
			 											.append(
			 												$('<div>').addClass('table')
			 													.append(
				 													$('<div>')
				 													.addClass('table-cell')
				 													.append(
				 														$('<div>')
				 														.addClass('list-title-icon-casa')
		 															)
		 														)
		 												),
	 												$('<div>')
	 													.addClass('list-title-description')
		 												.append(
															$('<p>').text(album.TITULO),
															$('<span>').text(album.SUBTITULO)
														)
		 										)
		 								),
									$('<figure>')
										.append(
											$('<img>').attr({'src': SITE_URL + 'graph/prefabricadas_fotos/341/280/'+ cover.ID + '/' + cover.IMAGEM, 'alt' : album.TITULO})
										)
		 						)
				 			)
	 				);
				});
			}	

			if (data.next_page) {
				wrapper.data('page', data.next_page);
			} else {
				wrapper.data('page', null);
				button_more.remove();
			}
		});
		
	}
	
}