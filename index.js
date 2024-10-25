const display= document.querySelector('input')
const buttons= document.querySelectorAll('.button')

let string= ''
let memory= 0

Array.from(buttons).forEach(button=>{
    button.addEventListener('click', function(e){
        if(e.target.innerHTML=='='){
            string= eval(string)
            display.value=string
            string=''
        }else if(e.target.innerHTML=='%'){
            string= eval(string)/100
            display.value=string
            string=''
        }
        else if(e.target.innerHTML=='AC'){
            string=''
            display.value= string
        }else if(e.target.innerHTML=='DEL'){
            string= string.slice(0,-1)
            display.value= string
        }else if(e.target.innerHTML=='M+'){
            memory += parseFloat(display.value)
            display.value=string
        }else if(e.target.innerHTML=='M-'){
            memory -= parseFloat(display.value)
            display.value=string
        }else if(e.target.innerHTML=='MR'){
            display.value= memory
        }
        else{
            string += e.target.innerHTML
            display.value=string
            console.log(string)
        }
    })
})
