//main script
const result = require('./script')
// returning an array
const readData = require("./readData");
// write data
const writeData = require('./writeData');


async function processData(array) {
    var arr = [];
    for (const item of array) {
        await result(item.Numbers).then((val) => {
            arr.push({ "Numbers": item.Numbers, "Output": val })
        })
    }
    writeData(arr)
    console.log('Done!');
}
processData(readData);
