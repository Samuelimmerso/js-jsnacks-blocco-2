// declaration
let print_even = document.getElementById("print_even");
let print_odd = document.getElementById("print_odd");
let inputN = document.getElementById("inputN");
let check = document.getElementById("check");

// click check
check.addEventListener("click",
    function () {
        if (inputN.value % 2 == 0) {
            print_even.innerHTML += inputN.value + "\n";
        } else {
            print_odd.innerHTML += inputN.value + "\n";
        }

    }
)