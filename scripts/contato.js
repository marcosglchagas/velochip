function Contato(){
    var contato={
        nome:"",
        email:"",
        //tipo:"",
        data:"",
        telefone:""

    };
    var select = document.getElementById("opcoes");
    var opcaoValor = select.options[select.selectedIndex].value;

    contato.nome=document.getElementById("nome").value;
    contato.email=document.getElementById("email").value;
    contato.data=document.getElementById("data").value;
    contato.telefone=document.getElementById("telefone").value;
    
    let data = new Date(contato.data);
    let dataFormatada= data.toLocaleDateString('pt-BR',{timeZone:'UTC'});

    document.getElementById("nomeresp").innerHTML=contato.nome;
    document.getElementById("emailresp").innerHTML=contato.email;
    document.getElementById("dataresp").innerHTML=dataFormatada;
    document.getElementById("telefoneresp").innerHTML=contato.telefone;
    document.getElementById("tiporesp").innerHTML=opcaoValor;
    
}