let inpEl = document.querySelector('input')
let btns= document.querySelectorAll('button')

for(let button of btns){
    button.addEventListener('click', function(e){
           let btnText=e.target.innerText
        //    console.log(btnText);
        if(btnText==='C'){
            inpEl.value=""
        }else if(btnText==='='){
            try{ //sahi kaam
                inpEl.value=eval(inpEl.value)
            }catch(err){ //error handling
                inpEl.value="Invalid"
            }
        }else{
            inpEl.value=inpEl.value+btnText
        }
    })
}