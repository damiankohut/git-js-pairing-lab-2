//1
function OneHundredToFive() {
    for (let i = 100; i >= 5; i-=1) {
        console.log(i)
    }
}

//OneHundredToFive()

//2

function absoluteValue(num){
    if(Number.isInteger(num)){
        
        if(num < 0){
            return(num * -1)
        }else{
          return num  
        }
        
        
    }else{
        if(typeof num === "number"){
            return num
        }else{
            return null
        }
    }
//     if(num < 0){
//  return(num * -1)
//     } 
//     if (num === null ){
//     return null
//     }
}
console.log(absoluteValue(7.33))
console.log(absoluteValue("hi"))
console.log(absoluteValue(-4))



