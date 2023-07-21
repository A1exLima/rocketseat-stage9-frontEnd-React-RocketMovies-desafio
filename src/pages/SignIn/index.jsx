import { useState } from "react"
import { FiMail, FiLock } from "react-icons/fi"
import { Container, Form, Background } from "./style"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export default function SignIn() {
  const [ email, setEmail] = useState("")
  const [ password, setPassword] = useState("")

  const {signIn} = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }

  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <Form>
          <h2>Faça seu login</h2>

          <Input
            id="email"
            icon={FiMail}
            type="mail"
            placeholder="E-mail"
            autoComplete="off"
            onChange={event => setEmail(event.target.value)}
          />

          <Input
            id="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            autoComplete="on"
            onChange={event => setPassword(event.target.value)}
          />

          <Button 
            title="Entrar" 
            type="button" 
            loading={false} 
            onClick={handleSignIn}
          />
        </Form>

        <Link to="/register">Criar Conta</Link>
      </main>

      <Background />
    </Container>
  )
}
