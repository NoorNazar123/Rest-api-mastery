let user = { name: "Ali", age: 20 };

// user.age = 21;

// if(!user.email) {
//    return console.log("user does not exist")
// }

// user = {
//   id: 1,
//   name: "Ali",
//   role: "admin"
// }

// if(user.role === "admin") {
//    return console.log("Access granted")
// }

// console.log("Access denied")

// function checker(n1, n2) {
//     if (typeof n1 !== "number" || typeof n2 !== "number") {
//         console.error("bad request");
//         return;
//     }

//     return n1 > n2
//         ? `number n1 is bigger: ${n1}`
//         : `number n2 is bigger: ${n2}`;
// }

// let r = checker(2,8)

// console.log(r)

products = [
  {id:1, name:"phone", price:500},
  {id:2, name:"tv", price:800}
]

let arr = [];

for(p of products){
   arr.push(p.name)
   console.log("products:", p.name)
}

console.log("arr", arr);