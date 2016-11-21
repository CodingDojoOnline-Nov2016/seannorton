$(document).ready(function() {
  console.log("Ready");

  $('form').submit(function(e) {
    e.preventDefault()//stops this from going to another page, yea?

    var fields = {
      "firstname" : $('#first-name').val(),
      "lastname" : $('#last-name').val(),
      "extrainfo" : $('#extra-info').val()
    }

    var newcard = $('<div class="classcard"></div>')
    newcard.html("<h1>"+fields.firstname+" "+fields.lastname+"</h1><p>"+fields.extrainfo+"</p>")
    $(".rightcontent").append(newcard)
    $("form p").children('input').val(null)
    $('form .biginputbox').val(null)
  })

  $('rightcontent').on('click', 'h1', function() {
    $(this).siblings().toggle("slow");
  })
})
