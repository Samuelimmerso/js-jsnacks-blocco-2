// declarations
let array1 = [], array2 = [];
let counter = 0;
let check = document.getElementById("check");


//randomize array1 lenght

counter = Math.floor(Math.random() * 10) + 2;   //element randomize
for (let i = 0; i < counter; i++) {
    array1[i] = Math.floor(Math.random() * 100);    //element randomize
}

//randomize array2 lenght

counter = Math.floor(Math.random() * 10) + 2;   //lenght randomize
for (let i = 0; i < counter; i++) {
    array2[i] = Math.floor(Math.random() * 100);    //element randomize
}

// check if they have the same lenght
check.addEventListener("click",
    function () {

        for (let i = 0; array1.length != array2.length; i++) { // if array1 len != than array2 push an element
            if (array1.length > array2.length) {    // if is > array1 len push array2
                array2.push(Math.floor(Math.random() * 100));
            } else if (array1.length < array2.length) {     // if is > array1 len push array2
                array1.push(Math.floor(Math.random() * 100));
            }
        }

        // print array1
        for (let i = 0; i < array1.length; i++) {
            console.log(array1[i]);
        }

        // spacing
        console.log("\n\n\n");


        // print array2
        for (let i = 0; i < array2.length; i++) {
            console.log(array2[i]);
        }


    }

)






