import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;
export const Card = styled.div`
  width: auto;
  height: auto;
  padding: 40px;
  margin: 5% 20px;
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
export const Title = styled.h1`
  font-weight: var(--font-medium);
  text-align: center;
  margin: 10px 0 20px 0;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: var(--font-regular);
  width: 90%;
`;
export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: var(--white-light);
  border-radius: 10px;
  padding: 0.7rem;
`;
export const LinkHome = styled(Link)`
  display: block;
  width: auto;
  text-align: center;
  margin: 2rem auto;
  background-color: var(--purple);
  padding: 10px 15px;
  border-radius: 10px;
  color: var(--white-bold);
  text-decoration: none;
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
