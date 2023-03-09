
/**** Query Selectors ******/
const Bill = document.querySelector('.Bill')
const  people = document.querySelector('.people')

const  tipAmount = document.querySelector('.tip_Amount')
const  totalAmount = document.querySelector('.total_Amount')

const buttonsDiv = document.querySelector('.buttons-div')
const resetAPP = document.querySelector('.reset')

const zeropeople = document.querySelector('.zeropeople')

let tipPercentage = 0


/***** event listner *******/
buttonsDiv.addEventListener('click',(e)=> {
    tipPercentage = e.target.value
    calculateTip()
})


people.addEventListener('change',(e)=> {
    if(e.target.value < 1){
        zeropeople.style.display = 'block'
        people.style.border = '1px solid red'
    }
    else{
        zeropeople.style.display = 'none'
        people.style.border = '1px solid grey'
    }
})

/*****Tip calc function ****/
function calculateTip (){
    tipPerPerson =  Math.floor(Bill.value * tipPercentage / 100) / people.value
    tipAmount.textContent = `$${tipPerPerson}`
    totalAmount.textContent = `$${Math.floor(Bill.value / people.value) + tipPerPerson}`
}

/*** RESET function ****/
resetAPP.addEventListener('click',()=>{
    Bill.value = 0
    people.value = 1
    tipAmount.textContent = '$0'
    totalAmount.textContent = '$0'
    zeropeople.style.display = 'none'
    people.style.border = '1px solid gray'
})