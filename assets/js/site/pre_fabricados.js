function openItemSC(img, date, title, text){
   	offset = 550
   	
    $("body:not(:animated)").animate({ scrollTop: offset }, 300, function(){
        $('.js-sc-accordion').slideUp( "slow", function() {
			$(this).find('img').attr('src', img);
            $(this).find('span:first').html(date);
            $(this).find('h1').html(title);
            $(this).find('p').html(text);
            
            if(img == ''){ $(this).find('img').hide(); }
            else{ $(this).find('img').show(); }

            $(this).slideDown();
        });
        return false;
    });
}