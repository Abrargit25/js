console.log('Use map to create a new array by changing each course to uppercase in the course array.')

var arr1= ['html','css','js']
 
let result=arr1.map((arr)=>{ // created an arrow function 

    return arr.toUpperCase()  

})
console.log(result) 


console.log('Use map to create a new array by changing each number to square in the numbers array.')

var arr2=[1,2,3,4,5,6,7,8,9,10]

let result2=arr2.map((sqr)=> {return sqr**2})

console.log(result2)

console.log('You have an array of objects with products and their prices. Use the map function to create a new array containing the products')

let arr3=[
    
{product:'tomato',
price:20,} ,

{product:'bhindi',
price:15, },

{product:'colgate',
price:10, },

{product:'milk',
price:40, }

]


console.log(arr3)
// let arraywithProducts=[]

// for (let i = 0; i < arr3.length; i++) {
//     let prod=arr3[i].product;
//     arraywithProducts.push(prod)
//   }

// let result3=arraywithProducts.map((p)=>{
//     return p;
// })

  let result3=arr3.map((p)=>{
    
    return p.product;
  })

  console.log("Array With Product Name:",result3)



  console.log('You have an array of temperatures in Celsius. Use the map function to convert each temperature to Fahrenheit using the formula (Celsius * 9/5) + 32.')

  let arr4=[32,26,37,18,30,45]
   
  let result4=arr4.map((temp)=>{
   
      let Fahrenheit=(temp * 9/5) + 32.

      return Fahrenheit;

  })
  console.log("temperatures to Fahrenheit:",result4)


  let arr5=[{Name:'Abrar Shaikh',dob:1999},{Name:'Imran Shaikh',dob:2003},{Name:'Saleem',dob:1995}]
  let ages=[]
  let result5=arr5.map((d)=>{
    let currentyear=2023;
    let DOB=d.dob;
    let age=currentyear-DOB;
    ages.push(age)
    return d;
  })

  console.log(result5)
  console.log('Age current year 2023 - birthyear',ages)