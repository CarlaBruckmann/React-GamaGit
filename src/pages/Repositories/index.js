import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";//caso localStorage estiver vazio


export default function Repositories() {
  const history = useHistory();//caso localStorage estiver vazio
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName"); //pega tudo o que tinha no localStorage
    if(repositoriesName !== null){//se o localStorage não estiver vazio
       repositoriesName = JSON.parse(repositoriesName); //de string para objeto
    setRepositories(repositoriesName);//mostra na tela
    localStorage.clear();//limpa o localStorage
    }else{//se estiver vazio, mandar para Home -> sempre que atualizar a page em repositorios, vai mandar pra home
      history.push('/')
    }
  }, []);
  return (
    <S.Container>
      <S.Title>Repositórios:</S.Title>
      <S.List>
        {repositories.map((repository) => {
          return <S.ListItem>Repositório: {repository}</S.ListItem>;
        })}
      </S.List>
      <S.LinkHome to='/'>Voltar</S.LinkHome>
    </S.Container>
  );
}
