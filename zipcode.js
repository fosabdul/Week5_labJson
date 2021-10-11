

function isMinnesotaZip(code) {

    if (code >= 55001 && code <= 56763) {
        return true
    }

    return false
}

console.log(isMinnesotaZip(55403))  // true
console.log(isMinnesotaZip(90210))  // false
console.log(isMinnesotaZip('55403'))  // true!
