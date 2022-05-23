// Input function for terminal.
var terminput = document.getElementById("terminput");
var termoutput = document.getElementById("termoutput");

function terminal(ele) {
    if(event.key === 'Enter') {
        alert(ele.value);
        if (terminput = "hallo") {
          termoutput.innerHTML = "Het getal is hoger.";
        }
        else if (terminput = something) {
          feedback.innerHTML = "Het getal is lager.";
        }
        else {
          feedback.innerHTML = "Je hebt het getal geraden! Je hebt " + teller + " keer moeten raden.";
        }
    }
}

terminal()
