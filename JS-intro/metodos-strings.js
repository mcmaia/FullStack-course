//length - retorna o tamanho da cadeia de texto, ou da array
let text = "Oi, eu sou o Marcelo";
console.log(text.length);

//indexOf - retorna infos que estão dentro da string
console.log(text.indexOf("Marcelo"));

//slice -> coleta a palavra numa string
let oi = text.slice(0,2);
console.log(oi);

//trim() -> elimina espaços no inicio ou no final do texto
let textSpace = "                 Caraio, ta longe, fi!"
console.log(textSpace);
console.log(textSpace.trim());

//split -> converte string em array / quando colocamos um letra como parametro, o split fará as divisões eliminando a letra parametrizada
//por ex: .split("M") = "arcelo" sem o M
console.log(text.split(" "));
console.log(text.split("M"));

//replace -> substituir uma porção de texto por outra
let textNovo = text.replace("eu sou o","meu nome é" );
console.log(textNovo.replace("Marcelo","Caetano" ));


//execicio 1 - Metodos Strings
function dominio (enderecoSite){
        
    console.log(enderecoSite.replace(enderecoSite, "http://" + enderecoSite));
    };

    dominio("9gag.com");

// ex 3
function substituicaoRapida(texto, palavraSubstituida, palavraNova){
   
   console.log(texto);
   console.log(texto.replace(palavraSubstituida, palavraNova));

};

substituicaoRapida("valeu, fi!", "valeu", "obrigado");

//Ex está falando de mim?

function menciona (textinho, palavrinha) {
    return textinho.indexOf(palavrinha) != -1
  
};

console.log(menciona('Existem muitas linguagens de programação e javascript é uma delas','programação')); // true

//ex:  Apenas o nemo

let nominho = "Olá, sou Carlos"
let nomeUsuario = nominho.slice(9, 15);

console.log(nomeUsuario);
