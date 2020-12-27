import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';

import backIcon from '../../assets/images/icons/back.svg';


import './styles.css';


function SignUp() {
    return (
        <div id="Container">
          <div id="Content">
          
          <div id="Form">

            <Link to="/SignIn">
              <img src={backIcon} alt="Voltar"/>
            </Link>

            <h1>Cadastro</h1>
            <span>
              Preencha os dados abaixo 
              <br /> para começar.
            </span>

            <Input 
                name="nome"
                placeholder="Nome"
                type="text"
            />

            <Input 
                name="sobrenome"
                placeholder="Sobrenome"
                type="text"
            /> 

            <Input 
                name="email"
                placeholder="E-mail"
                type="email"
            />

            <Input 
                name="password"
                placeholder="Senha"
                type="password"
            />


            <div id="ButtonEntrar">
                <button>Concluir Cadastro</button>
            </div>
            
          </div>
  
        </div>
        
        <div id="Info">
          <div>
            <img id="svg" src={logoImg}/>
            <h2>
              Sua plataforma de <br />
              estudos online.
            </h2>
          </div>
        </div>
      </div>
    );
}

export default SignUp;