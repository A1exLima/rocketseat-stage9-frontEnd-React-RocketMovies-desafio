import { Container, Header, Form, Avatar } from "./style"
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from "../../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"

export default function Profile(){
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [ avatar, setAvatar ] = useState(avatarUrl)
  const [ avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: newPassword,
	    oldPassword: oldPassword
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({user: userUpdated, avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imgPreview = URL.createObjectURL(file)
    setAvatar(imgPreview)
  }

  return (
    <Container>
      <Header>
        <a onClick={handleBack}>
          <FiArrowLeft />
          <p>Voltar</p>
        </a>
      </Header>

      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file" 
              id="avatar"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
          icon={FiUser} 
          type="text" 
          placeholder="Nome" 
          autoComplete="on"
          value={name} 
          onChange={e => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          type="email"
          placeholder="E-mail"
          autoComplete="on"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha Atual"
          autoComplete="on"
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Nova Senha"
          autoComplete="on"
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button 
          title="Salvar" 
          type="button" 
          loading={false} 
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}