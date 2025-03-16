let inputBox=document.querySelector(".inputBox");
let heading=document.querySelector(".heading");
let btn=()=>{
    let rand=Math.random()*10+0;
    let random=Math.floor(rand);
    

    if(inputBox.value==random){
        heading.innerText="You won";
        
        }
        else{
            heading.innerText="Try Next time"
        }
        inputBox.value="";
        console.log(random)
}


console.log(Date())
console.log(new Date());
