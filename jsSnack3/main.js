//declarations
let array = [];
let arraylen = Math.floor(Math.random() * 10)+2;
let sum=0;

//random assignaments
for(let i=0; i < arraylen; i++){
    array[i] = Math.floor(Math.random() * 100);
}

//sum calculation and number prints
for(let i=0; i < array.length; i++){
    sum+=array[i];
    console.log(i+1 + " Numero: " + array[i]);
}

//sum print
console.log("Somma: " + sum);



