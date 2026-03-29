// let arr=[1,2,3,4,5]
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// console.log(arr.push(6))
// console.log(arr)
// problem where we must return the array elemts whose submation is 5 but it souldint return(4,1)&(3,2)
//my logic with help of gpt
// let arr = [1, 2, 3, 4, 5, 6];
// let target = 5;

// let seen = {};

// for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];
//     let needed = target - current;

//     if (seen[needed]) {
//         console.log( needed, current);
//     }

//     seen[current] = true;
// }

//his logic 
// let arr=[1,2,3,4,5]
// j=arr.length-2;
// for(i=0;i<arr.length;i++){
//     if(arr[i]+arr[j]==5 && i<j){
//         console.log(arr[i]+":"+arr[j]);

//     }
//     j--
// }

//obj
let arr={name:"appas",age:26,college:"jos"}
// console.log(arr["age"])
//ipdating age to 25
arr.age=25
console.log(arr["age"])