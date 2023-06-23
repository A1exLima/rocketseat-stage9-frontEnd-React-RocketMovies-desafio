import { Container } from "./style"

export function Button({title, loading=false, ...rest}){
  return( 
    <Container
      {...rest}
    >
       {loading ? "Carregando..." : title}
    </Container>
  )
}