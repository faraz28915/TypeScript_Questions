// Answer # 2
let naam: string = "Yahya"
let messagee: string = "Hello " + ", would you like to learn some Python today";
console.log(messagee)

// Answer 3

// Lower and Upper Cases
let second_name = "owais iqbal"

let result1 = second_name.toLowerCase();
console.log(result1);

let result2 = second_name.toUpperCase();
console.log(result2);

//Title Case Code
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase(second_name));

// Answer 4

let saying = 'Muhammad Ali once said, "Dont count the days. Make the days count"'
console.log(saying)

  // Answer 5

let qoutee = "Who you are is defined by what you’re willing to struggle for."
let famous_person = "Mark Manson"
let textt = famous_person + " once said, " + '" ' + qoutee + ' "'
console.log(textt)


// Answer 6 ?


// Answer 7

let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
let num5 = 5
let num6 = 6
let num7 = 7
let num8 = 8
let num9 = 9
let num10 = 10
let num16 = 16

let addi = num5 + num3
let subt = num10 - num2
let multi = num8 * num1
let divid = num16 / num2

console.log("The total of " + num5 + " and " + num3 + " is eqaul to: " + addi);
console.log("The difference of " + num10 + " and " + num2 + " is eqaul to: " + subt);
console.log("The product of " + num8 + " and " + num1 + " is eqaul to: " + multi);
console.log("The division of " + num16 + " by " + num2 + " is eqaul to: " + divid);



// Answer 8

console.log(7+1);
console.log(11-3);
console.log(4*2);
console.log(40/5);

// Answer 9

let favNum = 23
let reason = " Because that is my age"
console.log("My favorite number is " + favNum + reason);

// Answer 10

// This is a comment, My Name is Syed Faraz Ahmed and today is 31 July 2023


// Answer 11

let MyFriendList: string [] = ["Bilal", "Amna", "Hamza", "Imtiaz" , "Mehak" , "Shadab"]

console.log(MyFriendList[0])
console.log(MyFriendList[1])
console.log(MyFriendList[2])
console.log(MyFriendList[3])
console.log(MyFriendList[4])
console.log(MyFriendList[5])

// Answer 12

let stdMessage = "Faraz really likes his friend "

console.log(stdMessage + MyFriendList[0])
console.log(stdMessage + MyFriendList[1])
console.log(stdMessage + MyFriendList[2])
console.log(stdMessage + MyFriendList[3])
console.log(stdMessage + MyFriendList[4])
console.log(stdMessage + MyFriendList[5])

// Answer 13

let Transport: string [] = ["Honda Civic" , "Mitsubishi Galant" , "Honda Bike", "BMW Series 7"]

let stdMessage2 = "I would like to own a "

console.log(stdMessage2 + Transport[0])
console.log(stdMessage2 + Transport[1])
console.log(stdMessage2 + Transport[2])
console.log(stdMessage2 + Transport[3])

// Answer 14

let Guests: string[] = ["Syed Khalid Manzar", "Owais Iqbal", "Huma Manzar"] 

console.log("Dear " + Guests[0] + " you are invited to dinner at my house")
console.log("Dear " + Guests[1] + " you are invited to dinner at my house")
console.log("Dear " + Guests[2] + " you are invited to dinner at my house")

// Answer 15

let cant_come = Guests[0]

Guests[0] = "Yahya Owais"

console.log("Unfortunately " + cant_come + " couldnt make it to dinner instead Mr." + Guests[0] + " will be joining us")

console.log("Dear " + Guests[0] + " you are invited to dinner at my house")

// Answer 18

//tsc Task1.ts && node Task1.js

let places: string[] = ["London", "Dubai", "Seoul", "Melboure", "Hong Kong", "Toronto"];

let original = places

places = places.sort()

console.log(places)

let reverse = places.reverse()

console.log(reverse)


// Answer 19

Guests = Guests.splice(0, Guests.length)

Guests = ["Syed Khalid Manzar", "Owais Iqbal", "Huma Manzar"] 

let No_oF_Guests = Guests.length

console.log(No_oF_Guests)


// Answer 20

let languages: string[] = ["English", "Urdu" , "Chinese" , "Arabic" , "Japanese" , "Russian" ] 

let mountains: string[] = ["Everest", "K2", "Nanga Parbat", "Rockies", "Alps"]

let rivers: string[] = ["Ravi", "Chenab" , "Jhelum" , "Sutlaj", "Indus" , "Nile" , "Beas"]

let countries: string[] = ["Pakistan", "India", "China", "USA", "Russia", "England"]

let cities: string[] = ["Karachi", "Lahore" , "Islamabad", "Quetta" , "Peshawar", "Multan"]

console.log(" ")

console.log(languages)
console.log(mountains)
console.log(rivers)
console.log(countries)
console.log(cities)
















































