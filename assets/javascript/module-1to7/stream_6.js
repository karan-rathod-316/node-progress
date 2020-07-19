const fs = require('fs')

const readStream = fs.createReadStream('./data_6.html', { encoding: "utf-8" })
const writeStream = fs.createWriteStream('./dataWrite_6.html', { encoding: "utf-8" })


// readStream.on('data', (extractedData) => {
//     console.log('data is being extracted')
//     console.log(extractedData)
//     writeStream.write(extractedData)

// })


//***PIPING***
readStream.pipe(writeStream)