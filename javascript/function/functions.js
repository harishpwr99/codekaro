// assignment 1
let numbers = [2, 4, 6, 8, 10, 12];
for (let i = 0; i < numbers.length;i++){
    console.log(numbers[i]);
}

// assignment 2

calculateDiscount=price=>{ return price - (price*15/100)}
let prices = [500, 1200, 999, 2500, 750];
for(let i=0;i<prices.length;i++){
    console.log("original price is "+ prices[i]+" and after 15% discount price is "+calculateDiscount(prices[i]));
}

// Assignment 3
let users = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 }
];
getname=users=>{
    if(users.age > 18){
        console.log(users.name)
    }
}
users.forEach(getname);

//assignment 4
let employees = [
  { name: "Aman", salary: 50000 },
  { name: "Priya", salary: 75000 },
  { name: "Rahul", salary: 62000 },
  { name: "Neha", salary: 48000 },
  { name: "Karan", salary: 90000 }
];
inHandSalary=salary=>{return salary - (salary*10/100) - (salary*10/100)}
for(let i=0;i<employees.length;i++){
    console.log("For "+ employees[i].name +" Total gross "+ employees[i].salary+" and after 10% TDS and 5% PF then in hand salary is "+inHandSalary(employees[i].salary));
}

//ASSIGNMENT 5

let user = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 },
  { name: "Simran", age: 31 },
  { name: "Vikram", age: 45 },
  { name: "Riya", age: 19 }
];
let adults = 0;
let minors = 0;
let avarage = 0;
let maxAge = 0;
let oldUser = '';
for(let i=0;i<user.length;i++){
    if(user[i].age > maxAge){
        maxAge = user[i].age;
        oldUser = user[i].name;
    }
    if(user[i].age >= '18'){
        adults++;
    }
    if(user[i].age < '18'){
        minors++;
    }
    avarage = avarage + user[i].age;
}
console.log("Total users "+ user.length);

console.log("Number of adults (18+) "+adults);

console.log("Number of minors (<18) "+minors);

console.log("Name of the oldest user "+oldUser);

console.log("Average age of all users "+avarage / users.length);
