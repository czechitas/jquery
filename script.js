/*Pridani polozky*/
$(document).ready(function() {
	
	$("button").click(function() {
		$("ol").append("<li>"+$("input").val()+"</li>");
		
		$("input").val("");
	});
});
/*Mazani*/
$(".task3").click(function() {
  $(this).slideUp();
});

/*Mazani tlacitkem*/
$(document).ready(function(){
    $("button").click(function(){
        $("li").remove(".task3");
    });
});

/*Zvyrazneni*/
$(document).ready(function(){
    $("li").mouseenter(function(){
        $("li").css("text-color", "green");
    });
    $("li").mouseleave(function(){
        $("li").css("text-color", "pink");
    });
});

/*Animace*/

/*Edit*/

