




// Todos los números

let allNumber = document.querySelectorAll(".section-div2-div1-number");
let allSigns = document.querySelectorAll(".section-div2-div2-signo");
let numberText = document.querySelector(".section-div1-p-aparecenNumeros");


let number1 = "";
let number2 = "";
let number3 = "";
let threeNumberPressed = false;
let signPressedText = "";
let signPressedTextEqual = "";
let signPressed = false;
let error = "";


// Puedo mejorarlo los calculos con funciones, pero está bien


allNumber.forEach((number) =>{
    number.addEventListener("click", ()=>{
        
        if(signPressed == false && threeNumberPressed == false){
            number1 += number.textContent.trim();
            numberText.textContent = number1;
            
        }else if(signPressed == true && threeNumberPressed == false){
            number2 += number.textContent.trim();
            numberText.textContent = number2;
        }else if(signPressed == true && threeNumberPressed == true){
            number2 += number.textContent.trim();
            numberText.textContent = number2;
            console.log(number2)
        }

    })
})


allSigns.forEach((sign) =>{
    sign.addEventListener("click", (e)=>{
        let signPress = sign.textContent.trim()
        if(signPress != "="){
            signPressedText = sign.textContent.trim();
            signPressedTextEqual = "";
            if(threeNumberPressed == true){
                signPressed = true;
                number2 = "";
            }
        }else if(signPress == "="){
            signPressedTextEqual = sign.textContent.trim();
        }
        
        if((signPressedText != "CE" && signPressedTextEqual != "=") && signPressed == false){
            signPressedText = sign.textContent.trim();
            signPressed = true;
            numberText.textContent = signPressedText;
            
        }else{
            numberText.textContent = signPressedText;
        }


        if(signPressedTextEqual == "="){
            if(threeNumberPressed == false){
                threeNumberPressed = "";
                if(signPressedText == "+"){
                    number3 = Number(number1) + Number(number2);
                    numberText.textContent = number3;
                }else if(signPressedText == "-"){
                    number3 = Number(number1) - Number(number2);
                    numberText.textContent = number3;
                }else if(signPressedText == "/"){
                    if(Number(number2) != 0){
                        number3 = Number(number1) / Number(number2);
                        numberText.textContent = number3;
                    }else{
                        numberText.textContent = "No se puede dividir por 0";
                    }
                    
                }else if(signPressedText == "*"){
                    number3 = Number(number1) * Number(number2);
                    numberText.textContent = number3;
                }
                signPressed = false;
                threeNumberPressed = true;
                number1 = "";
                number2 = "";
                signPressedText = "";
                signPress = "";





            }else if(threeNumberPressed == true){
                console.log("funciona")
                if(signPressedText == "+"){
                    number3 = Number(number3) + Number(number2);
                    numberText.textContent = number3;
                }else if(signPressedText == "-"){
                    number3 = Number(number3) - Number(number2);
                    numberText.textContent = number3;
                }else if(signPressedText == "/"){
                    if(Number(number2) != 0){
                        number3 = Number(number3) / Number(number2);
                        numberText.textContent = number3;
                    }else{
                        numberText.textContent = "No se puede dividir por 0";
                    }
                    
                }else if(signPressedText == "*"){
                    number3 = Number(number3) * Number(number2);
                    numberText.textContent = number3;
                }
                signPressed = false;
                threeNumberPressed = true;
                number1 = "";
                number2 = "";
            }
        }


        if(signPressedText == "CE"){
            numberText.textContent = "";
            number1 = "";
            number2 = "";
            number3 = "";
            threeNumberPressed = false;
            signPressedText = "";
            signPressed = false;
            signPress = "";
            signPressedTextEqual = "";
            console.log("funciona")

            

        }
    

    })
})



// Eventos de teclado

const allNumberKeyboard = ["1","2","3","4","5","6","7","8","9","0"]
const allSignsKeyboard = ["+", "-", "*", "/", "=", "Escape"]


document.addEventListener("keydown", (e) =>{
    // console.log(e.key)
    if(allNumberKeyboard.includes(e.key)){
        if(signPressed == false && threeNumberPressed == false){
            number1 += e.key;
            numberText.textContent = number1;
            
        }else if(signPressed == true && threeNumberPressed == false){
            number2 += e.key;
            numberText.textContent = number2;
        }else if(signPressed == true && threeNumberPressed == true){
            number2 += e.key;
            numberText.textContent = number2;
            console.log(number2)
        }
    }

    if(allSignsKeyboard.includes(e.key)) {

        if(e.key.includes("+", "-", "*", "/")){
            signPressed == true
            numberText.textContent = e.key;
            console.log("Pasa")
        }


        if(e.key == "="){
            number3 = Number(number1) + Number(number2);
            numberText.textContent = number3;
        }
    }
})
    

























