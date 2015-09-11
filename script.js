$(document).ready(function() {
  $("#add-task").click(function() {
    $(".todo-list").append("<li>"+$("input").val()+" <button>Smazat</button></li>")
    $("input").val("");
    // Vybereme tlacitko v naposledy pridane polozce
    $(".todo-list li:last-child button").click(function() {
      $(this).closest("li").remove()
    });
    // Animace polozky pri kliku
    $(".todo-list li:last-child").click(function() {
      $(this).animate({marginLeft: "10px"}).animate({marginLeft: "-10px"}).animate({marginLeft: 0})
    });
  });

  $(".hilight-task").click(function() {
    $(".todo-list li:last-child").toggleClass("hilight");
  })
});
