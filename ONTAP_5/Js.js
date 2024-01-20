// map
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

/// filter lọc sản phẩm có category là auto
const filterCompanies = companies.filter( (company) => {
    return company.category === 'Auto';
}

);
console.log(filterCompanies);

//
function removeCategoryAuto(company) {
    return companies.filter ( (company) => {
        return company.id !== 'Auto';
    });
    
}
console.log(removeCategoryAuto('Auto'));


// reduce
console.log('--------------reduce--------------------');
const cart = [
    { id: 1, name: 'Product 1', price: 130 , quantity: 2,discout: 0.1},
    { id: 2, name: 'Product 2', price: 150, quantity: 1 ,discout: 0.2},
    { id: 3, name: 'Product 3', price: 200 , quantity: 3,discout: 0.3},
  ];
  
const total = cart.reduce((total, Product) => {
    return total + Product.price;
}, 0);
console.log(total);

const totalQuantity = cart.reduce((total, Product) => {
    return total + Product.quantity*Product.price;

}
, 0);
console.log(totalQuantity);
const totalDiscout = cart.reduce((total, Product) => {
    return total + Product.quantity*Product.price*(1-Product.discout);

}, 0);
console.log(totalDiscout);