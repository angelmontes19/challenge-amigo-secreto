// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
   let amigo = document.querySelector('#amigo').value;
    console.log(amigo);
    if( document.querySelector('#amigo').value == ''){
        alert("Por favor, inserte un nombre");
    }
    else{
        if(!amigos.includes(amigo)){
                amigos.push(amigo);
                mostrarAmigos();
                console.log(amigos);
            }
            else{
                alert("Ese nombre ya fue agregado");
            }
        }
        limpiarCaja();
    }


function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
