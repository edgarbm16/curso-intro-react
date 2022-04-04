/* Importar React para utilizar React.Fragment y no utlizar div porque causa problemas, 
tambien se puede usar <></> como alternativa  a <React.Fragment>*/
import React from "react";
import { TodoProvider } from '../TodoContext';
import { AppUI } from "./AppUI";

/*Lista de tareas*/
// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar curso de React', completed: false},
//   {text: 'Hacer a Zakaria', completed: true},
//   {text: 'Terminar a Clauss', completed: true},
// ];

function App() {

  return (
   <TodoProvider>
      <AppUI 

      />
   </TodoProvider>
  );
}

export default App;
