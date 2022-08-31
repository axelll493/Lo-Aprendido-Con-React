import React, { Component } from "react";
import { connect } from 'react-redux'; //importamos el conect con lo que le llega el estado
import { increment, decrement } from '../actions';

class Counter extends Component {
    // Extra Credit
    incrementIfOdd = () => {
      //Implementar una función de incremento que sólo aumenta si el valor del contador es impar
      if(this.props.count % 2 !==0)
      this.props.increment()
    };
    // Extra Credit
    incrementAsync = () => {
        //  Implementar una función de incremento que aumenta después de esperar un segundo
        setTimeout(this.props.increment, 5000);
    };

    render() {
        // Completa las funciones onClick de los botones
        // Al hacer clic en estos botones, el recuento debe disminuir o aumentar en consecuencia
        return (
            <p>
                Clickeado: {this.props.count} veces
                <button onClick={() => {this.props.increment()}}>
                    + {/* Incremeta */}
                </button>
                <button onClick={() => {this.props.decrement()}}>
                    -  {/* Decrementa */}
                </button>
                 {/* Si quieres hacer los extra credit puede descomentar las lineas de abajo */}
                <button onClick={this.incrementIfOdd}>incrementa si es par</button>
                <button onClick={this.incrementAsync}>Incrementa despues de un segundo</button>  
            </p>
        );
    }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.

//lo que hace esta funcion es tomar el estado, que le pasa conect
const mapStateToProps = (state) => { 
    return { // y retornar un objeto
        count: state.count // en lo que el objeto va hacer en cada una de las propiedades el nombre de la prop
    };
};
// lo que sucede internamente
//{<counter count>{store.getState().count}/>} //le esta agregando una propiedad que se va a llamar count

const mapDispatchToProps = {increment, decrement}
// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);// el resultado de esto aplicaselo a counter
//lo que vamos hacer es conectar bindear el componente con el store
//que hace el mapStateToProps?: lo que esta haciendo en realidad, es mapeemos el estado en el el gobal como propiedades
//que <counter cout = {state_global} o le aparte la porcion que le importa del estado global
//