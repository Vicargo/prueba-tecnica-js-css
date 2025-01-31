/**
 * @note En las documentación técnica no especifica como tratar los acentos. Por defecto 'e' === 'é' es falso pero en nuestro 
 * ejercicio vamos a añadirle la dificultad de normalizar el string y reemplazar los acentos de aquellas palabras que lo lleven por
 * la misma vocal sin acento. 
 * 
 * El hecho de llevar esta práctica puede cambiar el resultado del ejercicio. 
 * 
 * Fuentes: 
 *  - https://regex101.com/r/xkDISe/1
 */

/**
 * @notice Función que comprueba si dos cadenas de texto son anagramas. 
 * @param string
 * @param string
 * @return boolean
 */
export default (word1, word2) => {

   /**
    * @notice Funcion que cambia vocales que lleven acento por la misma vocal sin acento.
    * @param {*} string 
    * @returns 
    */
   const removeAccents = (string) => {
      return string.replace(/[áÁéÉíÍóÓúÚüÜ]/g, (key) => {
         const acentos = { 'á': 'a', 'Á': 'A', 'é': 'e', 'É': 'E', 'í': 'i', 'Í': 'I', 'ó': 'o', 'Ó': 'O', 'ú': 'u', 'Ú': 'U' };
         return acentos[key]
      })
   }; 

   /**
    * @notice
    *  - toLowerCase: convierte el string a minusculas para facilitar el posterior ordenado
    *  - replace quita espacios en blanco y signos de puntuación
    *  - split: convertimos el string en un array
    *  - sort: ordenamos el array por defecto (unicode values) 
    *  - join: convertimos el array a string una vez ordenado para su comparación
    * @param {*} string 
    * @returns boolean
    */
   const parseString = (string) => removeAccents(string).toLowerCase().replace(/[\s.,!?¿¡;:()"'\-]+/g, '').split('').sort().join();

   return parseString(word1) === parseString(word2);
};  

