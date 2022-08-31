import { INCREMENT, DECREMENT } from '../actions'; // las acciones son importadas al reduce
const initialState = { // el reduce va a tener un estado inicial
  count: 0
}


//Por otro lado vamos a tener la funcion con la que vamos a estar trabajando
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // completa para este caso
    //verifico cual es mi estado hasta el momento
    //quiero que mi propiedad count
    //valga lo que esta en el estado +1
    return {...state, count: state.count +1} 
    case DECREMENT:// puedo definir los reduce que yo quiera
    // Fill para este otro
    return {...state, count: state.count -1} 
    default:
      return state;
  }
};