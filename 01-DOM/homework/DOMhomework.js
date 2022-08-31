// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:

//Todos van a tener acesso ha esta array
var toDoItems = []

// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:

//Tenemos que encontrar el span, donde el id es "#createdBy"
//buscara esto en index.html <div><span id="createdBy">Aplicación creada por:</span></div>
//querySelector va a brindar la primera coincidencia 
var span = document.querySelector("#createdBy");//.innerHTML += DIEGO
//luego tenemos que modificar, la informacion
//inner nos puede llegar a pisar la informacion
//tenemos que tomar lo que tiene index html hasta el momento
//mas mi nombre, tomo el string y le sumo lo que tengo que sumar
span.innerHTML += "Axel" //<div><span id="createdBy">Aplicación creada por: "Axel" </span></div>


// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

//cada uno de los elementos, va a tener 2 caracteristicas
//va a tener un description, y un complete
//el complete lo que va a estar diciendo es si va a estar en true, o false
//segun el boleano que me de lo tacho o no lo tacho
//si lo tengo en false, no lo tacho, si lo tengo en true lo tacho con una linea
class ToDo {
  constructor(description) {
    // Tu código acá:
    //tenemos un constructor
    this.description = description;
    this.complete = false;
  }
}
//la idea de el constructor que eventualmente, vamos a ir agregando objetos
//[{description, complete}, {description, complete}, {description, complete}]

//instancia ToDo


// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
ToDo.prototype.completeToDo = function () {
  this.complete = true
  //this.complete = !this.complete
}

// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


function buildToDo(todo, index) {
  // Tu código acá:
  //vamos a generar nuestra variable
  // si queremos crear un nuevo elemento, vamos a utilizar create, element
  //le puedo pasar el nombre que quiera en este caso sera div 
  let toDoShell = document.createElement("div");
  //ahora le vamos a generar un estilo, que sera toDoShell, 
  toDoShell.className = "toDoShell"//lo que tenemos es <div class = "toDoShell" ></div>
  // si queremos crear un nuevo elemento, vamos a utilizar create, element
  //le puedo pasar el nombre que quiera en este caso sera un span
  let toDoText = document.createElement("span");
  //le asignamos el todo, pasado que el todo, tiene su propio estilo
  // le insertamos, un estilo
  toDoText.innerHTML = todo.description;
  //Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
  //lo que quiere es que cada elemento tenga un id propio
  toDoText.id = index; //siempre que le pongamos un id, es que siempre hice click en el elemento tal
  toDoText.onclick =
  //    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
  //          - Si es true: asignarle a 'toDoText' la clase 'completeText'
  //          - Si es false: no asignarle ninguna clase
  todo.complete && (toDoText.className= "completeText")
  const checkbox = document.createElement("input")
  check
  toDoShell.appendChild(toDoText) //le agrega un nodo hijo al nodo actual
  //toDoText.addEventListener('click', 'completeToDo')
  return toDoShell
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

//aca los creamos
function buildToDos(toDos) {
  // Tu código acá:
  return toDos.map(buildToDo)
  //var arr = toDos.map(todo,i) {
    //return builTodo(todo, i)
  //}
}


// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

//mostrarlo en pantalla
function displayToDos() {
  // Tu código acá:
  var toDoContainer = document.querySelector('#toDoContainer')
  toDoContainer.innerHTML = "" //reseteando los hijos
  buildToDos(toDoItems).forEach(todo => {
    toDoContainer.appendChild(todo)
  });
}


// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // Tu código acá:
  const input = document.querySelector("#toDoInput")
  toDoItems.push(new ToDo(input.value))
  input.value = ""
  displayToDos()
}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:
document.querySelector('#addButton').addEventListener('click', addToDo)


// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
  // const index = event.target.id;
  // Tu código acá:
  const index = event.target.id
  toDoItems[index].completeToDo()
  displayToDos()
}

// Una vez que llegaste a este punto verificá que todos los tests pasen
displayToDos()

// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'


// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
