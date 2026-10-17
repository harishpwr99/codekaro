let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];
console.log(shoppingList[0]);
shoppingList.push("Carrots");
shoppingList.pop();
//remove Tomatoes and Onions using slice and add Cucumbers and Bell Papers in there place
console.log(shoppingList);
let copy = shoppingList.slice(0,5)
copy[4] = copy[4].slice(0, 1).concat("Cucumbers", "Bell Papers");
console.log(copy);

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
console.log(student.name);
student.phone = "123-456-7890";
console.log(student);
delete student.grade;
console.log(student);
student.age=21;
console.log(student);

function checknumbers(){
    let number=prompt("please add number here ");
    if(number > 0){
        console.log('Positive');
    } 
    if (number < 0 ){
        console.log('Negative');
    }
    if (number == '0'){
        console.log('Zero');
    }
}

function studentGrade(grade){
    let rank='';
    if(typeof(grade) != 'number' || typeof(grade) == 'undefined'){
        return 'F';
    }
    grade = parseInt(grade);
    if(grade >=90 && grade <= 100){
        rank='A';
    } else if (grade >=80 && grade <= 89){
        rank='B';
    } else if (grade >=70 && grade <= 79){
        rank='C';
    } else if (grade >=60 && grade <= 69){
        rank='D';
    } else if (grade <60){
        rank='F';
    }
    return rank;
}
function checkStringTruthiness(str) {
  return str ? "Truthy" : "Falsy";
}
//checknumbers();
console.log(studentGrade(96));
console.log(checkStringTruthiness("Hello"));
console.log(checkStringTruthiness(" ")); 
console.log(checkStringTruthiness(""));



