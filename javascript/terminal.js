// Input function for terminal.
var input = document.getElementById("terminput");
var output = document.getElementById("termoutput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("termbutton").click();
  }
});

function terminal() {
  if (input = "hoi") {
    output.innerHTML = "Kapot";
  }
  else if (input = "werk") {
    output.innerHTML = "HET WERKT";
  }
  else {
    output.innerHTML = "ja typ iets in man";
  }
}
