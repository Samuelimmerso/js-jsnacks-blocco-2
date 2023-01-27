//declarations
let possibleresults = ['W', 'L', 'X'];
let team_results = [];
let arraylen = Math.floor(Math.random() * 10) + 2;
let sumW = 0, sumL = 0, sumX = 0;

//random assignaments
for (let i = 0; i < arraylen; i++) {
    team_results[i] = possibleresults[Math.floor(Math.random() * 3)];
    console.log(team_results[i])

    //team results counter
    switch (team_results[i]) {
        case possibleresults[0]:
            sumW += 1;
            break;
        case possibleresults[1]:
            sumL += 1;
            break;
        case possibleresults[2]:
            sumX += 1;
            break;
    }
}

console.log("Numero di Vittorie: " + sumW + "\nNumero di Sconfitte: " + sumL + "\nNumero di pareggi: " + sumX);



