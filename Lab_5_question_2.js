/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

let ExtractPosition = iss_location.iss_position
console.log(ExtractPosition)
//TODO Extract the latitude value, and log it to the console. (done)
let lat = ExtractPosition.latitude
console.log(`the value of latitude is  ${lat}`)

//TODO Extract the longitude value, and log it to the console. (done)
let longi = ExtractPosition.longitude

console.log(`the value of longitude is  ${longi}`)





/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194,

}

rates["CHF"] = 1.1787
console.log(rates)

let rate = rates["AUD"]

ratetotal = rate * 100

console.log(ratetotal.toFixed(2))





let arr = Object.values(rates);
let max = Math.max(...arr);

console.log( `max value: ${max}` );

// After I did couple research how to do max number calculation I found this setting at
//https://stackoverflow.com/questions/8864430/compare-javascript-array-of-objects-to-get-min-max


// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD) (done)
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.




/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" },

]
//TODO print Gary Oldman's cat's name (done)

let catname = cats_and_owners[1].cat
console.log(catname)

// let whatProperty = 'Gary Oldman'
//
// console.log(cats_and_owners[whatProperty])

//TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.(done )
cats_and_owners.push( { name :'Taylor_Swifts' , cat:  'Meredith'}) // I prefer push style

// let cat = 'Meridith'
// let owner = 'Taylor Swift'
// let catAndOwner = { cat, owner }  // Variable names become the keys
// console.log(catAndOwner) // { cat: 'Meridith', owner: 'Taylor Swift' }




// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.(done)

console.log('Here are all the owner\'s names and their cats' )
cats_and_owners.forEach(function (catOwners){
    console.log(catOwners)
})






// TODO print Gary Oldman's cat's name (question )
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.(done)
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.(done)




/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODO print the full name of the Literature Nobel laureate.(done)
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.(done)
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ). (done)
// TODO write code to print the total number of prize categories (done)
// TODO write code to count the total number of laureates from 2017.(done)
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}
// //TODO print the full name of the Literature Nobel laureate  (done )
//let noble = nobel_prize_winners_2017.prizes /// it will print all the list
let noble = nobel_prize_winners_2017.prizes[3]  // will print the literature  list
console.log(noble)
let litername = noble.laureates

litername.forEach(function (litname){
    console.log('firstname:' + litname.firstname + ' Surname:' + litname.surname)


})

//TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed. (done)

let Physics = nobel_prize_winners_2017.prizes[0]  // will print the physics  list
console.log(Physics)
let physics_id = noble.laureates

physics_id.forEach(function (phy_id){
    console.log('Your id number is  :' + phy_id.id)

})

// ///TODO write code to print the names of all of the prize categories

let all_category = nobel_prize_winners_2017.prizes.map(function (categ){
    return categ.category

})
console.log(all_category)
console.log(all_category.length) /// TODO write code to print the total number of prize categories (done)

let countlit = 0
nobel_prize_winners_2017.prizes.forEach(function (lit) {

    lit.laureates.forEach(function (lit){
        countlit++
    })

    })

    //return lit.laureates.
console.log(countlit)
//console.log(all_lit.length)  // TODO write code to count the total number of laureates from 2017. (question)


// })

// let nobleinfo = noble[3]     /// this is the list under Literature noble
// console.log(nobleinfo)
//
// let litername = nobleinfo.category[0]
// // let fname = litername
// console.log(litername)
//
// // let litername2 = litername.firstname  // this didn't work also
// // console.log(litername2)
// let namelit = nobel_prize_winners_2017.prizes.category
// console.log(namelit)

// ///TODO write code to print the names of all of the prize categories


// I did all the stages needed in the lab sheet


