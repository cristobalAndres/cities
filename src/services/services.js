
// Servicio que consulta la información de la ciudad
function getCities() {
  return fetch('https://api-acid-lab.herokuapp.com')
  .then((data) => {
    return data.json();
  })
  .catch((err) => {
    console.log(err);
  });
}

export {getCities};