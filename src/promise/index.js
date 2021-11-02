const somethingWillHappen = () => {
  //Si se ejecuta, si es rechazada
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey correcto!");
    } else {
      reject("Whoops no cumplio!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const err = new Error("Error!");
      reject(err);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array de resultados", response);
  })
  .catch((err) => {
    console.error(err);
  });
