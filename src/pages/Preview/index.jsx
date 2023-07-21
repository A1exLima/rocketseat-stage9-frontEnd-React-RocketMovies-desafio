import { Container, Content } from "./style"
import { Header } from "../../components/header"
import { DisplayNote } from "../../components/displayNote"
import { FiArrowLeft } from "react-icons/fi"  
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect} from "react"
import { api } from "../../services/api"


export default function Preview() {
  const params = useParams()
  const [ data, setData ] = useState(null)
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }
  
  useEffect(()=>{
    async function fetchNote(){
      const response = await api.get(`/movies_notes/${params.id}`)
      setData(response.data)
    }
    
    fetchNote()
  }, [])
  
  return (
    <Container>
      <Header />

      <a>
        <FiArrowLeft />
        <p onClick={handleBack}>Voltar</p>
      </a>
      
      {
          data &&
          <Content>
            <DisplayNote data={data}/>
          </Content>
      }
    </Container>
  )
}
