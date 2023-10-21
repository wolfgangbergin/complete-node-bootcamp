//The avocado 🥑 is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content 😄
this.l = console.log;
const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////////////////////////

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

const __wolfDirName =
  '/Users/bob/Desktop/node/complete-node-bootcamp/1-node-farm/starter';

const jsonDataString = fs.readFileSync(
  `${__wolfDirName}/dev-data/data.json`,
  'utf8'
);

const tempCard = fs.readFileSync(
  `${__wolfDirName}/templates/template-card.html`,
  'utf8'
);
const tempProduct = fs.readFileSync(
  `${__wolfDirName}/templates/template-product.html`,
  'utf8'
);
///////////////////////////////////////////////

this.wolfman = {
  tempOverview: fs.readFileSync(
    `${__wolfDirName}/templates/template-overview.html`,
    'utf8'
  ),
};

///////////////////////////////////////////////
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%name%}/g, product.productName);
  output = output.replace(/{%image%}/g, product.image);
  output = output.replace(/{%price%}/g, product.price);
  output = output.replace(/{%from%}/g, product.from);
  output = output.replace(/{%v%}/g, product.nutrients);
  output = output.replace(/{%q%}/g, product.quantity);
  output = output.replace(/{%d%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) {
    output = output.replace(/{%not_organic%}/g, 'not-organic');
  }
  return output;
};
////

const jsonDataArray = JSON.parse(jsonDataString);

///////////////////////////////////////////////

const server = http.createServer((req, res) => {
  
  let path = url.parse(req.url, true);


const queryID = url.parse(req.url, true).query.id;

  
  const pathName = req.url;
  const search = `${path.pathname}${path.search}`;
  
  
const {query, pathname} = url.parse(req.url, true)

this.l(query)
this.l(pathname)
this.l(`${pathname}?id=${query.id}`)

  if (pathName === '/' || pathName === '/overview') {
    fs.readFile(
      `${__wolfDirName}/templates/template-card.html`,
      'utf8',
      (err, tempCard) => {
        if (err)
          return console.log(`error 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥`);

        res.writeHead(200, { 'Content-type': 'text/html' });

        const cardHtmlString = jsonDataArray
          .map((el) => replaceTemplate(tempCard, el))
          .join('');

        res.end(
          this.wolfman.tempOverview.replace(/{%produtCards%}/g, cardHtmlString)
        );
      }
    );
  } else if (pathName === `${pathname}?id=${query.id}`) {
  

    res.end(replaceTemplate(tempProduct, jsonDataArray[query.id]));
   
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(jsonDataString);
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
