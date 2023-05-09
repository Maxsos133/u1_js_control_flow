// let yourMoney = 50
// let catPrice = 100

// if (yourMoney === catPrice) {
//     console.log(`You have just enough to buy a cat!`)
// }  
// else if (yourMoney > catPrice) {
//     console.log(`You can buy a cat and will have dollars left over`)
// } else {
//     console.log(`You cannot buy a cat. You need more dollars :(`)
// }



// const dayOfWeek = `Sunday`

// if (dayOfWeek === `Monday` || dayOfWeek === `Wednesday`) {
//     console.log(`Its ${dayOfWeek}, better get to class!`)
// }
// else if (dayOfWeek === `Tuesday` || dayOfWeek === `Friday`) {
//     console.log(`Today is ${dayOfWeek}, no class tonight!`)
// }
// else if (dayOfWeek === `Saturday` || dayOfWeek === `Sunday`) {
//     console.log(`Its the weekend!`)
// }
// else {
//     console.log(`Enter a vaild day`)
// }



// let ageInYears = 20

// ageInYears >= 18 ? console.log(`you can vote`) : console.log(`you cant vote`)



// const food = `steak`

// switch(food) {
//     case `chicken`:
//         console.log(`Ill have the Chicken Parmesean`)
//     break
//     case `steak`:
//         console.log(`The steak please, medium rare`)
//     break
//     case `fish`:
//         console.log(`I think Ill try the Salmon`)
//     break
//     default:
//         console.log(`please enter a valid entree`)
// }



// for (let i = 100; i > 10; i -= 3) {
//     console.log(i)
// }


// const food = [`tacos`, `ramen`, `double`, `ceviche`, `shakshuka`, `fish and chips`]

// for (let i = 0; i < food.length ; i++) {
//     console.log(`lets have ${food[i]} for dinner`)
// }



             
            
const wizards = [
    {name: "Harry Potter", house: "Gryffindor"}, 
    {name: "Lord Voldomort", house: "Slytherin"}, 
    {name: "Cedric Diggory", house: "Hufflepuff"},
    {name: "Luna Lovegood", house: "Ravenclaw"},  
    {name: "Albus Dumbledor", house: "Gryffindor"}, 
    {name: "Merlin", house: "Slytherin"}, 
    {name: "Pomona Sprout", house: "Hufflepuff"}, 
    {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
    {name: "Ron Weasley", house: "Gryffindor"}, 
    {name: "Severus Snape", house: "Slytherin"}, 
    {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
    {name: "Padma Patil", house: "Ravenclaw"}, 
    {name: "Hermoine Granger", house: "Gryffindor"} 
   ]

   for (let i = 0; i < wizards.length; i++) {
    if (wizards[i].house != `Slytherin`){
    console.log(wizards[i].name)
    }
   }