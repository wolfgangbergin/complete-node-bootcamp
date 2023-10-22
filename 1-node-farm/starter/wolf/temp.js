///////////////////////////////////////////////
//The avocado 🥑 is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content 😄
// blocking, synchronous way
// let temp1 = fs.readFileSync('./txt/input.txt', 'utf8');

// const testOut = `${temp1}  414`;
// fs.writeFileSync('./txt/output.txt', testOut);

// let jsonDataArray;
// fs.readFile('./txt/output.txt', 'utf8', (err, data) => {
//   jsonDataArray = data;
// });

// setTimeout(() => {
//   fs.writeFile('./txt/kim.txt', `${jsonDataArray}  🥑 `, (err, data) => {});
// }, 100);

// let temp3;
// setTimeout(() => {
//   fs.readFile('./txt/kim.txt', 'utf8', (err, data) => {
//     temp3 = data;
//   });
// }, 200);

// setTimeout(() => {
//   fs.writeFile('./txt/kim.txt', `${temp3}  kim`, (err, data) => {});
// }, 300);

// let temp4;

// setTimeout(() => {
//   fs.readFile('./txt/kim.txt', 'utf8', (err, data) => {
//     temp4 = data;
//   });
// }, 400);

// setTimeout(() => {
//    console.log('23', temp4);
// }, 500);
///////////////////////////////////////////////
// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf8', (err, data1) => {
//     if(err) return console.log(`error 💥`);
//    // return console.log('return is hit')
//   fs.readFile(`./txt/${data1}.txt`, 'utf8', (err, data2) => {
//     console.log('1', data2);
//     fs.readFile(`./txt/append.txt`, 'utf8', (err, data3) => {
//       console.log('1', data3);
//       fs.writeFile(
//         './txt/final.txt',
//         `${data2}\n  🏁 ${data3}`,
//         (err, data) => {
//           console.log(` your file has been written`);
//         }
//       );
//     });
//   });
// });

// console.log(`Will read file`);
///////////////////////////////////////////////
// Server