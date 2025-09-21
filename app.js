// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos(){
   let amigo = document.querySelector('#amigo').value;
    if(amigos.includes(amigo)){
            alert("Ese nombre ya fue agregado");
        }
        else{
            amigos.push(amigo);
        }
    }
