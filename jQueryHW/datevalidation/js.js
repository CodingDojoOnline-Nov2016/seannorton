$(document).ready(function() {
  console.log("It's working. I hope.")

  $(function() {
    $("#datepicker").datepicker();
  })

  $(function() {
    $("#datepicker2").datepicker();
  })

  $('form').submit(function(e) {
    e.preventDefault()
    var fields = {
      "firstdate" : $('#datepicker').val(),
      "seconddate" : $('#datepicker2').val(),
      "name" : $('#name').val()
    }

    if ($('#name').val() === null) {
      ('.content:last-child input').append("<p>Please insert your name!</p>")
    }
    else {
      alert("Thanks "+name+"!\nYour Cruise will be booked from "+firstdate+" till "+seconddate+".\nThank you!")
    }
  })
})
