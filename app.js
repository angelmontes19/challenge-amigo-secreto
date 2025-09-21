// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
   let amigo = document.querySelector('#amigo').value;
    console.log(amigo);
    console.log(amigos);
    if( document.querySelector('#amigo').value == ''){
        alert("Por favor, inserte un nombre");
    }
    else{
        if(amigos.includes(amigo)){
                alert("Ese nombre ya fue agregado");
            }
            else{
                amigos.push(amigo);
            }
        }
        limpiarCaja();
    }


agregarAmigo();

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}