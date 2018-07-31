function getCities() {
  return fetch('https://calm-cliffs-33202.herokuapp.com')
  .then((data) => {
    return data.json();
  })
  .catch((err) => {
    console.log(err);
  });
}

export {getCities};