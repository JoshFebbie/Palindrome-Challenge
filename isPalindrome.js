// Write your code below

let palindrome = function (word) {
    let len = word.length
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase()
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase()
    let flip = end.split('').reverse().join('')
        return (start === flip)
}

    console.log(palindrome("KaYAk"))
    console.log(palindrome("RaceCar"))
    console.log(palindrome("josh"))
    console.log(palindrome("POOP"))
    console.log(palindrome("HeLlO"))

//SUBSTRING() METHOD-----------------1-------------------------------
    // The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

    // The substring() method extracts characters from start to end (exclusive).

//SPLIT() METHOD---------------------2-------------------------------

    // The split() method splits a string into an array of substrings.

    // The split() method returns the new array.

//REVERSE() METHOD-------------------3-------------------------------

    // The reverse() method reverses the order of the elements in an array.

    // The reverse() method overwrites the original array.

//JOIN() METHOD----------------------4-------------------------------

    // The join() method returns an array as a string.

    // The join() method does not change the original array.

//TOLOWERCASE() METHOD---------------5--------------------------------

    // The toLowerCase() method converts a string to lowercase letters.

    // The toLowerCase() method does not change the original string.

//MATH.FLOOR() METHOD----------------6--------------------------------

    // The Math.floor() method rounds a number DOWN to the nearest integer.