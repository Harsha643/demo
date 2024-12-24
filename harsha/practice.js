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

num=prompt("enter the number : ")
sum=0

for(i=0;i<=num.length;i++){
    if(Number(num[i])%i==0){
        sum+=Number(num[i])
    }
    
}

console.log(`its is not prime no: ${sum}`)