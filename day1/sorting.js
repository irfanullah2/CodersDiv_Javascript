
// // sorting an array of strings 

// const fruits = ['Banana' , 'Mango' , 'Apple' , 'Orange']

// // console.log(fruits.sort())
// //  console.log(fruits.reverse())



// // sorting an array of Numbers( sort method takes int values as strings so produce incorrect methods) 

const numbers = [10 , 2 , 30 ,45, 67, 'Banana' , 'Mango' , 'Apple ' , 'Orange' ,  34 , 3 , 2]

// // console.log(numbers.sort()) // it will prodeuce incorrect error  
// //  console.log(numbers.sort(function(a , b ){return a-b })) // Ascendig order 
// //  console.log(numbers.sort(function(a , b ){return b-a })) // Descending order 
 
// console.log(numbers.sort(function(){0.5-Math.random()})) // randomlu sort krta hia 


const customSort = (a , b)=>{
    if(typeof(a)=='number' && typeof(b)=='string'){
        return -1;
    }
    else if(typeof(a)=='string' && typeof(b)=='number'){
        return 1;
    }
    else {
        return a<b ? -1 : 1
    }
    
}

console.log(numbers.sort(customSort))