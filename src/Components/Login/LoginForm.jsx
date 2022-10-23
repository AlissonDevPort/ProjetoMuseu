import React from "react";
import styles from "../Login/Login.module.css";
import Button from "./Button";
import Input from "./Input";

const Login = () => {
  return (
    <section className={styles.login}>
      <section className="animeLeft">
        <h1 className="title">Login</h1>
        <form className={styles.form}>
          <div className={styles.wrapper}>
            <Input
              className={styles.input}
              label="Usuário"
              type="text"
              name="username"
            />
            <Input
              className={styles.input}
              label="Senha"
              type="text"
              name="password"
            />
          </div>

          <Button>Entrar</Button>
        </form>
        <div className={styles.cadastro}>
          <h2>Cadastre-se</h2>
          <p>Ainda não possui cadastro?</p>
          <Button>Criar Conta</Button>
        </div>
      </section>
    </section>
  );
};

export default Login;
