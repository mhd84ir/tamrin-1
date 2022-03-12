function factorial(y) {
  if (y < 0) return false;
  if (y == 0) return 1;
  var output = 1;
  for (i = 1; i <= y; i++) {
    output *= i;
  }
  return output;
}
function mohasebe() {
  var y = parseInt(document.getElementById("input").value) - 2;
  var result = factorial(y);
  if (!result) {
    alert("کم دادی داداش");
  } else {
    document.getElementById("output").value = result;
  }
}
