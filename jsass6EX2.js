console.log('Use the filter to create a new array containing only even numbers')

let arr1=[1,2,3,4,5,6,7,8,9,10]

let result1=arr1.filter((p)=>{

return p%2==0;
}

)
console.log("Even numbers",result1)


console.log('Use filter to filter out countries having less than 6 character.')

var countries=["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"]

let result2=countries.filter((six)=>{

    return six.length<=6;
})

console.log('countries having less than 6 character:',result2)

console.log('Use filter to filter out country start with E')

let result3=countries.filter((E)=>{

    return E.startsWith('E')

})

console.log(result3)

console.log('Create a new array containing only products with prices less than $10. Suppose you have an array of objects representing products')

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

  let result4=arr3.filter((p)=>{
    return p.price<=10;
  })

  console.log(" Product price less than 10:",result4)


  console.log('You have an array of objects representing employees. Use the filter function to create a new array containing only employees who have a salary greater than or equal to $50,000')



  let arr4=[
    
    {Employee:'Abrar',
    Salary:80000,} ,
    
    {Employee:'Imraan',
    Salary:55000, },
    
    {Employee:'Saleem',
    Salary:35000, },
    
    {Employee:'Salman',
    Salary:20000, }
    
    ]


    console.log(arr4)

    let result5=arr4.filter((p)=>{
      return p.Salary>=50000;
    })
  
    console.log(" Employee Salary greater than 50k:",result5)