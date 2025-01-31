/**
 * @notice Funcion que recibe un json de N personas con sus edades y devuelve la edad media de todas las personas.
 * @param json
 * @return string
 * 
 */
export default (json) => {
    /** 
      @notice La funcion reduce nos permite recorrer un array a la vez que acumular un valor, el segundo argumento que recibe es el valor inicial del acumulador. En nuestro caso utilizamos este acumulador para ir sumando las edades de cada persona. 
    */
    const total = json.reduce((acc, item) => acc + item.edad, 0);
    
    /**
     * @notice Para obtener la media hacemos la división del acumulador entre todas las personas que hay en el json
     */
    return `${total / json.length} años de media`;
  };
  