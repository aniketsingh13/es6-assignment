//a
/*  const aloo = 1;
if(aloo===1){
    let a=2;
    console.log(a);
}
console.log(aloo);  */

//b
// const multiply=(x,y)=>x*y;

//c
/* const customer = {
    names: "Bhaalo"
  };
  const card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
  };

let {names}=customer;
let{amount,product,unitprice}=card;
let message = `Hello   ${names}  wants to buy  ${amount}  ${product}  for price of card   
${unitprice} per piece`

console.log(message) */

//d
// const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]
// const [ceo,rocketceo]=Neog;


//e
/* const arr = ["MA", "TA", "PA", "CA"];
const [one,two,...rest]=arr
console.log(one);
console.log(two); */

//f
/* const Aaloo = "Tasty";
const Bhaloo = "Cute";
const obj={Aaloo,Bhaloo};
 */

//g
/* const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}`); */

//h
/* const arithmeticsObj = {
    sum:(num1, num2)=>  num1 + num2,
    
    multiply:(num1, num2)=>  num1 * num2
    
  };
  const{sum,multiply}=arithmeticsObj; */

  //i
  /* const avengers = {
    operation: "Assemble",
    members: [
      {
        ironMan: "Tony Stark"
      },
      {
        captainAmerica: "Steve Rogers"
      },
      {
        blackWidow: "Natasha Romanoff"
      }
    ]
  };
 const{operation,members}=avengers; */

 //                    question 2            //

 //1
/*  function packIt(){
  console.log(args)
 }

packIt(1,2,3,5,5) */



//                   qustion 3                      //
 
//1
/* const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)
output is nameste and welcome
here default value is replaced by value on right hand side; */


//2
/* const obj = {
  aloo : 1,
  bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj 

console.log(aloo)
we cant change the value of aloo on left hand side using const and let it gives an error 
because onnce it declare it we can't assign another value it using const and let. we can 
 use var it work properly fine in this case. */