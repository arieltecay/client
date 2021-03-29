import React, { useState } from "react";
import InputForm from "../Input/Input";
import { expresiones } from "../Input/expresiones";
import {
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "../elements/form.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [repetirPassword, cambiarRepetirPassword] = useState({
    campo: "",
    valido: null,
  });
  const [email, cambiarEmail] = useState({ campo: "", valido: null });
  const [telefono, cambiartelefono] = useState({ campo: "", valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== repetirPassword.campo) {
        cambiarRepetirPassword((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarRepetirPassword((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };
  const onSubmitFormRegiter = (e) => {
    e.preventDefault();
    if (
      usuario.valido === "true" &&
      nombre.valido === "true" &&
      password.valido === "true" &&
      repetirPassword.valido === "true" &&
      email.valido === "true" &&
      telefono.valido === "true" &&
      terminos
    ) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "null" });
      cambiarNombre({ campo: "", valido: "null" });
      cambiarPassword({ campo: "", valido: "null" });
      cambiarRepetirPassword({ campo: "", valido: "null" });
      cambiarEmail({ campo: "", valido: "null" });
      cambiartelefono({ campo: "", valido: "null" });
    } else {
      cambiarFormularioValido(false);
    }
  };
  return (
    <main>
      <h1>SignUp</h1>
      <Formulario onSubmit={onSubmitFormRegiter}>
        <InputForm
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          label="Usuario"
          id="usuario"
          type="text"
          placeholder="Usuario"
          errorLeyenda="El usuario debe contener un minimo de 4 Letras o Numeros y un Máximo de 16"
          expresionRegular={expresiones.usuario}
        />
        <InputForm
          estado={nombre}
          cambiarEstado={cambiarNombre}
          label="Nombre"
          id="nombre"
          type="text"
          placeholder="Nombre"
          errorLeyenda="No puede ser el nombre con numeros"
          expresionRegular={expresiones.nombre}
        />
        <InputForm
          estado={password}
          cambiarEstado={cambiarPassword}
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          errorLeyenda="Password Incorecto"
          expresionRegular={expresiones.password}
        />
        <InputForm
          estado={repetirPassword}
          cambiarEstado={cambiarRepetirPassword}
          label="Repetir Password"
          id="repetir-password"
          type="password"
          placeholder="Password"
          errorLeyenda="Las contraseña deben ser iguales "
          expresionRegular={expresiones.password}
          funcion={validarPassword2}
        />
        <InputForm
          estado={email}
          cambiarEstado={cambiarEmail}
          label="E-Mail"
          id="email"
          type="email"
          placeholder="E-Mail"
          errorLeyenda="Correo incorrecto por favor verificar"
          expresionRegular={expresiones.correo}
        />
        <InputForm
          estado={telefono}
          cambiarEstado={cambiartelefono}
          label="Telefono"
          id="telefono"
          type="number"
          placeholder="Teléfono"
          errorLeyenda="Telefono incorrecto números desde 7 a 14 dígitos"
          expresionRegular={expresiones.telefono}
        />

        <ContenedorTerminos>
          <Label>
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={terminos}
              onChange={onChangeTerminos}
            />
            Acepto los terminos y condiciones
          </Label>
        </ContenedorTerminos>
        {formularioValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationCircle} />
              <b>Error:</b>Por Favor rellena los campos
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true && (
            <MensajeExito>Formulario enviado correctamente</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
};

export default SignUp;
