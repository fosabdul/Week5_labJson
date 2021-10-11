let animals = ['Giraffe', 'Elephant', 'Yak']

//loop over an array by counting the elements - imperative style

 // traditional looping style
for (let i = 0; i < animals.length; i++) {
    console.log('Element ' + i + ' is ' + animals[i])
    // i is counting the numbers
}

/* Another way of looping over an array - functional style
Notice the function definition in the function call! */

animals.forEach(function(element){
    console.log(element)
})

// If you need to know where you are in the array, add another
// argument to the function, it will contain the current index
animals.forEach(function(element, index){
    console.log(`Animal number ${index} is ${element}`)
})


//   animals.forEach(function(element, index){
//     console.log('Animal element index)
//   })