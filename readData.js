const xlsx = require("xlsx");

const wb = xlsx.readFile("sampleData.xlsx");

const ws = wb.Sheets["Sheet1"];

const readData = xlsx.utils.sheet_to_json(ws)
//console.log(readData)

module.exports = readData;