// declaration
let inputN = document.getElementById("number");
let check = document.getElementById("check");
let print = document.getElementById("print");

check.addEventListener("click",
    function () {
        if (inputN.value % 2 == 0) {
            print.innerHTML = `${inputN.value}`;
        } else {
            print.innerHTML = ++inputN.value;
        }
    }

);
