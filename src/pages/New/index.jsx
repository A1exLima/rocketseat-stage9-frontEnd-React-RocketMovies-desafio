import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { NoteItem } from "../../components/noteItem"
import { Button } from "../../components/button"
import { Container, Content, Form, Markers } from "./style"
import { FiArrowLeft, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"
import {useState} from "react"
import { api } from "../../services/api"
import {useNavigate} from "react-router-dom"

export default function New() {
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if(!title){
      return alert("Preencha o campo título")
    }

    if(!rating){
      return alert("Preencha o campo nota")
    }

    if(!description){
      return alert("Informe uma descrição para a nota")
    }

    if(newTag){
      return alert("Consta tags a adicionar!")
    }

    try {
      await api.post("/movies_notes", {
        title,
        description,
        rating,
        tags
      })
    } catch(error){
      if(error.response){
        return alert(error.response.data.message)
      } else{
        return alert("Não foi possível cadastrar a nota! ")
      }
    }

    alert("Nova nota de filme criada com sucesso.")
    handleBack()
  }

  return (
    <Container>
      <Header />

      <div>
        <Link to="/">
          <FiArrowLeft />
          <p>Voltar</p>
        </Link>
      </div>

      <Content>
        <div>
          <Form id="new-movie">
            <h2>Novo Filme</h2>

            <div>
              <Input 
                placeholder="Título" 
                type="text"
                onChange={ event => setTitle(event.target.value)} 
              />
              <Input 
                placeholder="Sua Nota (de 0 a 5)" 
                type="text" 
                onChange={ event => setRating(Number(event.target.value))}   
              />
                
            </div>

            <textarea 
              onChange={ event => setDescription(event.target.value)} 
              placeholder="Observações"
            />
          </Form>

          <Markers>
            <h3>Marcadores</h3>

            <div>
              {
                tags.map((tag, index)=>(
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    $isNew={false}
                    onClick={()=>{handleRemoveTag(tag)}}
                  />
                ))
              }

              <NoteItem 
                $isNew={true} 
                placeholder="Novo marcador" 
                onChange={event => setNewTag(event.target.value)}
                value = {newTag}
                onClick={handleAddTag}
                />
            </div>
          </Markers>

          <div>
            <Button 
              title="Excluir nota" 
              loading={false}
              onClick={handleBack} 
            />
            
            <Button
              form="new-movie"
              type="button"
              title="Salvar alterações"
              loading={false}
              onClick={handleNewNote}
            />

          </div>
        </div>
      </Content>
    </Container>
  )
}
