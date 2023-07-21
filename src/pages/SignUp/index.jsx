import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { Container, Form, Background } from "./style"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

import { Link, useNavigate } from "react-router-dom"

import { useState } from "react"

import { api } from "../../services/api"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password || !confirmPassword) {
      return alert("Preencha todos campos corretamente!")
    }

    api
      .post("/users", { name, email, password, confirmPassword })
      .then(() => {
        alert(`Usuário(a) ${name} cadastrado(a) com sucesso!`)
        return navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível efetuar o cadastro!")
        }
      })
  }

  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <Form>
          <h2>Crie sua conta</h2>

          <Input
            id="user"
            icon={FiUser}
            type="text"
            placeholder="Nome"
            autoComplete="off"
            onChange={(event) => setName(event.target.value)}
          />

          <Input
            id="email"
            icon={FiMail}
            type="mail"
            placeholder="E-mail"
            autoComplete="off"
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            id="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            autoComplete="off"
            onChange={(event) => setPassword(event.target.value)}
          />

          <Input
            id="confirmPassword"
            icon={FiLock}
            type="password"
            placeholder="Confirme a Senha"
            autoComplete="off"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Button
            title="Cadastrar"
            type="button"
            loading={false}
            onClick={handleSignUp}
          />
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </main>

      <Background />
    </Container>
  )
}
