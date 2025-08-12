const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({input , output});

rl.question("Enter number (1-7): " , (เลข) => {
    switch(parseInt(เลข)) {
        case เลข = 1:
            console.log("วันอาทิตย์");
            break;
        case เลข = 2:           
            console.log("วันจันทร์");
            break;
        case เลข = 3:
            console.log("วันอังคาร");
            break;
        case เลข = 4:
            console.log("วันพุธ");
            break;
        case เลข = 5:
            console.log("วันพฤหัสบดี");
            break;
        case เลข = 6:
            console.log("วันศุกร์");
            break;
        case เลข = 7:
            console.log("วันเสาร์");
            break;
        default:
            console.log("กรอกเลขแค่ 1-7 เท่านั้น");
            break;
    }
    rl.close();
})