//BE
var palindromey = function(input) {
  if (input === "") {
    return true;
  }
};





//UI
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val()


    console.log(input);
    var result = palindromey(input);

     $("#result").text(result);



  });
 });
