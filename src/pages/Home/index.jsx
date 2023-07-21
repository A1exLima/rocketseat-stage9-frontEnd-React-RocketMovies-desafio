import { FiPlus } from "react-icons/fi"
import { Container, Section, MoviePlus, Content, Notes } from "./style"
import { Header } from "../../components/header"
import { Note } from "../../components/note"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export default function Home() {  
  const { searchNotes } = useAuth()
  
  const navigate = useNavigate()

  function handlePreview(id){
    navigate(`/preview/${id}`)
  }

  return (
    <Container>
      <Header />

      <Section>
        <h2>Meus Filmes</h2>
      </Section>

      <MoviePlus>
        <Link to="/new">
          <FiPlus />
          Adicionar filme
        </Link>
      </MoviePlus>

      <Content>
        <Notes>
          {
            searchNotes.map((note)=>(
              <Note
                key={note.id}
                type="button"
                onClick={() => handlePreview(note.id)}
                data={{
                  title: note.title,
                  star: note.rating,
                  text: note.description,
                  tags: note.movieNoteTags,
                }}
              />
            ))
          }
        </Notes>
      </Content>
    </Container>
  )
}

  