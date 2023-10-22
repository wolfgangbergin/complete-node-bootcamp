const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
require('./wolf2');
const replaceTemplate = require('./replaceTemplate');

// const slugs = wolfgang.jsonDataArray.map((el) =>
//   slugify(el.productName, { lower: true })
// );
// l(slugs);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  const { query, pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/overview') {
    fs.readFile(
      `${wolfgang.__wolfDirName}/templates/template-card.html`,
      'utf8',
      (err) => {
        if (err)
          return console.log(`error 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥`);

        res.writeHead(200, { 'Content-type': 'text/html' });

        const cardHtmlString = wolfgang.jsonDataArray
          .map((el) => replaceTemplate(wolfgang.tempCard, el))
          .join('');

        res.end(
          wolfgang.tempOverview.replace(/{%produtCards%}/g, cardHtmlString)
        );
      }
    );
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(
      replaceTemplate(wolfgang.tempProduct, wolfgang.jsonDataArray[query.id])
    );
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(wolfgang.jsonDataString);
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
