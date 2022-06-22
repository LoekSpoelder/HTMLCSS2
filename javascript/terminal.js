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
  if (input.value === "help") {
    output.innerHTML = "Current available commands:<br>&nbsp;<br>'help' - List of commands.<br>'about' - About the maker.<br>'contact' - How to contact the maker.";
  }
  else if (input.value === "about") {
    output.innerHTML = "My name is Loek, I make stuff.<br>&nbsp;<br>In all seriousness, I am a multilingual programmer who's currently busy learning the programming so I can actually become the programmer I said I was in the begining of the sentence. Here's a picture of me:<br>&nbsp;<br>((((((((((((/////////////*****<br>((((((((((((((((//////////////<br>#####(#(####(#####(#((((((((((<br>%%%%%#%&%#%/###(/**,*/#(######<br>&&&&%%##*/(%#(/,,,....,/%#####<br>#####%/*/#%%%#(/*,......,((,,,<br>/////(**#%#(((/******,...,,,,,<br>///,,,*,/,/,,/%(,.&nbsp;..,&nbsp;&nbsp;******<br>##(####&@&&&&&@#///**//,,,,,,.<br>**///*/&&&%#&#/***(((//.,,,,,*<br>*////..%#(#&&(,,,,/*,******,,.<br>%%%%%&&%((/###,.,,,.,,,,,,,,,,<br>,,*****&//(#/*,,,,**,********,<br>///////, #*///**,,,,* //////**<br>%#%@((,..##(*,,..,,,.&nbsp;&nbsp;.**,&nbsp;&nbsp;&nbsp;<br>,,.,,,..&nbsp;.&&%(/***,.&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;...";
  }
  else if (input.value === "contact") {
    output.innerHTML = "You can contact me at loek.spoelder@coderclass.nl";
  }
  else {
    output.innerHTML = "'" + input.value + "' is not recognized as an internal or external command,<br> operable program or batch file.<br>Try 'help' to get started." ;
  }
  input.value = ""
}
