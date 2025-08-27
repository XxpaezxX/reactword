import { useState } from "react";
import { Link } from "react-router-dom";
function UseStateContador() {
  
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  return (
    <div>
      <h2>Valor del contador = {contador}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    <Link to="/hooks">
    <button>ir a HOOKS general </button>
    </Link>

        </div>
      );
    }

    export default UseStateContador;