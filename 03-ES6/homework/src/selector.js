//cuando llegue hay va a tener que usar la funcion que se esta utilizando
//para pasar un elemento y verificar el elemento que estoy buscando
//va a ser quien recorra todo el arbol y va a estar en busca
//del elemento que tiene las propiedades indicadas
var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if (matchFunc(startEl)) {
    resultSet.push(startEl) //quiero devolver todos los elementos que hayan sido encontrados
  }
  // TU CÓDIGO AQUÍ
  
  //starEl >> child = array
  //document.body.children
  //starEl.children >> []
  for(var i = 0; i< startEl.children.length; i++) {
    var elementos = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    //concatenar 
    resultSet = [...resultSet, ...elementos];
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

//selector = 'div' > tag
//         = '#unID > id
let selectorTypeMatcher = function(selector) {  
  // tu código aquí
  if(selector[0] === '#') {
    return 'id';
  }
  if(selector[0] === '.') {
    return 'class';
  }
  //si la longitud cuando separo mi palabra, es mayor a 1
  //tag . class, es decir que tengo 2 elementos
  //es decir que 
  //selector > tag.class >[tag . class] 
  if(selector.split('.').length > 1) {
    return 'tag.class';
  }
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

//empezemos la distancia con el #myId si vos me pasaste este selector
//lo que va hacer es, primero averiguar que tipo de dato es
var matchFunctionMaker = function(selector) { //ahora si comparalo con el selector que buscaba el usuario
  var selectorType = selectorTypeMatcher(selector);// es un id'id'
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function (el) {
     //
     //<div id =myid></div> = el >> el.id = myId >> (#myId ===#myId) lo comparo con el selector
     return '#' + el.id === selector; //<div id =myid></div> agregale un # por delante, dara true
   }

  } else if (selectorType === "class") {
    // supongamos que el elemento era
    matchFunction = function (el) { // <div class = 'clase1 clase2 clase2'></div>
      //$0.classList 
      var clasess = el.classList; //class = [clase1, clase2, clase3]
      //classes.forEach(e => {if('.'+e===selector) return true;}) return false
      for(let i=0; i<clasess.length; i++) {
        if('.' + clasess[i] === selector) return true
      }
      return false
    }
  } else if (selectorType === "tag.class") { //estoy buscando 'p.small'
    matchFunction = function(el) { // el es un elemento dentro de nuestro arbol ejemplo el => <p class= 'small' ></p>
      var [EncontrarTag, EncontrarClass] = selector.split('.'); // [p, small] tag es p, class small
      return matchFunctionMaker(EncontrarTag)(el) && matchFunctionMaker('.'+EncontrarClass)(el) //(EncontrarTag)es small(el) es <p class= 'small' ></p>
    }
  } else if (selectorType === "tag") {
    //document.querySelectoAll('div')[0].tagName me devuelve en mayuscula el elemento que busco
    matchFunction =function (el) { //<div> hola</div> >>> el.tagName = 'DIV' >> el.tagName.toLowerCase = 'div'
      return el.tagName.toLowerCase() === selector
    }
  }
  return matchFunction;
};

var $ = function(selector) { // selector = 'div'
  var elements;
  // aca va a quedar almacenada una funcion que recibe
  // elementos y hace algo
  //function(el) {return algo}
  var selectorMatchFunc = matchFunctionMaker(selector); 
  //a acada uno que me cruze dentro del arbol le paso mi funcion
  //por cada elemento que yo me paro voy a probar si el elemento es el que quiero
  //un div un tag
  //si no me lo pasan estoy en la primer instancia
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
