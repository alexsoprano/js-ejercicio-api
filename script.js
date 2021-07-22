async function traerPais() {
  const respuesta = await fetch('https://api.nationalize.io/?name=alex');

  /*if (!respuesta.ok) {
    let e = 'No se encontro informacion';
    alert(e);
    throw new Error(e);
  }*/

  const nombre = respuesta.json();
  return nombre;
}
function mostrarPais(n) {
  //document.getElementById("_pais").innerHTML = n;
  document.getElementById('_pais').innerHTML = n.country[0].country_id;
  document.getElementById('_probabilidad').innerHTML =
    n.country[0].probability.toFixed(3) * 1000 + '%';
}
traerPais().then(mostrarPais);
