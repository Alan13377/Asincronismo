let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  //Traer informacion
  xhttp.open("GET", url_api, true);

  /* Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready */

  /**Si el estado es satisfactorio === 4 */
  xhttp.onreadystatechange = function (e) {
    if (xhttp.readyState === 4) {
      //Status 200 OK
      if (xhttp.status === 200) {
        //Error, resultado JSON
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + url_api);
        return callback(error, null);
      }
    }
  };
  //Solicitud
  xhttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  // results = elelemnto de la API, primer elemento [0]
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count); //Numero de personajes
      console.log(data2.name); //Nombre
      console.log(data3.dimension); //Dimension
    });
  });
});
