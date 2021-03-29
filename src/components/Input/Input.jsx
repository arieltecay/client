import React from "react";
import {
  Label,
  GroupInput,
  IconoValidacion,
  LeyendaError,
  InputForm,
} from "../elements/form";

import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Input = ({
  label,
  id,
  type,
  placeholder,
  expresionRegular,
  errorLeyenda,
  estado,
  cambiarEstado,
  funcion,
}) => {
  const onChange = (e) => {
    cambiarEstado({
      ...estado,
      campo: e.target.value,
    });
  };

  const validaciones = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
    if (funcion) {
      funcion();
    }
  };

  return (
    <div>
      <Label htmlFor={id} valido={estado.valido}>
        {label}
      </Label>
      <GroupInput>
        <InputForm
          type={type}
          placeholder={placeholder}
          id={id}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validaciones}
          onBlur={validaciones}
          valido={estado.valido}
        />
        <IconoValidacion
          icon={estado.valido === "true" ? faCheckCircle : faTimesCircle}
          valido={estado.valido}
        />
      </GroupInput>
      <LeyendaError valido={estado.valido}>{errorLeyenda} </LeyendaError>
    </div>
  );
};

export default Input;
