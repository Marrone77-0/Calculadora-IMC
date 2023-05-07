

/* Criando e iniciando variaveis do projeto. */
var height_Input;
var weight_Input;
var bottom_Cal = document.querySelector('#calcular');
var bottom_Clear = document.querySelector('#limpar');
var span_result_imc = document.querySelector('#span-result-imc');
var status_imc = document.querySelector('#status-imc');
var modal_result = document.querySelector('#modal-imc');
var tag_weight_min = document.querySelector('#min-weight')
var tag_weight_max = document.querySelector('#max-weight')
var cal_weight_min;
var cal_weight_max;





/* Função que limpa os campos de input e que desativa o modal.  */

function clearInputs(){
    height_Input = document.querySelector('#altura');
    weight_Input = document.querySelector('#peso');
    weight_Input.value = "";
    height_Input.value = "";
    if(modal_result.style.display == 'block'){
        modal_result.style.display = 'none'
        
    }
}

/* Função que calcula o IMC, e que ativa o modal com os resultados dos calculos. */

function cal_Imc(){
    
    height_Input = +document.querySelector('#altura').value;
    weight_Input = +document.querySelector('#peso').value;
    var result_Imc;
   
    if(height_Input == 0 || weight_Input == 0){
        modal_result.style.display == 'none'
        
        
    } else{
    
    result_Imc = weight_Input / (height_Input * height_Input)
    modal_result.style.display = 'block';
    span_result_imc.textContent = result_Imc.toFixed(1) + ' kg/m²'
    return result_Imc;
    }
}

/* Função que usa o resultado do calculo de imc, e mostra o usuario em que condição ele está, sendo elas: (Magreza, Normal, Sobrepeso, Obesidade) a depender da condição a cor da palavra é alterada as cores são: (verde, vermelho). */ 

function conversor_imc(imc_resultado){

    if(imc_resultado != 18.5 && imc_resultado < 18.5){
        status_imc.innerText = 'Magreza';
        status_imc.style.color = '#e5383b'
        span_result_imc.style.color = '#e5383b'
        
        
    
    }  else if(imc_resultado >= 18.5 && imc_resultado <= 24.9){
        status_imc.innerText = 'Normal'
        status_imc.style.color = '#03C03C'
        span_result_imc.style.color = '#03C03C'
       
        
    
    }  else if(imc_resultado >= 24.9 && imc_resultado <= 30){
        status_imc.innerText = 'Sobrepeso'
        status_imc.style.color = '#e5383b'
        span_result_imc.style.color = '#e5383b'
     
        
    }  else if(imc_resultado > 30){
        status_imc.innerText = 'Obesidade'
        status_imc.style.color = '#e5383b'
        span_result_imc.style.color = '#e5383b'
       
    }    
}

/* Função que calcula o peso minimo e maximo que o usúario deve manter para que esteja em boa condição, o calculo usa a altura do usuario. */

function weight_ideal(){
    height_Input = document.querySelector('#altura').value
    cal_weight_min = 18.5 * (height_Input * height_Input);
    cal_weight_max = 24.9 * (height_Input * height_Input);
  
  
    tag_weight_min.textContent = cal_weight_min.toFixed(1)
    tag_weight_max.textContent = cal_weight_max.toFixed(1)
    

}

/* Evento que é ativado quando o usuario clica no botão "Limpar", a função de limpar os campos inputs é ativada.  */

bottom_Clear.addEventListener('click', event => {
    event.preventDefault()
    clearInputs();
});


/* Evento que é ativado quando o usuario clica no botão "Calcular", 3 funções são ativadas. */

bottom_Cal.addEventListener('click', e =>{
    
    e.preventDefault()
   
    conversor_imc(cal_Imc()) 
    weight_ideal() 
})























