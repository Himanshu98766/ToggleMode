var inner = document.getElementById("roller");
var body = document.getElementById("main-body");
var text = document.getElementsByClassName("heading");


function clickAgain1() {
       inner.addEventListener('click', function () {
              inner.style.marginLeft = "30px";
              // inner.style.float = "right";
              body.style.backgroundColor = "black";
              text[0].style.color = "white";

              clickAgain();

       });
}

function clickAgain() {

       inner.addEventListener('click', function () {
              inner.style.marginLeft = "1px";
              body.style.backgroundColor = "white";
              text[0].style.color = "black";
              clickAgain1();
       });
}

clickAgain1();








