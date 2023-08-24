import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin-bottom: 2.4rem;
    width: 100%;
    height: 3.6rem;

    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 3.6rem;
      font-weight: 500;
      white-space: nowrap;

      @media(max-width: 1000px){
          font-size: 2.5rem;
      }
    }

    > ul {
      list-style: none;
      display: flex;
      gap: 1rem;

      > li {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.LILAS};
        font-size: 2rem;

        @media(max-width: 1000px){
          font-size: 1.5rem;
        }
      }

      .star-on {
        svg {
          fill: ${({ theme }) => theme.COLORS.LILAS};
        }
      }

      .star-off {
        svg {
          color: ${({ theme }) => theme.COLORS.LILAS};
        }
      }
    }

    button {
      background: none;
      border: none;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      
      > svg{
        fill: ${({ theme }) => theme.COLORS.LILAS};
        font-size: 4rem;

        @media(max-width: 1000px){
          font-size: 2.5rem;
        }
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 0.8rem;
    margin-bottom: 4rem;

    @media(max-width: 445px){
        flex-direction: column;
      }

    > div img {
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_050};
      width: 1.6rem;
      height: 1.6rem;
      object-fit: cover;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
    }

    > div p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: justify;
      font-size: 1.6rem;

      @media(max-width: 1000px){
        font-size: 1.3rem;
      }
    }

    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LILAS};
    }
  }

  > div:nth-child(3) {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 4rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    font-size: 1.6rem;

    @media(max-width: 1000px){
      font-size: 1.4rem;
    }
  }
`
