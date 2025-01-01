
// // post
// let options ={
//     "method":"POST",
//     "headers":{
//         "context-type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
//             "id": 1,
//             "todo": "Do something nice for someone you care about",
//             "completed": false,
//             "userId": 152
//           },
//           {
//             "id": 2,
//             "todo": "Memorize a poem",
//             "completed": true,
//             "userId": 13
//           }
//     )
// }
// let URL = "http://localhost:3000/users"
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok){
//         console.log(res.statusText)
    
//     }
// })




// delete
// let options ={
//     "method":"DELETE",

// }
// let URL = "http://localhost:3000/users/5"
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok){
//         console.log(res.statusText)
    
//     }
// })




// // PATCH
// let options ={
//     "method":"PATCH",
//     "headers":{
//         "context-type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
            
//             "name":"vardhan"
//         }
//     )
// }
// let URL = "http://localhost:3000/users"
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok){
//         console.log(res.statusText)
    
//     }
// })

// put

// let options ={
//     "method":"PUT",
//     "headers":{
//         "context-type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
            
//             "name":"vardhan"
//         }
//     )
// }
// let URL = "http://localhost:3000/users/5"
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok){
//         console.log(res.statusText)
    
//     }
// })


 
// at a time all Element are delete
// let options={
//     "method":"DELETE",
// }
// let URL = "http://localhost:3000/users"
// fetch(URL)
// .then((res)=>res.json())
// .then(data=>{
//     for(let i=0;i<data.length;i++){
//         fetch(`http://localhost:3000/users/${data[i].id}`,options)
//         .then((res)=>{
//                 if(res.ok){
//                     console.log(res.statusText)
                
//                 }
//             })

//     }
// })

// let options ={
//     "method":"GET",
//     "headers":{
//         "context-type":"application/json"
//     },
  

// }
// let url="https://fakestoreapi.com/products/"
// fetch(url)
// .then(res=>res.json())
// .then(data=>console.log(data))
//     // for(let i = 0; i < data.length; i++) {
//     //     let obj = data[i];
//     //     options.body = JSON.stringify(obj);
//     //     fetch(url, options)
//     //         .then(res => {
//     //             if (res.ok) {
//     //                 console.log(res.statusText);
//     //             }
//     //         })
//     //     }

// fetch("http://localhost:3000/users/3094",{"method":"PATCH",
//     "headers":{
//         "context-type":"application/json"
//     },
//     body:JSON.stringify({

//         "name":"hatsha"

//     })

// })
// .then(res=>res.json())
// .then(data=>data.json())

async function execute(){
    console.log("asd")
    return "js"

}
console.log(execute())
