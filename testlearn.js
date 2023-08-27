// let numbers = [1,2,3,4,5]
// let [a,b,c,d,f] = numbers
// console.log(a);
// console.log(d)

let names = "my name is prasanth from ap".split(' ')
console.log(typeof(names))
let [a,b,c, ...d] = names

console.log(typeof(b))
console.log(d)

let person = {
    name:"prasanth",
    age: 28,
    skintone:"normal",
    height: 162 +"cm",
}


// console.log(person[name])
// let {age,name,skintone,height} = person
// console.log(height)



//spread operator

const array1 = [1,2,3,4,3,5,21,3,4,5,6,7,8,9]
const array2 = [...array1,10,20,30]
console.log(array2)
const umique_array = [...new Set(array1)]
console.log(array1)

const updated_person = {
    ...person ,
    address:"andhra pradesh"
}
const age_is_present = "age" in person;
console.log(age_is_present)
console.dir(updated_person)

// spread operator copying the all elements and expands into a maltiple value 
var Namess = ["hello", "hiii", "hurray"]

function getnames(x,y,z){
    console.log(x,y,z)
}
getnames(...Namess)

// rest operator  copying remaining elements in aaa array and packing them based on the data structure
function addnumbers(k,l,m,...oth){
    console.log(oth)
    return k+ l + m ;    //return sum of all numbers
}
const res = addnumbers(2,3,4,5,6,7,8,9,1)
console.log(res);