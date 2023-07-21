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

  @media (min-width:1366px){
	  grid-template-columns: auto 50.7rem;
  }
`
  
export const Section = styled.div`
  grid-area: section;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.738rem 0 3.745rem 20rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
  }

  @media (min-width:1366px){
	  padding: 4.738rem 0 3.745rem 30rem;
  }
  
`

export const MoviePlus = styled.div`
  grid-area: button;
  padding: 4.738rem 20rem 3.745rem 0;

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
`

export const Notes = styled.div`
  width: 100%;
  height: 55vh;

  overflow-y: auto;
  padding-right: 0.8rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.LILAS};
  }

  > button:last-child {
    margin-bottom: 0;
  }

`

