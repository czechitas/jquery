$(document).ready(function() {
  $("#add-task").click(function() {
    $(".todo-list").append("<li>"+$("input").val()+"</li>");
    $("input").val("");
  });

  // Kliknuti na polozku seznamu ji smaze
  $(".todo-list li").click(function() {
    $(this).remove()
  })
});
