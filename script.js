$(document).ready(function(){

	var $carousel = $('#carousel'); // on cible le bloc du carrousel
    var $img = $('#carousel img'); // on cible les images contenues dans le carrousel
    var indexImg = $img.length - 1; // on définit l'index du dernier élément
    var i = 0; // on initialise un compteur
    var $currentImg = $img.eq(i); // on cible l'image courante, qui possède l'index i (0 pour l'instant)
		
		$img.css('display', 'none'); // on cache les images
		$currentImg.css('display', 'block'); // on affiche seulement l'image courante

$('.next').click(function(){ //image suivante

	i++; //on incrémente le compteur

	if( i <= indexImg){
		$img.css('display', 'none'); // on cache les images
		$currentImg = $img.eq(i); // on définit la nouvelle image
		$currentImg.css('display', 'block'); // on l'affiche

	}else{
		i = indexImg;
	}

});

$('.prev').click(function(){
	i--; //on décrémente le compteur

	if( i >= 0){
		$img.css('display', 'none'); // on cache les images
		$currentImg = $img.eq(i); // on définit la nouvelle image
		$currentImg.css('display', 'block'); // on l'affiche

	}else{
		i = 0;
	}


});

function slideImg(){
	setTimeout(function(){

		if(i < indexImg){ //si le compteur est inferieur au dernier index
			i++; //on l'incrémente
		}else{ // sinon on le remet à 0 (premiere image)
			i = 0;
		}


		$img.css('display', 'none'); // on cache les images
		$currentImg = $img.eq(i); // on définit la nouvelle image
		$currentImg.css('display', 'block'); // on l'affiche

		slideImg(); // on relance la fonction à la fin

	}, 3000);
};

slideImg(); // on lance la fonction une première fois

});