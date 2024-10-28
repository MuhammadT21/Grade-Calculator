// Button Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let CSS1 = +document.getElementById("1").value;
  let SP1 = +document.getElementById("2").value;
  let SP2 = +document.getElementById("3").value;
  let CS2 = +document.getElementById("4").value;
  let PA = +document.getElementById("5").value;

  let brightness = (CSS1 + SP1 + SP2 + CS2 + PA) / 5;

  document.getElementById("output").innerHTML = brightness;
}
