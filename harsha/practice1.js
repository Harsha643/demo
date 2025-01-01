/**
 *  what is an array ?
 * 
 */
//push()

// let a =[1,2,3,4]
// console.log(a.push(5,6,7,8))//8
// console.log(a)//[1,2,3,4,5,6,7,8]

// Pop()
// let a=[1,2,3,45]
// console.log(a.pop())
// console.log(a)

//shift()

// let a=[2,3,4,4,5]
// console.log(a.shift())
// console.log(a)

//unshift()
// let a=[23,45,66,77]
// console.log(a.unshift(46,47,55))
// console.log(a);


//slice(start,end)

// let a=[1,2,3,4,5,6,7]
// b=a.slice(-5,7)
// console.log(a)//[1,2,3,4,5,6,7]
// console.log(b)//[3,4,5,6,7]

//splice(start,deletecount,items......)
// let a=[1,2,3,4,5,6,7,8]
// a.splice(4,2,6,6)
// console.log(a)


// What comes next in the sequence: 1, 4, 9, 16, 25, ___?

// num="1,2,3,4,5,6"
// c=0;
// for(i=0;i<=num.length-1;i++){
//     c=num[i]**2
// }
// console.log(c)

//Write a program to print all odd numbers between 1 and 20

// num=+prompt("enter the number")
// even=0
// odd=0
// for(i=1;i<=num;i++){
//     if(i%2==0){
//         // console.log("even")
//         even+=1

//     }
//     else{
//         // console.log("odd")
//         odd+=1
//     }
// }
// console.log(`even: ${even}`)
// console.log(`odd: ${odd}`)

// num=7
// count=0

// for(i=1;i<=num;i++){
 
  
//     if(num%i==0){
//         count+=1
       
//     }
    
// }  
// if(count==2){
//     console.log(`prime `)
//     count=0
// }else{
//     console.log(`not prime ` )
//     count=0
// }


// debugger
// num=7
// count=0

// for(i=1;i<=num;i++){
 
//     for(j=1;j<=i;j++){
//         if(i%j==0){
//             count+=1
           
//         }
//       }
//       if(count==2){
//         console.log(`prime ${j}`)
//         count=0
//     }else{
//         console.log(`not prime  ${j} ` )
//         count=0
    
//  }
  
// j=0
 
    
// }  




// }

// p=0
// np=0
// if(num>1){
// for(i=2;i<=num;i++){
    
//     if(i%i==0){
//         count+=1
//     }
//     if(count==1){
//         p+=1
//         count=0
//     }else{
//         np+=1
//         count=0
//     }
// }
// console.log(p)
// console.log(np)
// }


// function harsha(str1,str2){
//     return (str1.length==str2.length)?console.log("true"):console.log("fasle")

// }
// harsha("harsha","vardha")
try{                                                            
      console.log("rishi")                                          
      setTimeout(() =>{console.log(a); },0)
    }   
    catch(error){  console.log("ohoo")  
        console.log(error)}
      
        console.log("akash")
