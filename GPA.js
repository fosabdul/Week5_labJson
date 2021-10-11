function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    }
    return false
}


console.log(validGPA(-1))     // false
console.log(validGPA(0))      // true
console.log(validGPA(3.5))    // true
console.log(validGPA(4))      // true
console.log(validGPA(10))     // false

console.log('Weird arguments to GPA function\n')

console.log(validGPA())                // false. Why?
console.log(validGPA('not a number'))  // false
console.log(validGPA(2.5))             // true
console.log(validGPA(3, 100))          // true. Extra argument is ignored


function cityStateAddress(city, state) {
    state = state.toUpperCase()
    address = `${city}, ${state}`
    return address
}

address = cityStateAddress('Minneapolis', 'mn')
console.log(address)   // Prints Minneapolis, MN

// Example expected arguments


// Unexpected arguments
//console.log(cityStateAddress('Minneapolis'))   // error - no state so state.toUpperCase() fails
console.log(cityStateAddress('Minneapolis', 'mn', 55403))   // extra argument is ignored
//console.log(cityStateAddress())  // error - no state so state.toUpperCase() fails


// format strings
