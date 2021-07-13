import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false); //erro ao não encontrar usuário

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        //console.log(response.data)
        //localStorage - guardar dado:
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        //troca para a pagina de repositórios
        setErro(false); //pra garantir que não aparecerá o erro 
        history.push("/repositories");
      })
      .catch(err => {
        setErro(true);// pega o erro e aparece
      });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input
          className="usuarioInput"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <S.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Usuário não encontrado!</S.ErrorMsg> : ''}
      
    </S.HomeContainer>
  );
}
