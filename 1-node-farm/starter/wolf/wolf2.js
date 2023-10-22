const fs = require('fs');
globalThis.l = console.log;

globalThis.wolfgang = {};
globalThis.wolfgang.__wolfDirName =
  '/Users/bob/Desktop/node/complete-node-bootcamp/1-node-farm/starter';

globalThis.wolfgang.tempOverview = fs.readFileSync(
  `${wolfgang.__wolfDirName}/templates/template-overview.html`,
  'utf8'
);




globalThis.wolfgang.replaceTemplate = (temp, product) => {
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
  
globalThis.wolfgang.tempProduct = fs.readFileSync(
  `${wolfgang.__wolfDirName}/templates/template-product.html`,
  'utf8'
);
globalThis.wolfgang.tempCard = fs.readFileSync(
  `${wolfgang.__wolfDirName}/templates/template-card.html`,
  'utf8'
);
globalThis.wolfgang.jsonDataString = fs.readFileSync(
  `${wolfgang.__wolfDirName}/dev-data/data.json`,
  'utf8'
);

globalThis.wolfgang.jsonDataArray = JSON.parse(wolfgang.jsonDataString);
