window.onload = function() {
  console.log("working");//is this unnecessary?
}

$(document).ready(function(){
  console.log("extra working");

  $('form').submit(function(e) {
    e.preventDefault()

    var fields = {
      "firstname" : $('#first-name').val(),
      "lastname" : $('#last-name').val(),
      "emailaddress" : $('#email-address').val(),
      "contactnumber" : $('#contact-number').val(),
    }
    var newrow = $('<tr></tr>')
    newrow.html("<td>"+fields.firstname+"</td><td>"+fields.lastname+"</td><td>"+fields.emailaddress+"</td><td>"+fields.contactnumber+"</td>")
    $(".contacttable").append(newrow)
    $("form p").children('input').val(null)
  })
})
