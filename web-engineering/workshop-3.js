const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({input , output});

function main() {
    rl.question("Enter numbers: " , (input) => {
        let numbers = input.split(" ").map(Number);
        number_of_max(numbers);
        rl.close;
    });
}

function number_of_max(input) {
    let max_number = 0;
    let count = 0;
    for (let i = 0 ; i < input.length ; i++) {
        if (input[i] > max_number) {
            max_number = input[i]
            count = 1;
        } else if (input[i] == max_number) {
            count++;
        }
    }
    if (count == 1) {
        console.log("Not Duplicate (End run ctrl+d)");
    } else {
        console.log("คำตอบคือ "+ count + "\nเพราะว่า " + max_number + " เป็นเลขที่มีค่ามากที่สุด และ ซ้ำกันอยู่ " + count + " จำนวน จึงได้ผลลัพธ์เป็น " + count + " (End run ctrl+d)");
    }
}

main();