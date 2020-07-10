//Write a JavaScript function that accepts two arguments, a string and a letter
function occurencesCounter(text, letter) {
    const frequencyCounter = {}
    for (let val of text) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }
    console.log(frequencyCounter[letter])
        //count the occurence of the 2nd string

}
//the function will count the number of occurrences of the specified letter within the string
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2
occurencesCounter("w3resource.com", "o")