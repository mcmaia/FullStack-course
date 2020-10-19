//if e else e else if
var dia = "sabado";

if (dia == "domingo"){
    console.log("Hoje é domingo")
}else if (dia == "sabado"){
    console.log("SABADÃAAAAAAAAO")
}else if (dia == "sexta"){
    console.log("sextoooou")
}else{
    console.log("dia de semana, pfff")
};




function podePassar (nomePessoa){
    if (nomePessoa === "Natalia"){
        return false
     console.log("não passarás")
    }else{
        return true
    console.log("Pode passar")
    }
};

console.log(podePassar("Natalia"));

//if ternário e switch
let dias = "sexta";

let resultado = dias == "domingo"? "Vou a praia!": "Vou ficar em casa";

console.log(resultado);

//SWITCH 
switch(dias){
    case "segunda":
        console.log("Vou tomar café.");
        break;
    case "quarta":
        console.log("Vou ao cinema");
        break
    default:
        console.log("Vou fazer porra nenhuma")
}

//exercico
switch(dia){
    case "sexta-feira":
        console.log("Bom fim de semana!");
        break;
    case "segunda-feira":
        console.log("onsole.log('Boa semana!");
        break
    default:
        console.log("Bom dia!");
}

