var txt;

// Gibt Datum, Nutzerkennung und Verbrauchswert als String unter dem Display Button aus
function completeActivity1() {
    var x = document.forms[0];
    var nutz = x.elements[0].value;
    var date = new Date().toISOString().slice(0, 10);
   txt = "</br>" + date + ": " + "User: " + nutz;
    document.getElementById("output").innerHTML += txt;
}


function completeActivity() {
  // Get the checkbox
  var checkBox = document.getElementById("activity1");

   // Get the output text
  txt = "</br>" + date + ": " + "Maria Mariano" + "completed" + "activity1" ;

  var text = document.getElementById("text") + txt;

  // current date 
  var date = new Date().toISOString().slice(0, 10);


  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}