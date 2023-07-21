import { Container, Brand, Profile } from "./style"
import { Input } from "../../components/input"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import avatarPlaceholder from "../../../assets/avatar_placeholder.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Header(){
  const { signOut, user, fetchMovieNotes } = useAuth()
  const [ search, setSearch] = useState("")
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const navigation = useNavigate()

  function handleHome(){
    navigation("/")
  }

  function handleProfile(){
    navigation("/profile")
  }

  function handleSignOut(){
    navigation("/")
    signOut()
  }
  
  useEffect(()=>{
      fetchMovieNotes(search)
  }, [search])

  return (
    <Container>
      <Brand>
        <button 
          type="button" 
          onClick={handleHome}
        >
          RocketMovies
        </button>
      </Brand>

      <Input 
        icon={""} 
        placeholder="Pesquisar pelo título" 
        type="text"
        onChange={e => setSearch(e.target.value)} 
      />

      <Profile >
        <div>
          <h2 onClick={handleProfile} >{user.name}</h2>
          <button type="button" onClick={handleSignOut}>sair</button>
        </div>

        <a onClick={handleProfile}>
          <img src={avatarUrl} alt={user.name} />
        </a>
        
      </Profile>
    </Container>
  )
}