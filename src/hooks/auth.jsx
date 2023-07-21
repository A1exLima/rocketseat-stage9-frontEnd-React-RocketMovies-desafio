import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [ data, setData] = useState({})
  const [ notes, setNotes] = useState([])

  async function signIn({email, password}){
    try{
      const response = await api.post("/sessions", {email, password})
      const { user, token } = response.data

      const userLocalStorage = {
       id: user.id,
       name: user.name,
       email: user.email,
       avatar: user.avatar,
       created_at: user.created_at,
       updated_at: user.updated_at
      }

      localStorage.setItem("@rocketmovies:user", JSON.stringify(userLocalStorage))
      localStorage.setItem("@rocketmovies:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setData({user, token})

    } catch(error){
      if(error.response){
        alert(error.response.data.message)
      } else{
        alert("Não foi possível efetuar o login. ")
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@rocketmovies:token")
    localStorage.removeItem("@rocketmovies:user")

    setData({})
  }

  async function updateProfile({user, avatarFile}){
    try{

      if(avatarFile){
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)

      const userLocalStorage = {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        created_at: user.created_at,
        updated_at: user.updated_at
       }

      localStorage.setItem("@rocketmovies:user", JSON.stringify(userLocalStorage))
      
      setData({user, token: data.token})
      alert("Perfil atualizado com sucesso")

    } catch(error){
      if(error.response){
        alert(error.response.data.message)
      } else{
        alert("Não foi possível atualizar o perfil. ")
      }
    }
  }

  async function fetchMovieNotes(search){
      const response = await api.get(`/movies_notes?title=${search}`)
      setNotes(response.data)
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setData({
        token,
        user: JSON.parse(user)
      })
    }

  }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      updateProfile,
      fetchMovieNotes,
      user: data.user,
      searchNotes: notes
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
