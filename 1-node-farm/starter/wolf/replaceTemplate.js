module.exports = (temp, product) => {
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
  


 