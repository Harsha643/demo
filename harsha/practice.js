// // var obj={
// //     "name":"rahul",
// //     "print":"function",

   
// // }
// // console.log(obj.name)

// var str="harshavardhan"
// a=str.toUpperCase();
// console.log(a)

// console.log(Array.from("123"))//
// console.log(str[0])
// console.log(str.length)
// console.log(str[str.length-1])
// console.log(str[-2])
// console.log(str.charCodeAt(5))

// console.log(`${str.slice(0,1).toUpperCase()}${str.slice(1,6)}${str.slice(6,7).toUpperCase()}${str.slice(-6,12)}${str[12].toUpperCase()}`);

// console.log(str.slice(-4,-1))

// console.log(str.substring(-1));
// console.log(str.split(""));


// console.clear()

// class arvind{
//     _name;
//     age;
//     wedding;
//     gender;

//     constructor(_name,age,wedding,gender){
//         this._name=_name;
//         this.age=age;
//         this.wedding=wedding;
//         this.gender=gender;
//     }


// }
// var family=new arvind("arvind",50,26-10,"f")
// console.log(family._name)

// num=prompt("enter the number:")
// count=0
// sum=0
// sum1=0
// if(Number(num)>0){
// for(i=0;i<=num.length-1;i++){
// char=Number(num[[i]])

// for(j=1;j<=char;j++){
//     if(char%j==0){
//         count+=1
//     }
// }
// if(count==2){
//    sum=sum+char
//    console.log(`its prime numberr :${char}`)
//    count=0
// }else{
//     sum1=sum1+char
//     console.log(`its not prime numberr :${char}`)
//     count=0
// }
    
// }
//     console.log(sum)
//     console.log(sum1)
// }else{
//     console.log("enter the correct number")
// }

// let a=prompt("enter the palindrome")
// let b= a.split().reverse().join("")
// if (a==b){
//     console.log()
// }else{
//     console.log("it is not a palindrome")
// }

// let a="    harshavardhan"
// b=a.length
// console.log(b)
// c=a.charAt(5)
// console.log(c)
// d=a.at(-2)
// console.log(d)
// e=a.substring(5)
// console.log(e)
// f=a.toUpperCase().toLowerCase()
// console.log(f)
// h="battu    "
// g=a.concat(h)
// console.log(g)
// i=g.trim()
// console.log(i)
// j=i.slice(6,13)
// console.log(j)
// k=i.slice(-5)
// console.log(k)
// l=i.repeat(6).split("u")

// console.log(l)
// m=i.replaceAll("a","j")

// console.log(m)
// n=i.indexOf("v")
// console.log(n)
// zz="its time to sleep"
// o=zz.include("its")
// console.log(o)



// _name.forEach((a,b,c)=>{
//     _name=`${a.replace("kk")}    ${c[1].replace("kk")}`
// })
// console.log(_name)
// console.log(-_nam
//get : 
// let _name=[1,2,3,4,5,6,7,8,9,10]
// let a=[]
// _name.map((x,b,c)=>{

//         if(c[b]%2!==0){
//           console.log( a.push(c[b]))
//          }
//          }
//         )
   
        let _name = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = [];
_name.map((x) => {
    if (x % 2 !== 0) {
        a.push(x)
    }
});
console.log(a);