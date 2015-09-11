$(document).ready(function() {
  $("#add-task").click(function() {
    $(".todo-list").append("<li>"+$("input").val()+" <button>Smazat</button></li>")
    $("input").val("");
    // Vybereme tlacitko v naposledy pridane polozce
    $(".todo-list li:last-child button").click(function() {
      // Polozka se nejprve skryje a pak odebere
      $(this).closest("li").fadeOut(function() {
        $(this).remove();
      });
    });
  });

  $(".hilight-task").click(function() {
    $(".todo-list li:last-child").toggleClass("hilight");
  })
});
