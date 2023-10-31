console.log('Use the reduce function to calculate the sum of all numbers in the array. The out put should be in the array')


var arr1=[1,2,3,4,5,6,7,8,9,10]

let result1=arr1.reduce((a,b)=>{return a+b})

console.log('Sum is :',result1)

console.log('You have an array of strings. Use the reduce function to concatenate all strings in the array into a single sentence')

let arr2=['india','is','my','country']

console.log(arr2)

let result2=arr2.reduce((a,b)=>{return a+" "+b})

console.log('single sentence :',result2)

console.log(' You have an array of objects representing products with prices. Use the reduce function to calculate the total price of all products.')

let arr3=[
    
    {product:'tomato', price:20} ,
    
    {product:'bhindi', price:15 },
    
    {product:'colgate',price:10},
    
    {product:'milk', price:40 }
    
    ]

    console.log(arr3)

  let result3=arr3.reduce((a,b)=>{
  
    
 return a+b.price;
},0)

  console.log(" Total:",result3)


console.log('credit card quetion')

let arr5=[{ type: "credit",amount: 100 }, { type: "debit", amount: 50 }, { type: "debit", amount: 30 }, ];

let result5=arr5.reduce((a,b)=>(b.type =="debit" ?  a-b.amount : a+b.amount),0)

console.log("account balance",result5)





