import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 11.6rem 8.5rem auto;
  grid-template-areas:
    "header"
    "return"
    "content";

  overflow-y: hidden;

  > a {
    grid-area: return;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    padding: 4rem 20rem 2.4rem 20rem;

    @media(max-width: 1000px){
      padding: 4rem 3rem 2.4rem 3rem;
    }

    > svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LILAS};
    }

    > p {
      color: ${({ theme }) => theme.COLORS.LILAS};
      font-size: 1.6rem;
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  padding: 0 20rem 15.6rem 20rem;

  @media(max-width: 1000px){
    padding: 0 3rem 15.6rem 3.8rem;
  }

  > div {
    width: 100%;
    height: 60vh;

    overflow-y: auto;
    padding-right: 0.8rem;

    &::-webkit-scrollbar {
      width: 0.8rem;
      
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.LILAS};

      @media(max-width: 1000px){
        background: transparent;
      }
    }
  }
`