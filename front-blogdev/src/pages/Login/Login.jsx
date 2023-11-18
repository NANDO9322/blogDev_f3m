import { useState, useEffect } from "react";
import { userAuthentication } from "../../hooks/userAuthentication";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { userLogin, error: authError, loading } = userAuthentication();
  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = {
      email,
      password,
    };

    const res = await userLogin(user);

    console.table(res);
  };
  return (
    <div>
      <h1>Faça login</h1>
      <form onSubmit={handlerSubmit}>
        <label className="">
          E-mail
          <input 
          type="email" 
          name="email" 
          placeholder="digite seu e-mail!"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="">
          Senha
          <input
            type="password"
            name="password"
            placeholder="digite sua senha!"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn">{!loading ? "Login" : "Aguarde..."}</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
