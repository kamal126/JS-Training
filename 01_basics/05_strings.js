const instaId = "kamal_chandra_offocial1"
const userName = "kamal Chandra"
var followers = "225M"

console.log(userName+", "+instaId+", "+followers);

console.log(`
    Hello my name is ${userName}\n 
    Instagram Id: @${instaId}\n
    Total Follower: ${followers} 
    `);

const gameName = new String('kamal-kc-com')

console.log(gameName);  // [String: 'kamal-kc-com']
console.log(gameName[0]);   // k
console.log(gameName[5]);   // -

console.log(gameName.__proto__);    // {}

console.log(gameName.length);   // 12

console.log(gameName.charAt(2)); // m
console.log(gameName.toUpperCase()); // KAMAL-KC-COM => not affect orginal string


console.log(gameName.indexOf('l'))  // 4

const newString = gameName.substring(0,5)   // not added last index only 0 to 4 
console.log(newString); // kamal


const anotherStr = gameName.slice(0, 5)
console.log(anotherStr); // kamal

const newStr = "          kamal        "
console.log(newStr);    // |          kamal         |
console.log(newStr.trim()); // kamal

const url = "https://github.com/kamal%20chandra"

console.log(url.replace('%20', '-'));   // https://github.com/kamal-chandra

console.log(url.includes('chandra'));   // true

console.log(gameName.split('-'));   // [ 'kamal', 'kc', 'com' ]


















