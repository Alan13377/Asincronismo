let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    //Traer informacion
    xhttp.open("GET", url_api, true);

    /* Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready */

    /**Si el estado es satisfactorio === 4 */
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", url_api));
      }
    };
    //Solicitud
    xhttp.send();
  });
};

module.exports = fetchData;
