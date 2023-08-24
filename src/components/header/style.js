import { styled } from "styled-components"

export const Container = styled.header`
  width: 100%;
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_050};
  padding: 2.4rem 12.3rem;

  @media (max-width:1000px){
    padding: 1.8rem 1.8rem;
    gap: 1.4rem;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;
    width: 100%;

    @media (max-width:1000px){
      gap: 1.4rem;
    }

    > div:nth-child(2){
      > input {
        font-size: clamp(1.4rem, 1.4vw, 1.6rem);

        @media (min-width:1367px){
          width: 70%;
        }
      }
    }
  }

`

export const Brand = styled.div`

  > button {
    color: ${({ theme }) => theme.COLORS.LILAS};
    font-size: 2.4rem;
    font-weight: 700;
    border: none;
    background: none;
    filter: brightness(1);

    display: flex;

    .img1{
      display: flex;

      img {
        width: 2.3rem;
      }
    }
    
  }

  @media (max-width:1000px){
    width: 10%;
    display: flex;
    justify-content: center;

    .img1 > p{
      display: none;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  @media (max-width:1000px){
    flex-direction: column-reverse;
    gap: 0;

  }

  > div {
    
    text-align: end;
    
    > h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.4rem;
      font-weight: 700;
      white-space: nowrap;
      text-align: end;
      filter: brightness(0.8);
      cursor: pointer;
      transition: filter 0.4s;

      &:hover{
        filter: brightness(1);
      }

      @media (max-width:1000px){
        display: none;
      }
    }

    > button {
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 1.4rem;
      text-align: end;

      @media (max-width:1000px){
        font-size: 1.2rem;
        display: flex;
      }
    }
  }

  > a > img {
    width: 6.4rem;
    height: 6.4rem;
    object-fit: cover;
    border-radius: 50%;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_050};

    @media (max-width:1000px){
      width: 4.4rem;
      height: 4.4rem;
    }
  }
`