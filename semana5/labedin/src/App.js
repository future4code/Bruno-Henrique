import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://picsum.photos/id/1025/200/300"
          nome="Bruno Henrique"
          descricao="Oi, eu sou o Bruno. Sou newbie na carreira de Desenvolvedor Fullstack. Gosto de puzzles em geral e de jogos eletrônicos."
        />
        <CardPequeno 
          email="brunohcsilva@gmail.com"
          adress="Rua das Girafas Bibliotecárias, 20 - Turma Epps "
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Torelli Engenharia (Fev/2017 - Mai/2017)"
          descricao="Assistente de engenheiro"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="MG Refrigera Brasil - SOAR (Nov/2013 - Jun/2016)"
          descricao="Auxiliar administrativo"
        />
        <h2>Formação</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu (Nov/2020 - cursando)"
          descricao="Desenvolvedor Fullstack"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="Centro Universitatario de Belo Horizonte (trancado)"
          descricao="Engenharia Elétrica"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
