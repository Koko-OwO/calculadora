const valOne = document.getElementById('valor1');
const sigOper = document.getElementById('operacion');
const valTwo = document.getElementById('valor2');
const btnOper = document.getElementById('actOpera');
const final = document.getElementById('valorFinal');


btnOper.addEventListener('click', calcular)


function calcular (){
        const signo = sigOper.value
        const v1 = parseFloat (valOne.value)
        const v2 = parseFloat (valTwo.value)

        if((signo == "+" || signo == "-" || signo == "*" || signo == "/") && !isNaN(v1) && !isNaN(v2)){
            let resultado;
            switch (signo) {
                case "+":
                    resultado = v1 + v2
                    break;

                 case "-":
                    resultado = v1 - v2
                    break;    
                case "/":
                    resultado = v1 / v2
                    break;

                 case "*":
                    resultado = v1 * v2
                    break; 
            }

           final.innerText = "=" + resultado
           final.style = "color:black; "
        } else{
            final.style = "color:red; "
            final.innerText = "¡CALCULO IMPOSIBLE!"
        }
}

