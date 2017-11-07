//BE
var palindromey = function(input2) {
  if (inp) {
    return true;
  } else {
    return false;
  }
};





//UI
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();

    function reverseString(input) {
    return input.split("").reverse().join("");
    };
    console.log(reverseString);
    // var input2 = [input];
    // console.log(input2);

    // input.splice();
    // console.log(input2);
    // var reverse = input.slice();

    var result = palindromey(input);

     $("#result").text(result);



  });
 });
