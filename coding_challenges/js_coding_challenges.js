// write a tradition function that multiplies two numb er and returns the value print the value outside its function
function multiply(num1, num2) {
    let result = num1 * num2
    return result;
    
}
console.log(multiply(5,3))
 
// write a for loop that prints your first name 10 times

for (let i = 0; i < 10; i++) {
console.log("muscab")    
}


for (let i= 0; i<10; i++){
    console.log("hello")
}

// write a for loop that prints your first name 10 times

let i = 0;
while (i < 10) {
    console.log("surname")
    i++
}

// code an array of 10 elements of type string (for example 10students)

let students = ["john", "abdi", "ali", "ahmed", "linda", "magrett", "ilyas", "hussein", "yusuf", "huda"]
{
    console.log(students)
}

//  write a for loop that itrates through each element and prints each element
 
for (let i = 0; i < students.length; i++) {
    console.log(students[i])
    
 }

 // Name few functions that come with arrays that allow you to intrate throught the elements

// 1. students.forEach()
// 2. students.Map()
// 3. students.filter()
// 4. students.reduce()

// 1. implement forEach function that prints all elements of the array below
students.forEach(
    function(value,index){
        console.log("the element is" + "" + value + "and its index is" +  " "+ index)
        
    }
)


