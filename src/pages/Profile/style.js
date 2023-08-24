import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 14.4rem auto;
  grid-template-areas:
  "header"
  "form";
`

export const Header = styled.header`
  grid-area: header;

  padding: 6.4rem 0 5.9rem 16.8rem;
  background-color: ${({ theme }) => theme.COLORS.NOTE};

  @media (max-width:1000px){
      padding: 6.4rem 0 5.9rem 1.8rem;
    }

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LILAS};
    }

    > p {
      color: ${({ theme }) => theme.COLORS.LILAS};
      text-align: center;
      font-size: 1.6rem;
    }

    @media (max-width:1000px){
      p{
        display: none;
      }

      > svg {
      font-size: 2.8rem;
    }
    }
  }
`

export const Form = styled.form`
  grid-area: form;

  width: 30rem;
  margin: -10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  > div:nth-child(3) {
    margin-bottom: 2.4rem;
  }

  > div:nth-child(5) {
    margin-bottom: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    object-fit: cover;
    border-radius: 9.3rem;
  }

  > label {
    position: absolute;
    bottom: 0.2rem;
    right: 0.1rem;

    background-color: ${({ theme }) => theme.COLORS.LILAS};

    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    filter: brightness(0.8);
    cursor: pointer;
    transition: filter 0.45s;

    &:hover {
      filter: brightness(1);
    }

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    }

    > input {
      display: none;
    }
  }
`