function sayHello(name = "Quân", age = 20) {
    console.log("Hello " + name);
    console.log(`Hello ${name} ${age}`);
    
}
sayHello();
// sayHello("Quân", 20);// truyền vào giá trị sau khi khai báo tham số mặc định

// arrow function
// funton addNumber =(){}
const addNumber = (a, b) => { a + b;
}   
console.log(addNumber(1, 2));
//c2
const addNumber1= (a, b) =>  a + b;
console.log(addNumber1(1, 2));

//05 Falsy values
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

 // truthy values
//  true
//  '0'
// ' '
// []
// {}
// function (){}


// if(dieu_kien){
// console.log("truthy");
// }
// else{
//     console.log("falsy");
// }

//  using a ternary operator (toán tử 3 ngôi)
// dieu_kien ? true : false;
// dieu_kien ? true : dieu_kien ? true : false;
// dieu_kien ? true : dieu_kien ? true : dieu_kien ? true : false;
const age = 20;
const DK = age >= 18 ? "You can vote" : "You can not vote";
console.log(DK);


// map : tạo ra mảng mới từ mảng cũ

const companies = [
{
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2003
},
{
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
},
{
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
},
{
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
},
{
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
},
{
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
},
{
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
},
{
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
},
{
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
}
];

const companiesInfor = companies.map((company) => { // company là 1 phần tử trong mảng
    return {
        name: company.name,
        category: company.category,
        timeframe: `${company.name} [${company.start} - ${company.end}]`
    };
});

console.log(companiesInfor);
