
// Servicio que consulta la información de la ciudad
function getCities() {
  return fetch('https://cities-acid-lab.herokuapp.com')
  .then((data) => {
    return data.json();
  })
  .catch((err) => {
    console.log(err);
  });
}

export {getCities};