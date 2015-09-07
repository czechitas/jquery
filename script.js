/*Pridani polozky - tady to porad mizi a nevim proc*/
$(document).ready(function() {
	$("button").click(function() {
	$("ul").append("<li>"+$("input").val()+"</li>"); /*v materialech je ol misto ul, pak to nefunguje vubec*/
	$("input").val("");
	});
});

/*Mazani kliknutim - toto ne*/
$(".task").click(function() {
  $(this).slideUp();
});

/*Mazani tlacitkem - funguje, kdyz udelam ke kazde polozce vlastni class v html*/
$(document).ready(function(){
    $("button").click(function(){
        $("li").remove(".task");
    });
});


/*Zvyrazneni-funguje*/
$(document).ready(function(){
 	$("li").click(function(event) {
  	$(event.target).closest("li").toggleClass( "hilight" );
	});
});

/*Animace - funguje, posune se o sekci dolů*/
$(document).ready(function(){
  $("a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    	$('html, body').animate({
      	scrollTop: $(hash).offset().top
    	}, 800, function(){
   
      window.location.hash = hash;
    });
  });
});


/*Edit*/

