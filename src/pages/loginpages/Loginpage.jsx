import React from 'react'
import { Link } from 'react-router-dom';

export default function Loginpage() {
  return (
        <div>
            <h1>HOME</h1>
            <Link to="/register">
                <button>ir a registro</button>
            </Link>

            <Link to="/forgot">
                <button>olvide mi contraseña </button>
            </Link>
         
            <Link to="/Hooks">
                <button>ir a Hooks </button>
            </Link>
  

            
        </div>
    );
}
