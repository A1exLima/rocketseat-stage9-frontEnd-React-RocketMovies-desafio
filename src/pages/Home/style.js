import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto 40.7rem;
  grid-template-rows: 11.6rem 13.3rem auto;
  grid-template-areas:
    "header header"
    "section button"
    "content content";

  overflow-y: hidden;

  .new_on{
      display: flex;
  }
  
  .new_off{
    display: none;
  }

  @media (max-width:1000px){

    grid-template-rows: 11.6rem 8.7rem auto;

    .new_on{
      display: none;
    }

    .new_off{
      display: flex;
      width: 5rem;
      padding: 1rem;
    }
  }

  @media (min-width:1366px){
	  grid-template-columns: auto 50.7rem;
  }

  @media (max-width:1000px){
    grid-template-columns: auto;
  }
`
  
export const Section = styled.div`
  grid-area: section;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.738rem 0 3.745rem 20rem;

  @media (max-width:1000px){
    display: flex;
    justify-content: start;
    padding: 2rem 0 2rem 1.8rem;
  }

  @media (min-width:1366px){
	  padding: 4.738rem 0 3.745rem 30rem;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
    
  }
`

export const MoviePlus = styled.div`
  grid-area: button;
  padding: 4.738rem 20rem 3.745rem 0;

  @media (max-width:1000px){
    display: flex;
    justify-content: end;
    padding: 2rem 2.8rem 2rem 0;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    width: 20.7rem;
    height: 4.8rem;
    padding: 2rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.LILAS};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    font-weight: 500;
    font-size: 1.6rem;

    > svg {
      margin-top: 0.2rem;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    }
  }

  @media (min-width:1366px){
	  padding: 4.738rem 30rem 3.745rem 0;
  }
`

export const Content = styled.div`
  grid-area: content;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20rem 5.864rem 20rem;

  @media (min-width:1366px){
	  padding: 0 30rem 5.864rem 30rem;
  }

  @media (max-width:1000px){
    padding: 0 1rem 5.864rem 1.8rem;
    align-items: start;
  }
`

export const Notes = styled.div`
  width: 100%;
  height: 55vh;

  @media (max-width:1000px){
    height: 100vh;
    padding-top: 1rem;
  }

  overflow-y: auto;
  padding-right: 0.8rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.LILAS};

    @media (max-width:1000px){
      background-color: transparent;
      
    }
  }

  > button:last-child {
    margin-bottom: 0;
  }

  > button{
    
    @media (max-width:1000px){
      padding: 2.2rem;

      > div {
        gap: 0.5rem;
        > span{
          font-size: 1.2rem;
        }
      }
    }
  }

`

