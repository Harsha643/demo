const  URL="https://dummyjson.com/todos";
fetch(URL)
.then(harsha => {
    if(harsha.completed){
        return harsha.json();
    }
}).then(data=>console.log(data.todos))




const  URL_1="https://dummyjson.com/todos";
fetch(URL_1)
.then(arvd => {
if(arvd.ok){
    return arvd.json()
    
}
}).then(data=>console.log(data.todos))






const URL_2="https://jsonplaceholder.typicode.com/photos"
fetch(URL_2)
.then(tha=>{
    if(tha.ok){
       
        return tha.json()
    }
}).then(thu=>console.log(thu))





const URL_3="https://randomuser.me/api/"
fetch(URL_3)
.then(ved=>{
    if(ved.ok){

        return ved.json()
    }
}).then(vedhu=>console.log(vedhu.results))





const URL_4="https://pokeapi.co/api/v2/pokemon/ditto"
fetch(URL_4)
.then(katha=>{
    if(katha.ok){
        return katha.json()
    }
}).then(data=>console.log(data))