// Crear elementos 
document.createElement()
// En un documento HTML, el método Document.createElement() crea un elemento HTML
// especificado por su tagName, o un HTMLUnknownElement (en-US) si su tagName no se
//reconoce. En un documento XUL, crea el elemento XUL especificado. En otros documentos
//, crea un elemento con un namespace URI null.

// Para declarar el namespace URI del elemento, utiliza document.createElementNS().

// Sintaxis
let element = document.createElement(tagName, [options]);

document.body.onload = addElement;

function addElement () {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

//appendChild

node.appendChild()
// The appendChild() method of the Node interface adds a node 
// to the end of the list of children of a specified parent node.
//  If the given child is a reference to an existing node in the document, 
//  appendChild() moves it from its current position to the new position.

// If the given child is a DocumentFragment, the entire contents of the
//  DocumentFragment are moved into the child list of the specified parent node.

// appendChild() returns the newly appended node, or if the child is a DocumentFragment, the emptied fragment.

container.appendChild(li)
//Ejemplo de todolist 

//Parametros
// aChild
// The node to append to the given parent node (commonly an element).

//  ADICION Y ELIMINACIOND EELEMENTOS 
// Adición y eliminación de elementos
// Method	                              Description

// document.createElement(element)	      Create an HTML element
// document.removeChild(element)	        Remove an HTML element
// document.appendChild(element)	        Add an HTML element
// document.replaceChild(new, old)	      Replace an HTML element
// document.write(text)	                  Write into the HTML output stream

//Encontrar objetos HTML
//document.body	                          returns the <body> element
//document.images	                        Returns all <img> elements