$(document).ready(function() {
  $("#add-task").click(function() {
    $(".todo-list").append("<li>"+$("input").val()+"</li>");
    $("input").val("");
  });
});
