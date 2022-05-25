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
  if (input = "hallo") {
    output.innerHTML = "hoi";
  }
  else if (input = something) {
    feedback.innerHTML = "Het getal is lager.";
  }
  else {
    feedback.innerHTML = "Je hebt het getal geraden! Je hebt " + teller + " keer moeten raden.";
  }
}
