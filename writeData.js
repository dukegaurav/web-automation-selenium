const xlsx = require("xlsx");
const readData = require("./readData")
const writeData = (param) => {
    const newWB = xlsx.utils.book_new();
    const newWS = xlsx.utils.json_to_sheet(param);

    xlsx.utils.book_append_sheet(newWB, newWS, "after Data")

    xlsx.writeFile(newWB, "sampleData3.xlsx")
}




module.exports = writeData;