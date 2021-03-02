// CLASS FOR CALCULATOR//

class AppleCalculator {
    constructor(display){
        this.display = display;
        this.clearAll()
    }

    clearAll(){
        this.currentValue = "0";
        this.previousValue = "";
        this.operation = undefined

    }

    clearAc (){
     this.currentValue = "0"
    }

    delete(){
       if (this.currentValue ==="" || typeof(this.currentValue) !== "string")return
        if(this.currentValue !== ""){
            this.currentValue = this.currentValue.slice(0,-1);
        }  
    }

    plusMinus(){
      if (this.currentValue ==="")return
        if(this.currentValue !== ""){
            this.currentValue = this.currentValue * -1;
        }
    }

    percent(){
        if (this.currentValue ==="")return
        if(this.currentValue !== ""){
            // this.currentValue = this.currentValue/100; OR
            this.currentValue /= 100;
        }

    }

    numberSelect(numberClicked){
         
         
        if(numberClicked==="." && this.currentValue.includes("."))return
        
        
        else if(this.currentValue.charAt(0)==="0"){
            
            this.currentValue = ((this.currentValue.replace("0",numberClicked)).toString() + numberClicked.toString()).slice(1);
            
            
        }

        else{
            this.currentValue = this.currentValue.toString() + numberClicked.toString();
        
        
        }
        
            
        
    }
 
    operatorSelect(operatorClicked){
        if(this.currentValue ==="0")return

        else if(this.previousValue !== ""){
            this.computation()
        }

       
       
        this.operation = operatorClicked
        this.previousValue = this.currentValue
        this.currentValue ="" ;
        
      
    }

    computation(){
        let total;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        if(isNaN(prev) || isNaN(current))return

        switch(this.operation){
            case"÷":
            total = prev/current
            break;
            case"×":
            total = prev*current
            break;
            case"–":
            total = prev-current
            break;
            case"+":
            total = prev+current
            break;
            default:
                return
        }
       this.currentValue = total;
       this.operation = undefined;
       this.previousValue = "";
    }
   
    screenDisplay(){
       
         this.display.innerText = this.currentValue
        
        
    
     
    }
}



// DOM ELEMENTS//
const display = document.querySelector(".display");

const ac = document.querySelector(".ac");
const pm = document.querySelector(".pm");
const percent = document.querySelector(".percent");

const operandBtn = document.querySelectorAll(".operator");
const numberBtn = document.querySelectorAll(".number");
const equalBtn = document.querySelector(".operator-equal");
const decimalBtn = document.querySelector(".number-decimal");



// ADD EVENTS//

let calculator = new AppleCalculator(display)

numberBtn.forEach(function(number){
    number.addEventListener("click", ()=>{
        calculator.numberSelect(number.innerText)
        calculator.screenDisplay();
    })
})

ac.addEventListener("click", function(){
    calculator.clearAll()
    calculator.screenDisplay()
})

operandBtn.forEach(function(optBtn){
    optBtn.addEventListener("click",function(){
        calculator.operatorSelect(optBtn.innerText)
        calculator.screenDisplay()
    })
})

equalBtn.addEventListener("click",function(){
    calculator.computation();
    calculator.screenDisplay();
    
})

percent.addEventListener("click",function (){
    calculator.percent();
    calculator.screenDisplay();
})

pm.addEventListener("click",function(){
    calculator.plusMinus();
    calculator.screenDisplay();
})

display.addEventListener("dblclick",function(){
   calculator.delete();
   calculator.screenDisplay();
})







// Clock//
const hourTime = document.querySelector(".hour");
const minuteTime = document.querySelector(".minute");

// Set time//
let clock = ()=> {
    let today = new Date ();
    hourTime.innerText = today.getHours();
    minuteTime.innerText = today.getMinutes();
    console.log(today.getMinutes())
    
     
   if(today.getHours() > 12){
        hourTime.innerText = today.getHours() -12;
    };

    if (today.getMinutes() < 10){
        let minuteString = today.getMinutes().toString();
        minuteTime.innerText = minuteString.padStart(2,"0");
    };

    if (today.getHours()===0){
        hourTime.innerText = 12
    }

   
}

setInterval(clock,6000);
clock();

