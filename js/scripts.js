var leapYear = function(year) {
  return ((year % 4===0) && (year % 100 !==0) || (year % 400 === 0)) || (year <= 0);
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {              // same as writing if (result === false)
      $(".not").text("not");
    }
    else {
      $(".not").text("");
    }

    if (isNaN(year)) {
            alert("False");
    }
    if (year <= 0) {
      alert("Negative Number");
    }
    $("#result").show();
    event.preventDefault();
  });
    });
