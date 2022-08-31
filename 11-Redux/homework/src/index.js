import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import counter from './reducers'; // cuando yo no le aclare el reduce, puede venir sin parentesis

// Esta línea instancia nuestro store central de Redux.
// La función `createStore` recibe el reducer como parametro
//es el nombre del reducer al que vamos a estar vinculando nuestro store,
//para vincular el dispatch y el store tenemos el reduce
//el reduce es un parametro que le vamos a pasar al create store
const store = createStore(counter); 

// Aquí, envolvemos nuestro componente principal React dentro de las etiquetas del Provider,
// que vienen del paquete react-redux.
// Esto es necesario porque el store necesita saber hacia dónde está pasando su estado. 
// El componente Provider es donde "vive" el store.
//El provider es el que le va a comunicar a nuestra aplicacion que vamos a estar trabajando con un store
//de esta forma lo que hacemos es counter se entere de la existencia de un store
//por detras hay un mapeo que dice que hay un store, hacemos que provider abraze a nuestra app
ReactDOM.render(
  <Provider store={store}>
    <Counter /> 
  </Provider>, 
  document.getElementById('root')
);