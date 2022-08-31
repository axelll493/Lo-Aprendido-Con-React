export const INCREMENT = 'INCREMENT'; // se exporta las acciones
export const DECREMENT = 'DECREMENT'; // se exporta las acciones

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).


//los action creators, devuelve un objeto ! donde obligatoriamente
//tienen que tener una propiedad que se llama type
export const increment = () => { // mis acciones son funciones que devuelven un objeto
  // Completa la funcion
  return {type: INCREMENT}
};

export const decrement = () => {
  // Completa la funcion
  return {type: DECREMENT}
};