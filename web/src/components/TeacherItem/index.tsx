import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
  <article className="teacher-item">
    <header>
      <img src="https://pbs.twimg.com/profile_images/1177028566917308416/yLNaWnRD_400x400.jpg" alt="Anderson Fernandes"/>
      <div>
        <strong>Anderson Fernandes</strong>
        <span>Programação</span>
      </div>
    </header>

    <p>
    O tamanho do que você irá criar não importa. <br /> <br /> Uns dos melhores 
    sistemas que já usei, eu mesmo fiz em poucas horas e chamava 
    “Memo Desktop”… isso faz uns 10 anos e não o uso mais, 
    mas ainda sinto saudades. 🙂
    </p>

    <footer>
      <p>
        Preço/hora:
        <strong>R$ 50,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
    </article>
  );
}

export default TeacherItem;