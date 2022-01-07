function criaEstados(){
    const selectEstados= document.querySelector("select");
    const uf=['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    for (index=0; index<uf.length; index+=1){
        let elemento= document.createElement("option");
        elemento.innerText=uf[index];
        elemento.value=uf[index];
        selectEstados.appendChild(elemento);
    }
}

function validarDados(){
    let name= document.querySelector("[name=nome]");
    if (name.value.length >40 || name.value.length === 0){
        alert("Nome inválido");
    }

    let email=document.querySelector("[name=email]");
    if (email.value.length >50 || email.value.length === 0){
        alert("Email inválido");
    }
    let cpf=document.querySelector("[name=cpf]");
    if (cpf.value.length >11 || cpf.value.length === 0){
        alert("CPF inválido");
    }
    let endereco=document.querySelector("[name=end]");
    if (endereco.value.length >200 || endereco.value.length === 0){
        alert("Endereco inválido");
    }
    let cidade=document.querySelector("[name=city]");
    if (cidade.value.length >28 || cidade.value.length === 0){
        alert("Cidade inválida");
    }
    let estado=document.querySelector("[name=estado1]");
    if (estado.value === ""){
        alert("Estado inválido");
    }
    let tipo1=document.querySelector("#tipoCasa");
    let tipo2=document.querySelector("#tipoApto");
    if (tipo1.checked === false && tipo2.checked === false){
        alert("Tipo inválido");
    }
    let resumo= document.querySelector("[name=resumo]");
    if (resumo.value.length > 1000 || resumo.value.length === 0){
        alert("Resumo inválido");
    }
    let dCargo= document.querySelector("[name=dCargo]");
    if (dCargo.value.length > 500 || dCargo.value.length === 0){
        alert("Descricao do cargo inválida");
    }
    
    let dInicio= document.querySelector("[name=dInicio]");
    let data= dInicio.value.split("/");
    let dia= data[0];
    let mes= data[1];
    let ano= data[2];

        if (dia < 1 || dia > 31 || dia.length!==2){
            alert("Formato dia Invalido");
        }
        if (mes < 1 || mes > 12 || mes.length!==2){
            alert("Formato mes Invalido");
        }
        if(ano.length!==4 || ano < 1900){
            alert("Formato ano Invalido");
        }
    }

function botaoSubmeter(event){
    event.preventDefault();
    
    validarDados();
}
// event guarda as informacoes do evento: qdo foi clicado, q evento foi clicado(pode chamar de outro nome tb em vez event por exemplo), e qdo criamos a funcao do addEventListener automaticamente esse evento ja é criado
window.onload = function(){
    criaEstados();

    let botaoEnviar= document.querySelector("button");
    botaoEnviar.addEventListener("click", botaoSubmeter);

    // let botaoLimpar=document.querySelector("#bLimpar");
    // botaoLimpar.addEventListener("click", limparCampos);
}
