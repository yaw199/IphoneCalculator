// CLASS MODULE//

class Calculator{
    constructor(display){
        this.display = display;
    }

    chooseOperand(operation){
        this.firstValue ="";
        this.secondValue = "";
        this.operatorValue = ""; 

        if (this.firstValue === "0") return
        else if(!this.display.innerText==="0"){
            this.firstValue = this.display.innerText
        }

        else if (!this.firstValue==="" && !operation==="" ){
            this.secondValue = this.display.innerText;
              this.compute();
              console.log(this.secondValue)
        }
            
        

        
        this.operatorValue = operation;
        this.firstValue = "";
        

        


    }

    compute(){
        let totalValue;
        let value1 = parseFloat(this.firstValue);
        let value2 = parseFloat(this.secondValue);
       if (isNaN(value2) || isNaN(value1)) return 
        switch (this.operatorValue){
            case "÷":
                totalValue = value1 / value2;
            break;
            case "×":
                totalValue = value1*value2;
            break;
            case "–":
                totalValue = value1 - value2;
            break;
            case "+":
                totalValue = value1 + value2;
            break;
            default:
                return
        }
        
        this.firstValue = totalValue;
        this.operatorValue = "";
        this.display.innerText = totalValue;
    }

 screenDisplay(){
    this.display.innerText = this.firstValue
    
 
    } 


}

const mycalc = new Calculator(display);
// AddEventlistener//

numberBtn.forEach(function(number){
    number.addEventListener("click", function(){
     appendbtn(this.innerText);
     
      
           
        
        
    })
})

operandBtn.forEach(function(operation){
    operation.addEventListener("click", function(){

    mycalc.chooseOperand(this.innerText);
    mycalc.screenDisplay();
    

    })   
})

decimalBtn.addEventListener("click",function(){
    dotRes();
})

ac.addEventListener("click", function(){
    display.innerText = "0";
})

display.addEventListener("dblclick", function (){
    display.innerText = display.innerText.slice(0,-1);
})

pm.addEventListener("click", function(){
    let prevText = display.innerText;
    let NewText = -prevText;
    display.innerText = parseFloat(NewText);
})

percent.addEventListener("click", function (){
    let previous = display.innerText;
    let toNum = parseFloat(previous);
    let pNum = toNum/100;

    display.innerText = pNum;
    
    
})

equalBtn.addEventListener("click", function(){
    mycalc.compute();
    mycalc.screenDisplay()
});


//Functions//

// chooseoperand//



// function chooseOperand(ops){
//     let firstValue = ""
//     let currentValue = display.innerText;
//     let operatorValue=""
//     if (display.innerText === "0") return
//     else{
//       operatorValue = ops;
      
//     }

//     firstValue = currentValue;
//     operatorValue = ops;
//     display.innerText = ""
    
//     console.log(firstValue)
//     console.log(operatorValue)
// }

// let compute = (operator) => {
//     let firstValue = null;
//     let currentValue = display.innerText;
//     let totalValue;
//    if(!currentValue ==="0"){
//        firstValue = parseFloat(currentValue);
//        chooseOperand() 
//        display.innerText = "0";   
//        return;
//    }
   

//    switch(operator){

//     case "x":
//         console.log("isclick")
//         break;

//    }

// }

// combine comma//

function joinComma (){
    let currentNum = display.innerText;
    return currentNum.split(",").join("");
}

// Dot restriction//
function dotRes(){
    let currentNum = joinComma();
    if(!currentNum.includes(".")) {
    display.innerText = currentNum + ".";
    }
    
}

// Append //

function appendbtn(button){

   let currentNum = joinComma();
   if(currentNum === "0"){
       display.innerText = button;
   }

   else{
       display.innerText=parseFloat(currentNum + button).toString();
       
   }
}
