let array = [];
let arraylen = Math.floor(Math.random() * 10)+2;
let sum=0;


for(let i=0; i < arraylen; i++){
    array[i] = Math.floor(Math.random() * 100);
}

for(let i=0; i < array.length; i++){
    sum+=array[i];
    console.log()
}

console.log(sum);



