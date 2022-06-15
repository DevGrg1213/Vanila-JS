// Exporting module

console.log('Exporting module');
const product = 'Banana';
const cost = 100;
const quantity = 12;
export const totalCost = function (product, quantity, cost) {
  console.log(`${quantity} ${product} cost ${cost * quantity}`);
};

export const details = [];
export const bill = function (unit, item) {
  details.push({ unit, item });
  console.log(`There are ${unit} unit of ${item} in the stock`);
};

export default function (unit, item) {
  details.push({ unit, item });
  console.log(`There are ${unit} unit of ${item} in the stock`);
}

export { product, cost, quantity };
