import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import InputForm from "../Input/Input";
import { expresiones } from "../Input/expresiones";
import { Formulario } from "../elements/form.js";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });

  const loginSession = (usuario, password) => {
    const { data } = axios.post("api/user/signin", {
      usuario,
      password
    }
    );

    setLogin(!login);
  };

  if (login) {
    return <Redirect to="/home" />;
  }
  if (register) {
    return <Redirect from="/login" to="/register" />;
  }

  const registerSesion = (e) => {
    e.preventDefault();
    setRegister(!register);
  };

  return (
    <div className="container">
      <Formulario
        className="form-login"
        onSubmit={(e) => loginSession(e)}
        autoComplete="off"
        noValidate
      >
        <div>
          <InputForm
            estado={usuario}
            cambiarEstado={cambiarUsuario}
            label="Usuario"
            id="usuario"
            type="text"
            placeholder="Usuario"
            errorLeyenda="Usuario Incorrecto"
            expresionRegular={expresiones.usuario}
          />
        </div>
        <div>
          <InputForm
            estado={password}
            cambiarEstado={cambiarPassword}
            label="Contraseña"
            id="password"
            type="password"
            placeholder="Password"
            errorLeyenda="Tiene que ser de 4 dígitos mínimo y 16 máximo"
            expresionRegular={expresiones.password}
          />
        </div>
        <div className="iniciar">
          <button className="btn btn-primary">Iniciar</button>
        </div>
        <div className="iniciar">
          <button onClick={(e) => registerSesion(e)} className="btn btn-danger">
            Registrarse
          </button>
        </div>
      </Formulario>
    </div>
  );
};

export default Login;
