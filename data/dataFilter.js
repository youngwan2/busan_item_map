const path = require("path");
const csvFilePath = path.join(__dirname, "/Nutrition.csv");
const fs = require("fs");

const csv = require("csvtojson");

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const jsObj = JSON.stringify(jsonObj)
    fs.writeFile("Nutrition.json", jsObj, "utf-8", () => {
      console.log("Success");
    });
  }).then((result)=>{
    console.log(result)
  });
