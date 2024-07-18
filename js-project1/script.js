let username = document.getElementById("userName")
let password = document.getElementById("password")
let task = document.getElementById("task")
let button=document.querySelector(".login__btn")
let Welcome =document.querySelector(".welcome")
let balance = document.querySelector(".balance__value")

let loanamnt=document.querySelector(".form__input--loan-amount")
let loanbutton=document.querySelector(".form__btn--loan")
let amountloan=document.querySelector('.form__label--loan')

let transferto=document.querySelector(".form__input--to")
let transferamnt=document.querySelector(".form__input--amount")
let transferbutton=document.querySelector(".form__btn--transfer")

let movements=document.querySelector(".movements")

    let account={
        message:"logged succefully",
        user:"Sugesh",
        pin:111
    }
    let account2={
        message:"logged succefully",
        user:"Ravichandran",
        pin:222
    }
    let account3={
        message:"logged succefully",
        user:"Dhana",
        pin:333
    }

    let account4={
        message:"logged succefully",
        user:"Mowlee",
        pin:9942
    }


    let source=[account,account2,account3,account4]

button.addEventListener("click",function(){
    let i=0;
    while (i<source.length) {
        if (source[i].user==username.value&&source[i].pin==password.value) {
            task.style.opacity=1;
            if (username.value=="Sugesh") {
                Welcome.innerHTML =`welcome back, ${source[i].user}`
                balance.innerHTML =`5000`   
            }
            else if (username.value=="Ravichandran") {
                Welcome.innerHTML =`welcome back, ${source[i].user}`
                balance.innerHTML =`6000`   
            }
            else if (username.value=="Dhana") {
                Welcome.innerHTML =`welcome back, ${source[i].user}`
                balance.innerHTML =`7000`   
            }
            else{
                Welcome.innerHTML =`welcome back, ${source[i].user}`
                balance.innerHTML =`8000` 
            }
           return
        }
        i++; 
    }
    // console.log("invalid");
    (
        alert("invalid username or password")
    )
})
        

                
loanbutton.addEventListener("click",function() {
    let i=0;
    while (i<source.length) {
        if (source[i].user==username.value) {
            let money=parseFloat(loanamnt.value)
            let balamnt=parseFloat(balance.textContent)

            if (money<1000) {
            let totalamount=money+balamnt
            balance.innerHTML=totalamount+"$"

            let divbar=document.createElement("div")
            let typediv=document.createElement("div")
            let datediv=document.createElement("div")
            let amntdiv=document.createElement("div")

            typediv.innerHTML="deposit"
            datediv.innerHTML=new Date().toDateString()
            amntdiv.innerHTML=money
                divbar.classList.add("movements__row")
                typediv.classList.add("movements__type")
                typediv.classList.add("movements__type--deposit")
                datediv.classList.add("movements__date")
                amntdiv.classList.add("movements__value")

            divbar.appendChild(typediv)
            divbar.appendChild(datediv)
            divbar.appendChild(amntdiv)
            movements.appendChild(divbar)
            }
            else{
                amountloan.innerHTML="Amount req only less then 1000"
            }
            return    
        }
    
        i++;
    }
    console.log("invalid error");
})


transferbutton.addEventListener("click",function(){
let i=0;
while (i<source.length) {
    if (source[i].user==transferto.value) {
        let tramnt=parseFloat(transferamnt.value)
        let balamnt=parseFloat(balance.textContent)
        let totalamount=balamnt-tramnt
        if (totalamount>=0) {
            balance.innerHTML=totalamount+"$"

            let divbar=document.createElement("div")
            let typediv=document.createElement("div")
            let datediv=document.createElement("div")
            let amntdiv=document.createElement("div")

            typediv.innerHTML="withdrawal"
            datediv.innerHTML=new Date().toDateString()
            amntdiv.innerHTML=tramnt
                divbar.classList.add("movements__row")
                typediv.classList.add("movements__type")
                typediv.classList.add("movements__type--withdrawal")
                datediv.classList.add("movements__date")
                amntdiv.classList.add("movements__value")

            divbar.appendChild(typediv)
            divbar.appendChild(datediv)
            divbar.appendChild(amntdiv)
            movements.appendChild(divbar)
        }
    }
    i++;
}

})
