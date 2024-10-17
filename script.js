// Exercise 1: Filtering an Array
// Problem: Write a function that takes an array of numbers and returns a new array containing only the even numbers.
function getEvenNumbers(arr){
    return arr.filter(num => num%2===0);
}
const numbers=[1,2,3,4,5,6,7,8,9,10];
var evenNumbers= getEvenNumbers(numbers);
console.log(evenNumbers);  // output: (5) [2,4,6,8,10]
//--------------------------------------------------------------------------------------------------------------
// Exercise: 2 Find the Largest Number
//Problem: Write a function that takes an array of numbers and returns the largest number in the array.
function findLargestNumber(arr){
    return Math.max(...arr);
}
//alternative solution
function findLargest(arr){
    let largest=arr[0];
    for(let i=1; i<arr.length;i++){
        if (arr[i] > largest){
            largest=arr[i];
        }
    }
    return largest;
}
const numbers1=[8,5,10,99,3,300,0];
console.log(findLargestNumber(numbers1)); //output: 300
console.log(findLargest(numbers1));       //output: 300
//--------------------------------------------------------------------------------------------------------------
// Exercise: 3 Reverse a String
// Problem: Write a function that takes a string as input and returns the same string but reversed.
function reverseStr1(str){
    return str.split('').reverse().join('');
}
//alternative solution
function reverseStr2(str){
    let reversed='';
    for (let i=str.length-1; i>=0; i--){
        reversed+=str[i];
    }
    return reversed;
}
const word="aliaa";
var reversedWord1=reverseStr1(word);
var reversedWord2=reverseStr2(word);
console.log(reversedWord1);  //output: aaila
console.log(reversedWord2);  //output: aaila
//--------------------------------------------------------------------------------------------------------------
// Exercise: 4 Remove Duplicates
// Problem: Write a function that takes an array of numbers and returns a new array without duplicate numbers.
function removeDuplicates(arr){
    return [...new Set(arr)];
}
const arrayNum=[11,2,2,5,9,5,11];
var uniqueArray=removeDuplicates(arrayNum);
console.log(uniqueArray);   //output:  (4) [11,2,5,9]