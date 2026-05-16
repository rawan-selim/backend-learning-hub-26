/* line of important comments 
another line
another..*/

let studentName = "Ahmde";
const pizzaFlavor = "pepporoni";
let hungerlevel = 10;
let isPizzaHot = true;
let deliveryAddress = "my address";
console.log(typeof hungerlevel);
console.log(typeof isPizzaHot);
console.log(typeof deliveryAddress);
let total = "85";
let tip = 15;
let total= Number(total);
let extraTip = Number(isPizzaHot);
let totalBill = total+ tip+ extraTip;
let minutesWaiting = 45 + 15;
let isEven = (minutesWaiting%2==0);
let iamNotCrying = 2 + 3 * 4 - 1;
let iamNOT = (2 + 3) * (4 - 1);
console.log("result1 : ", uselessexprresion);
console.log("result2 : ",anotherUselessexprresion);

if (isPizzaHot && hungerlevel > 7) 
   { console.log("OPEN THE DOOR AND SPRINT");}
else if (hungerlevel >= 5  && hungerlevel<= 7)    
    {console.log("Walk, you have dignity");}
 else 
    {console.log("Order sushi next time");}

 // hungerLevel > 5 is an expression because it doesnt do anything is just checks and holds a value
 // if (hungerLevel > 5) { ... } is a statement, it is an instruction that executes some code 

 let PIZZAFLAVOR = pizzaFlavor.toUpperCase();
 let flavorLength = pizzaFlavor.length;
 let hasPepper = pizzaFlavor.includes("pepper");
 console.log("Uppercase:", PIZZAFLAVOR);    
console.log("String Length:", flavorLength); 
console.log("has pepper?:", hasPepper);

let storySummary = `${studentName} ordered a ${pizzaFlavor} pizza.  total bill is £${totalBill} and wait time is ${minutesWaiting} minutes.`;
console.log(storySummary);

let toppings = ["pepporioni", " cheeseee", " pepper"]
 let order ={
    cumstomer: "Ahmed",
    pizzaFlavor : "pepporioni",
    isDelivered: false
 };
// pizza arrieved here somehow .-.
order.isDelivered = true;
// here is my single-line comment u asked 4
function calcTotal (price,tip ){
    return price+tip;
}
const calcTotalArr = (price, tip)=> price+ tip;

let regularResult = calcTotal(85, 15);
let arrowResult = calcTotalArr(85, 15);

console.log(" Function Result:", regularResult); 
console.log("Arrow Function Result:", arrowResult);     

let stops= ["Ahmed", "Sara", "Mona", "Tarek"];
for (let i = 0; i < stops.length; i++) {
  console.log(`Delivering to ${stops[i]}...`);
  
  if (stops[i] === "Ahmed") {
    console.log("Found Ahmed! Stopping the delivery run.");
    break; 
}}


