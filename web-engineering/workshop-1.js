const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({input , output});

rl.question("Enter age: " , (อายุ) => {
    if (อายุ <= 13) {
        console.log('คุณเป็นเด็ก')
    } else if (อายุ > 13 && อายุ < 20) {
        console.log('คุณเป็นวัยรุ่น')
    } else if (อายุ > 19) {
        console.log('คุณเป็นผู้ใหญ่')
    } 
    rl.close();
})