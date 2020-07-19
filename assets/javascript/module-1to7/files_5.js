const fs = require('fs')

//reading files
// fs.readFile('./test_5.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

// console.log('last-line')

//writing files
// fs.writeFile('./test_5.txt', 'Bye World', () => {
//     console.log('file was written')
// })

// fs.writeFile('./testTwo_5.txt', 'Test File created using write', () => {
//     console.log('file was written')
// });

// //directories
// if (!fs.existsSync('./testDir_5')) {
//     fs.mkdir('./testDir_5', (err) => {
//         if (err) {
//             console.log('there was an error')
//         } else {
//             console.log('folder created')
//         }
//     })
// } else {
//     fs.rmdir('./testDir_5', (err) => {
//         if (err) {
//             console.log('something is wrong')
//         }
//         console.log('folder deleted')
//     })
// }

//deleting files
if (fs.existsSync('./testDir_5/test.txt')) {
    fs.unlink('./testDir_5/test.txt', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('file deleted')
        }

    });
}