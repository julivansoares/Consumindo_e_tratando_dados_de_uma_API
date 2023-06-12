
/* async function buscaEndereco(){
    O AWAIT SÓ É UTILIZADO DENTRO DE UMA FUNCTION ASYNC 
    const consultaCep = await fetch("https://viacep.com.br/ws/01001000/json/") 
    const consultaCepConvertida = await consultaCep.json()
    console.log(consultaCepConvertida);

    //A declaração async function define uma função assíncrona e o operador await é utilizado para esperar por uma Promise.
    // Dessa maneira, nossa requisição funcionará corretamente.
}
 */

  // Agora utilizando o try,catch para fazer a validação de erro
 //

async function buscaEndereco(cep){
    const mensagemErro = document.getElementById('erro');
      mensagemErro.innerHTML="";
    try {
      

    const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`) 
    const consultaCepConvertida = await consultaCep.json()

    if(consultaCepConvertida.erro){
        throw Error('Cep não existente!');
    
    }

    const cidade = document.getElementById('cidade');
    const logradouro = document.getElementById('endereco');
    const estado = document.getElementById('estado');

    cidade.value =consultaCepConvertida.localidade;
    logradouro.value =consultaCepConvertida.logradouro;
    estado.value= consultaCepConvertida.uf;

    } catch (erro) {
        mensagemErro.innerHTML=`<p>Cep inválido. Tente novamente </p>`
        console.log(erro)        
    }
    
}




   cep.addEventListener("focusout", ()=> buscaEndereco(cep.value));