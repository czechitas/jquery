$(document).ready(function() {
  $("#add-task").click(function() {
    $(".todo-list").append("<li>"+$("input").val()+"</li>")
    $("input").val("");
    // Vybereme naposledy pridanou polozku
    $(".todo-list li:last-child").click(function() {
      $(this).remove()
      $("input").val($(this).text());
    });
  });

  // Kliknuti na polozku seznamu ji smaze
  $(".todo-list li").click(function() {
    $(this).remove()
  })
});
