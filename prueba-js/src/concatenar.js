/**
 * @notice Funcion que recibe un json de N personas con nombre y apellidos y devuelve una lista concatenando y formateando nombre y apellidos
 * @param json
 * @return string
 */
export default (json) => {
    // Do your thing here!
  /**
   * @notice Función que capitaliza un string. El argumento que recibe puede ser nulo, en ese caso devolvemos un string vacio. 
   * @param string - nullable
   * @return string
   */
    const capitalize = (str) => {
      if(!str) return "";
      /**
       * @notice El string que recibimos y no es nulo hacemos lo siguiente:
       *  - trim: Quitamos espacios de el principio y el final
       *  - toLowerCase: pasamos todo el string a minúsculas
       *  - split: pasamos el string a un array, cada posicion del array es una palabra del string
       *  - map: recorremos el array, y por cada palabra obtenemos el primer carácter y lo pasamos a mayúsculas, despues concatenamos con el resto de la palabra
       *         utilizando slice pasandole la posicion 1 (segundo caracter).
       *  - join: pasamos el array a string añadiendo un espacio entre cada elemento
       */
      return str.trim().toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }

    /**
     * @notice Por cada posición del json recibido lo formateamos como se requiere. En este punto hacemos una comprobación extra checkeando si apellido2 es nulo o no,
     * en caso de ser nulo concatenamos un espacio vacio (""), en caso contrario concatenamos apellido2. 
     * 
     * Por último, utilizamos un join para devolver un string y añadir un espacio despues de cada elemento concatenado.
     */
    return json.map(person => `${capitalize(person.nombre)} ${capitalize(person.apellido)}${person.apellido2 ? " " + capitalize(person.apellido2) : ""}`).join(', ');
  };
  