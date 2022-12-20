
function btn(){

    let check = document.getElementById("checkid").value;
        let check1 = check;
    if (check == 2020){
        document.getElementById("print").innerHTML = "Your are eligible" ;
        document.body.style.backgroundColor ="green";
    } else {
        document.getElementById("print").innerHTML ="Sorry You are not eligible" ;
        document.body.style.backgroundColor ="red";
    }

  
}

var input = document.getElementById("checkid");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});