function calc(){
   
    let c = document.getElementById('result').value;
    document.getElementById('result').value=eval(c);
}
function change(){
  let cont = document.getElementById("A");
  cont.classList.toggle("darkcontainer");

  let bo = document.body;
  bo.classList.toggle("darkbody");

 let fas =  document.getElementById("fas");
 fas.classList.toggle("darkfa-solid");
 if(fas.innerHTML =="Darkmode")
 {
  fas.innerHTML = "Lightmode";
 }
 else if(fas.innerHTML =="Lightmode"){
  fas.innerHTML="Darkmode";

 }
 if(fas.title=="switch to dark mode"){
  fas.title="switch to light mode";
 }
 else if(fas.title=="switch to light mode"){
  fas.title="switch to dark mode";
 }
  

  let fab = document.getElementById("fab");
  fab.classList.toggle("darkfa-brands");

  let h3 = document.getElementById("h3");
  h3.classList.toggle("darkh3");

  let result = document.getElementById("result")
  result.classList.toggle("darktext");

  let buttons = document.querySelectorAll(".button");
  buttons.forEach(a => {                         //a is a variable here for the foreach loop
  button.classList.toggle("darkbuttons");
});
  }
 
