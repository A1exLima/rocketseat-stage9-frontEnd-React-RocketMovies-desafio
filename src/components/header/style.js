import { styled } from "styled-components"
import { Link } from "react-router-dom"

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

  > div:nth-child(2) {
    max-width: 63rem;
    height: 5.6rem;

    > input {
      font-size: 1.4rem;
      padding: 1.9rem 2.4rem;
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
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  
  gap: 0.9rem;

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
    }

    > button {
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 1.4rem;
      text-align: end;
    }
  }

  > a > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_050};
  }
`