//The avocado 🥑 is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content 😄
const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////////////////////////

// blocking, synchronous way
// let temp1 = fs.readFileSync('./txt/input.txt', 'utf8');

// const testOut = `${temp1}  414`;
// fs.writeFileSync('./txt/output.txt', testOut);

// let temp2;
// fs.readFile('./txt/output.txt', 'utf8', (err, data) => {
//   temp2 = data;
// });

// setTimeout(() => {
//   fs.writeFile('./txt/kim.txt', `${temp2}  🥑 `, (err, data) => {});
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

const jsonData = (() => {
  try {
    const __wolfDirName =
      '/Users/bob/Desktop/node/complete-node-bootcamp/1-node-farm/starter';

    return fs.readFileSync(`${__wolfDirName}/dev-data/data.json`, 'utf8');
  } catch (err) {
    console.log('error in jsonData');
  }
})();

///////////////////////////////////////////////

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW of wolfs server!!!');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(jsonData);
  } else if (pathName === '/product') {
    res.end('templates/product.html');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
//const dataObj = JSON.parse(data);
