const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNums = [];

for(let i=0; i < nums.length; i++){
    const currentNum = nums[i];
    const even = currentNum % 2 === 0;
    if(even){
        evenNums.push(currentNum);
    }
}
console.log(evenNums);