function shout(text){

    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world '))

let message = shout('Hello web programmers')

console.log(message)

function  f_to_c(f, decimalPlaces) {
    let celsius = (f - 32  * 5/9)
    if(decimalPlaces){
        return celsius.toFixed(decimalPlaces)

    }else {
        return celsius
    }


}

let todayTemp = 75

todayCelsis = f_to_c(todayTemp, 2)

console.log(todayCelsis)

let classname = 'web '
let classcode = ' 2345'
let department = 'ITEM '
console.log(`I take this class  ${classname} ${classcode} ${department} `)