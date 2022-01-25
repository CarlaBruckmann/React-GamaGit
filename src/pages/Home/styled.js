import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Card = styled.div`
  width: auto;
  height: auto;
  padding: 40px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 2px solid var(--purple);
  border-radius: 15px;
`;
export const IconCard = styled.i`
  font-size: 200px;
`;
export const ContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 30px 0 20px 0;
`;
export const TitleCard = styled.h1`
  font-weight: var(--font-medium);
`;
export const DescriptionCard = styled.h2`
  font-weight: var(--font-regular);
  font-size: 15px;
`;
export const Input = styled.input`
  border: 1px solid var(--white-bold);
  width: 280px;
  height: 42px;
  padding: 0 0.5rem;
  border-radius: 10px;
  background-color: var(--white-extra-light);
  color: var(--white-bold);
  font-size: 15px;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    border: 2px solid var(--purple);
    transition: 0.3s ease all;
  }
`;
export const Button = styled.button`
  border: none;
  margin-top: 1.3rem;
  padding: 10px 15px;
  border-radius: 10px;
  background: var(--purple);
  color: var(--white-bold);
  cursor: pointer;
  font-weight: var(--font-medium);
  font-size: 15px;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    transform: scale(1.05);
    transition: 0.1s ease all;
  }
`;
export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.8rem;
  font-weight: var(--font-regular);
  font-size: 15px;
  color: var(--white-bold);
  margin-top: 1rem;
`;
