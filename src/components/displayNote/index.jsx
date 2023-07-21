import { Container } from "./style"
import {StarRating} from "../../components/starRating/"
import { MdDeleteForever } from "react-icons/md"
import { FiClock } from "react-icons/fi"
import { Tag } from "../../components/tag"
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from "../../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"
import { useParams, useNavigate } from "react-router-dom"


export function DisplayNote(data){
  const note = data.data
  const { user } = useAuth()
  const hourAndDate = note.created_at.split(" ")
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const params = useParams()
  const navigate = useNavigate()

  async function handleDelete(){
    const confirm = window.confirm("Tem certeza que deseja excluir a nota?")
    
    if(confirm){
      await api.delete(`/movies_notes/${params.id}`)
      navigate(-1)
    }
  }

  return (

    <Container>
      <div>
        <h1>{note.title}</h1>
        <StarRating value={note.rating} /> {/*UL and LI / star-on / star-off*/}
        <button 
          onClick={handleDelete}>
          <MdDeleteForever/>
        </button>
      </div>

      <div>
        <img src={avatarUrl} alt={user.name} />
        <p>Por {user.name}</p>
        <FiClock />
        <p>
          {`${hourAndDate[0]} às ${hourAndDate[1]}`}
        </p>
      </div>

      {note.movieTags && (
        <div>
          {note.movieTags.map((tag) => (
            <Tag key={String(tag.id)} title={tag.name} />
          ))}
        </div>
      )}

      <p>{note.description}</p>
    </Container>
  )
}