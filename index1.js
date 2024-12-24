// num=prompt("enter the number :")
// num1=0
// for(i=0;num.length-1>=i;i++){

//     if(0==Number(num[i])){
//         num1+=Number(num[i])
//     }
// }
// console.log(num1)

num2=prompt("enter the second number:")
sum=0;
sum1=0;

for(i=0;i<=num2.length-1;i++){
    if(sum>Number(num2[i])){
        sum+=Number(num2[i])
     
    }
    else if(sum1>Number(num2[i])){
        sum1+=Number(num2[i])
    }

}
console.log(`sum:${sum1}`)
console.log(sum)