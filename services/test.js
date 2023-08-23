const jsonData = require('../assets/testData.json')

async function getLocal(){
  //console.log('JSON Data:', jsonData);
  return {
    jsonData
  }
}


module.exports = {
  getLocal
}