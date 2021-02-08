function calcularBhaskara(){
    let valorA = document.getElementById("a").value
    let valorB = document.getElementById("b").value
    let valorC = document.getElementById("c").value
   
    //validação dos campos do formulário 
   if(valorA != ""){
        if(valorB != ""){
            if(valorC != ""){

                let delta = valorB*valorB-4*valorA*valorC
               valorDelta = Math.sqrt(delta)
                
               let calcBhaskaraPositivo = (-valorB + valorDelta)/(2*valorA)
               let calcBhaskaraNegativo = (-valorB - valorDelta)/(2*valorA)

               document.getElementById('X1').innerHTML = "o x1 é: " + calcBhaskaraNegativo;
               document.getElementById('X2').innerHTML = "o x2 é: " + calcBhaskaraPositivo;





            }else{
                alert("Preencha o valor de C!")
            }

        }else{
        alert("Preencha o valor de B!")
     }

   }else{
       alert("Preencha o valor de A!")
   }
}