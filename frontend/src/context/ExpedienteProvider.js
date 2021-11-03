import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./auth-context";
import { getExpedientes } from "../firebase/firebase";
import ExpedienteContext from "./expedientes-context";

const ExpedienteProvider = (props) => {
  const [expedientes, setExpedientes] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    console.log("SE EJECUTA EFECTO EXPEDIENTE PROVIDER")
    const unsubscribe = getExpedientes(currentUser.uid, setExpedientes);
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const expObject = {
    expedientes,
  };

  return (
    <ExpedienteContext.Provider value={expObject}>
      {props.children}
    </ExpedienteContext.Provider>
  );
};

export default ExpedienteProvider;