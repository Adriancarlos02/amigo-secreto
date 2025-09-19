let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo"); 
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya está en la lista.");
    input.value = "";
    input.focus();
    return;
  }

  amigos.push(nombre);

  mostrarLista();

  input.value = "";
  input.focus();
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {

  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${escapeHtml(amigoSorteado)}</strong></li>`;
}
function escapeHtml(text) {
  return text
   
}
