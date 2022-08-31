import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <>
  <input type = {"text"} placeholder = "ciudad..."/>
  <button onClick = {() => props.onSearch("Buscando ciudad...")}>Agregar</button>
  </>
  )
};