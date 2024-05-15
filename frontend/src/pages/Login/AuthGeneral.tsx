import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../components/firebase/firebaseConfig";
import { AuthContext } from "../../context/AuthContext";

const AuthGeneral = () => {
  const ContextAuth = useContext(AuthContext);

  if (!ContextAuth) {
    throw new Error("Teste Contexto invalido");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await ContextAuth.singUpGoogle(auth, email, password);
    console.log(result);
  };

  return (
    <div className="bg-red-200">
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">enviar</button>
      </form>
      <button onClick={() => console.log(ContextAuth.isLoggedIn)}>loged</button>
    </div>
  );
};

export default AuthGeneral;
