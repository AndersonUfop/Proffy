<p align="center"><img src="web/src/assets/images/logo.svg" height="50px"></p>
<p align="center">Sua plataforma de estudos online</p>
<img src="https://img.shields.io/github/languages/count/AndersonUfop/Proffy?style=for-the-badge">
<img src="https://img.shields.io/github/languages/top/AndersonUfop/Proffy?color=%2345637&style=for-the-badge">
<img src="https://img.shields.io/github/repo-size/AndersonUfop/Proffy?color=%23794DB0&style=for-the-badge">
<img src="https://img.shields.io/github/last-commit/AndersonUfop/Proffy?color=4AB3B0&style=for-the-badge">

<p align="center"> 
  <img src="icons/projeto.png">
</p>

Tabela de Conteúdos
=================
<!-- ts -->
* [Sobre](#sobre-o-projeto)
* [Status](#Status-do-projeto)
* [Instalação](#Instalacao)
* [Como Usar](#Como-Usar)
* [Tecnologias](#Tecnologias)
* [Licença](#Licenca)
* [Autor](#Autor)
<!--te-->


  # Sobre o Projeto
  O projeto Proffy foi desenvolvido durante a 2ª Edição do Next Level Week, da Rocketseat. 
  A aplicação Proffy é uma plataforma de estudos online, onde o professor poderá se cadastrar e informar quais horários está disponível e quais matérias ele leciona.
  
  Além disso, os alunos que usarem  a plataforma poderão pesquisar pela matéria, dia da semana e horário e saberem qual professor está disponível, podendo entrar em contato com ele via whatsapp.
  
  # Status do Projeto
  <h4 align="center">
   🚧 Proffy  🚀 Em Construção... 🚧
  </h4>

  # Layout da aplicação
  Você encontra o layout da aplicação no Figma:
  <a href="https://www.figma.com/file/Agvethfp7FANyXDDU3LUfd/Proffy-Web-2.0?node-id=2%3A3">

  <img alt="Made by Anderson" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
  </a>

  # Instalação

  ### **Pré-requisitos**
  Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:


  [Git](https://git-scm.com)

  Caso esteja usando o Ubuntu, digite este comando no terminal:
  ```bash
  $ apt-get install git
  ```

  Se estiver usando o windows é só seguir os passos da instalação.
  
  [Node.js](https://nodejs.org/en/)

  Para instalar o Node JS siga os seguintes passos:
  ```bash
  # Para o Linux iremos utilizar o NodeSource
  $ sudo apt install curl

  #Com o curl instalado execute o comando de instalação da versão LTS mais recente disponível:
  $ curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Por fim execute esses comandos no terminal
$ node -v
$ npm -v

# Caso retorne as versões, sua instalação ocorreu com sucesso.
  ```

  [Yarn](https://yarnpkg.com/getting-started/install)

  Para instalar o Yarn , vamos configurar o repositório do Yarn executando:
  ```bash
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  ```

  Instale usando o seguinte comando:
  ```bash
  sudo apt update && sudo apt install --no-install-recommends yarn
  ```

  Adicione ao arquivo ~/.bashrc (ou ~/.zshrc caso você utilize o shell Zsh) a seguinte linha: 

  ```bash
  export PATH="$PATH:`yarn global bin`"
  ```

  [Insomnia](https://insomnia.rest/download/)

  Para intalar o Insomnia basta seguir os passos normais da instalação.

  [Expo](https://expo.io/learn)

  Caso você esteja usando o npm instale usando este comando:

  ```bash
$ npm install expo-cli --global
```

Caso esteja usando o yarn utilize este comando:
```bash
$ yarn global add expo-cli 
```

Para verificar se a instalação ocorreu tudo certo, execute:
```bash
$ yarn global add expo-cli 
```

⚠️ Para rodar a aplicação no dispositivo, você deverá procurar o Expo na loja do seu smartphone e instalá-lo no dispositivo.

  Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

# Rodando a aplicação

### 🎲 **Rodando o Back End (servidor)**


```bash
# Clone este repositório
$ git clone <https://github.com/AndersonUfop/Proffy>

# Acesse a pasta do projeto no terminal/cmd
$ cd Proffy

# Vá para a pasta server
$ cd server

# Instale as dependências
$ yarn
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ yarn start
$ npm start

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### **Rodando o front-end**


```bash
# Acesse a pasta do web dentro de Proffy
$ cd web

# Instale as dependências
$ yarn
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ yarn start
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### **Rodando a aplicação mobile**

Tenha um emulador para Android ou IOS instalado em sua máquina ou use o seu próprio dispositivo físico.

Tenha também o expo já instalado

```bash
# Acesse a pasta mobile dentro de Proffy
$ cd mobile

# Instale as dependências
$ yarn
$ npm install

# Execute o comando
$ yarn start
$ npm start
```

A aplicação iniciará, para rodar em seu Smartphone, leia o QR Code utilizando o aplicativo do Expo, se estiver utilizando uma máquina virtual utilize as opções **Run on Android device/emulator** para Android ou **Run on iOS emulator** para iOS.

# Tecnologias Utilizadas

As seguintes ferramentas foram utilizadas na construção do projeto:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/)

# Licença
Este projeto está sobre a licença [MIT](LICENSE).

Feito com 💜 por Anderson 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Anderson-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anderson-fernandes-8b5a50135/)](https://www.linkedin.com/in/anderson-fernandes-8b5a50135/) 
[![Linkedin Badge](https://img.shields.io/badge/-andersonfferreira96@gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:andersonfferreira96@gmail.com)](mailto:andersonfferreira96@gmail.com) 










